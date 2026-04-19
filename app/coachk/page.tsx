"use client";

import ScrollProgress from "@/components/coachk/ScrollProgress";
import HeroSection from "@/components/coachk/HeroSection";
import VideoOverview from "@/components/coachk/VideoOverview";
import FourDimensions from "@/components/coachk/FourDimensions";
import PatternDiscovery from "@/components/coachk/PatternDiscovery";
import ParallaxBreak from "@/components/coachk/ParallaxBreak";
import RadarSection from "@/components/coachk/RadarSection";
import CoreDiscoveryReveal from "@/components/coachk/CoreDiscoveryReveal";
import ComparisonBlock from "@/components/coachk/ComparisonBlock";
import BlindSpots from "@/components/coachk/BlindSpots";
import PatternDynamics from "@/components/coachk/PatternDynamics";
import VocabularySection from "@/components/coachk/VocabularySection";
import StoriesSection from "@/components/coachk/StoriesSection";
import PromptsSection from "@/components/coachk/PromptsSection";
import CTASection from "@/components/coachk/CTASection";

export default function CoachKPage() {
  return (
    <main
      className="relative min-h-screen"
      style={{ background: "var(--grey-950)", color: "var(--grey-200)" }}
    >
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Sections */}
      <HeroSection />

      <div className="section-divider" />

      <VideoOverview />

      <div className="section-divider" />

      <RadarSection />

      <div className="section-divider" />

      <CoreDiscoveryReveal />

      <div className="section-divider" />

      <FourDimensions />

      <div className="section-divider" />

      <PatternDiscovery />

      <ParallaxBreak
        image="/coachk/parallax-coaching-v2-1.png"
        quote="Ownership equals culture. You have to have ownership or you won't have a good culture."
        attribution="Coach K — USU/Walter Reed Leadership Grand Rounds"
      />

      <ComparisonBlock />

      <div className="section-divider" />

      <BlindSpots />

      <div className="section-divider" />

      <PatternDynamics />

      <div className="section-divider" />

      <VocabularySection />

      <ParallaxBreak
        image="/coachk/parallax-speaking-v2-2.png"
        quote="I can't tell you how I feel. I can only tell you how I feel about us."
        attribution="Coach K — Basketball Hall of Fame Induction, 2001"
      />

      <StoriesSection />

      <div className="section-divider" />

      <PromptsSection />

      <div className="section-divider" />

      <CTASection />
    </main>
  );
}
