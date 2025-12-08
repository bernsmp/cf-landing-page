'use client';

import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { DrivingAnalogy } from '@/components/home/DrivingAnalogy';
import { CourageStory } from '@/components/home/CourageStory';
import { OutcomesSection } from '@/components/home/OutcomesSection';
import { SocialProof } from '@/components/home/SocialProof';
import { FeaturedContent } from '@/components/home/FeaturedContent';
import { CTASection } from '@/components/home/CTASection';
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
        <HeroSection />
        <DrivingAnalogy />
        <CourageStory />
        <OutcomesSection />
        <SocialProof />
        <FeaturedContent />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}
