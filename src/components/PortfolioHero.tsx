import Image from "next/image";
import React from "react";

const PortfolioHero = () => {
  return (
    <div>
      <section className="relative h-[90vh] w-full overflow-hidden">
        {/* Background Right Image (Orange Side) */}
        <div className="absolute inset-0 flex">
          <div className="w-1/2 h-full relative">
            <Image
              src="/assets/pohero1.jpg"
              alt="Painting Left"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="w-1/2 h-full relative">
            <Image
              src="/assets/pohero2.jpg"
              alt="Painting Right"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Overlay Content */}
        <div className="absolute inset-0 z-20 max-w-[650px] mx-auto px-4 py-16 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Parissera Colors
          </h1>
          <h2 className="mt-2 md:mt-10 text-3xl font-bold text-[#DBA56D]">
            Home/Portfolio
          </h2>

          {/* CTA Button */}
          <div className="mt-6 md:mt-12 flex justify-center">
            <a
              href="#"
              className="inline-flex items-center text-white font-bold text-lg border-b-2 border-white group"
            >
              Request for a painter Today
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioHero;
