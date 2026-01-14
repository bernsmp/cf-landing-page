'use client';

import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { HeroSectionV2 } from '@/components/home/HeroSectionV2';
import { LeadMagnetPopup } from '@/components/home/LeadMagnetPopup';
import { VideoSection } from '@/components/home/VideoSection';
import { TransformationStory } from '@/components/home/TransformationStory';
import { IdentitySection } from '@/components/home/IdentitySection';
import { SocialProof } from '@/components/home/SocialProof';
import { CTASectionV2 } from '@/components/home/CTASectionV2';
import { HomePageJsonLd } from '@/components/seo/JsonLd';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--grey-950)]">
      {/* Structured data for SEO/AEO */}
      <HomePageJsonLd />

      {/* Grain overlay */}
      <div className="grain-overlay" />

      <Navigation />

      <main>
        <HeroSectionV2 />
        <VideoSection />
        <TransformationStory />
        <IdentitySection />
        <SocialProof />
        <CTASectionV2 />
      </main>

      {/* Scroll-triggered popup */}
      <LeadMagnetPopup />

      <Footer />
    </div>
  );
}
