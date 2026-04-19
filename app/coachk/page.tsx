"use client";

import ScrollProgress from "@/components/coachk/ScrollProgress";
import HeroSection from "@/components/coachk/HeroSection";
import VideoOverview from "@/components/coachk/VideoOverview";
import FourDimensions from "@/components/coachk/FourDimensions";
import PatternDiscovery from "@/components/coachk/PatternDiscovery";
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

      <FourDimensions />

      <div className="section-divider" />

      <PatternDiscovery />

      <div className="section-divider" />

      <ComparisonBlock />

      <div className="section-divider" />

      <BlindSpots />

      <div className="section-divider" />

      <PatternDynamics />

      <div className="section-divider" />

      <VocabularySection />

      <div className="section-divider" />

      <StoriesSection />

      <div className="section-divider" />

      <PromptsSection />

      <div className="section-divider" />

      <CTASection />
    </main>
  );
}
