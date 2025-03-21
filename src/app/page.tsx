import AboutUsSection from "@/components/AboutUsSection";
import HomeHero from "@/components/HomeHero";
import PaintingNewsSection from "@/components/PaintingNewsSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhatWeDo from "@/components/WhatWeDo";


export default function Home() {
  return (
    <div className="">
      <HomeHero />
      <WhatWeDo />
      <AboutUsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <PaintingNewsSection />
    </div>
  );
}
