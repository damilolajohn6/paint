import ColorConsultations from "@/components/ColorConsultations";
import PaintingNewsSection from "@/components/PaintingNewsSection";
import PortfolioHero from "@/components/PortfolioHero";
import PortfolioSection from "@/components/PortfolioSection";
import React from "react";

const PortfolioPage = () => {
  return (
    <div>
      <PortfolioHero />
      <PortfolioSection />
      <div className="">
        <ColorConsultations />
      </div>
        <PaintingNewsSection />
    </div>
  );
};

export default PortfolioPage;
