import { NextResponse } from 'next/server';

interface SubstackArticle {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
}

export async function GET() {
  try {
    // Fetch the Substack RSS feed
    const response = await fetch('https://irreplaceablepositioning.substack.com/feed', {
      next: { revalidate: 300 }, // Cache for 5 minutes
    });

    if (!response.ok) {
      throw new Error('Failed to fetch RSS feed');
    }

    const xml = await response.text();
    
    // Parse the XML
    let articles = parseRSSFeed(xml);
    
    // Fetch OG images for articles missing thumbnails
    articles = await fetchMissingThumbnails(articles);
    
    return NextResponse.json(articles);
  } catch (error) {
    console.error('Error fetching Substack RSS:', error);
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
}

async function fetchMissingThumbnails(articles: SubstackArticle[]): Promise<SubstackArticle[]> {
  const articlesWithThumbnails = await Promise.all(
    articles.map(async (article) => {
      if (article.thumbnail) {
        return article; // Already has thumbnail
      }
      
      try {
        // Fetch the article page to get og:image
        const pageResponse = await fetch(article.link, {
          next: { revalidate: 86400 }, // Cache page fetches for 24 hours
        });
        
        if (!pageResponse.ok) {
          return article;
        }
        
        const html = await pageResponse.text();
        
        // Extract og:image
        const ogImageMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i) ||
                            html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:image["'][^>]*>/i);
        
        if (ogImageMatch?.[1]) {
          return { ...article, thumbnail: ogImageMatch[1] };
        }
        
        // Try twitter:image as fallback
        const twitterImageMatch = html.match(/<meta[^>]*name=["']twitter:image["'][^>]*content=["']([^"']+)["'][^>]*>/i) ||
                                  html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']twitter:image["'][^>]*>/i);
        
        if (twitterImageMatch?.[1]) {
          return { ...article, thumbnail: twitterImageMatch[1] };
        }
        
        return article;
      } catch (error) {
        console.error(`Failed to fetch OG image for ${article.link}:`, error);
        return article;
      }
    })
  );
  
  return articlesWithThumbnails;
}

function parseRSSFeed(xml: string): SubstackArticle[] {
  const articles: SubstackArticle[] = [];
  
  // Simple regex-based XML parsing (works for RSS feeds)
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  const titleRegex = /<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/;
  const linkRegex = /<link>(.*?)<\/link>/;
  const pubDateRegex = /<pubDate>(.*?)<\/pubDate>/;
  const descriptionRegex = /<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>|<description>([\s\S]*?)<\/description>/;
  
  // Multiple patterns for finding images in RSS
  const enclosureRegex = /<enclosure[^>]*url=["']([^"']*?)["'][^>]*>/i;
  const mediaContentRegex = /<media:content[^>]*url=["']([^"']*?)["'][^>]*>/i;
  const mediaThumbnailRegex = /<media:thumbnail[^>]*url=["']([^"']*?)["'][^>]*>/i;

  let match;
  while ((match = itemRegex.exec(xml)) !== null) {
    const item = match[1];
    
    const titleMatch = item.match(titleRegex);
    const linkMatch = item.match(linkRegex);
    const pubDateMatch = item.match(pubDateRegex);
    const descriptionMatch = item.match(descriptionRegex);
    
    // Try multiple sources for thumbnail
    let thumbnail: string | undefined;
    
    // 1. Check enclosure tag
    const enclosureMatch = item.match(enclosureRegex);
    if (enclosureMatch?.[1] && isImageUrl(enclosureMatch[1])) {
      thumbnail = enclosureMatch[1];
    }
    
    // 2. Check media:content tag
    if (!thumbnail) {
      const mediaMatch = item.match(mediaContentRegex);
      if (mediaMatch?.[1] && isImageUrl(mediaMatch[1])) {
        thumbnail = mediaMatch[1];
      }
    }
    
    // 3. Check media:thumbnail tag
    if (!thumbnail) {
      const thumbMatch = item.match(mediaThumbnailRegex);
      if (thumbMatch?.[1]) {
        thumbnail = thumbMatch[1];
      }
    }
    
    // 4. Extract from description HTML (try multiple img patterns)
    if (!thumbnail && descriptionMatch?.[1]) {
      const desc = descriptionMatch[1];
      // Try different img tag patterns
      const imgPatterns = [
        /<img[^>]*src=["']([^"']+)["'][^>]*>/i,
        /<img[^>]*data-src=["']([^"']+)["'][^>]*>/i,
        /src=["'](https:\/\/[^"']*substackcdn\.com[^"']*)["']/i,
        /src=["'](https:\/\/[^"']*\.(?:jpg|jpeg|png|gif|webp)[^"']*)["']/i,
      ];
      
      for (const pattern of imgPatterns) {
        const imgMatch = desc.match(pattern);
        if (imgMatch?.[1] && isImageUrl(imgMatch[1])) {
          thumbnail = imgMatch[1];
          break;
        }
      }
    }

    const article: SubstackArticle = {
      title: titleMatch?.[1] || titleMatch?.[2] || 'Untitled',
      link: linkMatch?.[1] || '',
      pubDate: pubDateMatch?.[1] || new Date().toISOString(),
      description: descriptionMatch?.[1] || descriptionMatch?.[2] || '',
      thumbnail,
    };

    if (article.link) {
      articles.push(article);
    }
  }

  // Return up to 12 articles
  return articles.slice(0, 12);
}

function isImageUrl(url: string): boolean {
  if (!url) return false;
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
  const lowerUrl = url.toLowerCase();
  return imageExtensions.some(ext => lowerUrl.includes(ext)) || 
         lowerUrl.includes('substackcdn.com') ||
         lowerUrl.includes('substack-post-media');
}
