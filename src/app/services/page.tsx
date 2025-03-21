import FeaturedServices from '@/components/FeaturedServices'
import PortfolioSection from '@/components/PortfolioSection'
import ServiceHero from '@/components/ServiceHero'
import WhatWeDo from '@/components/WhatWeDo'
import React from 'react'

const ServicePage = () => {
  return (
    <div>
      <ServiceHero />
      <WhatWeDo />
      <FeaturedServices />
      <PortfolioSection />
      <FeaturedServices />
    </div>
  );
}

export default ServicePage