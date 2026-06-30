import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import ServicesPreview from "@/components/home/ServicesPreview";
import TechMarquee from "@/components/home/TechMarquee";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import CTABlock from "@/components/home/CTABlock";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elixor Tech — Engineered for Excellence",
  description: "We engineer digital excellence. Scalable, secure, and smart digital products that drive real business growth.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesPreview />
      <TechMarquee />
      <TestimonialsSection />
      <FAQSection />
      <CTABlock />
    </>
  );
}
