import Image from "next/image";
import React from "react";

const HomeHero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Right Image (Orange Side) */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 h-full relative">
          <Image
            src="/assets/homehero1.jpg" // Left side image (Brown painting)
            alt="Painting Left"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="w-1/2 h-full relative">
          <Image
            src="/assets/homehero2.jpg" // Right side image (Orange wall)
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
      <div className="absolute inset-0 z-20 max-w-[650px] mx-auto px-4 py-16 flex flex-col  justify-center h-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Parissera Colors
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">
          {/* Left Content */}
          <div className="flex-1 text-[#9F6F38]">
            <h2 className="text-2xl font-semibold mb-4">Mission / Vision</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="text-lg font-bold">÷</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.
                </p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg font-bold">÷</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.
                </p>
              </li>
            </ul>
          </div>

          {/* Divider Line */}
          <div className="hidden md:block w-[1px] bg-gray-300 h-full" />

          {/* Right Content */}
          <div className="flex-1 text-center justify-center items-center my-auto md:text-left text-[#0A0A5E] font-semibold">
            <p className="text-xl">
              We Bring Color to Life, One Brushstroke at a Time!
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-6 flex justify-center">
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
  );
};

export default HomeHero;
