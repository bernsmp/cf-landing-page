'use client';

import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { DrivingAnalogy } from '@/components/home/DrivingAnalogy';
import { CourageStory } from '@/components/home/CourageStory';
import { OutcomesSection } from '@/components/home/OutcomesSection';
import { SocialProof } from '@/components/home/SocialProof';
import { CTASection } from '@/components/home/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--grey-950)]">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      <Navigation />
      
      <main>
        <HeroSection />
        <DrivingAnalogy />
        <CourageStory />
        <OutcomesSection />
        <SocialProof />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}
