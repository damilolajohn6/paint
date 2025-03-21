import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const PortfolioSection = () => {
  return (
    <section className="bg-slate-50  text-white px-4 md:px-12 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-[#D6974E] mb-12">
        Our Recent Completed Portfolio
      </h2>

      {/* Portfolio Item 1 */}
      <div className="flex flex-col lg:flex-row items-center container mb-16 relative">
        {/* Text Block */}
        <div className="lg:w-1/2 z-10">
          <h3 className="text-lg font-semibold text-[#D6974E] mb-4">
            Wall Painting
          </h3>
          <p className="text-sm md:text-base text-justify leading-relaxed text-[#E3B98E] mb-6 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu.
          </p>
          <button className="flex items-center gap-2 font-semibold text-[#D6974E] border-b-2 border-[#D6974E] pb-1">
            See More
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Image Block */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 relative flex justify-center">
          <div className="relative w-full max-w-md">
            <Image
              src="/assets/exterior1.jpg"
              alt="Interior 1"
              width={500}
              height={300}
              className="object-cover w-full h-auto border-4 border-white relative z-20"
              priority
            />
            <Image
              src="/assets/interior1.jpg"
              alt="Exterior 1"
              width={250}
              height={200}
              className="object-cover w-full h-auto border-4 border-white absolute top-8 left-8 z-10"
              priority
            />
          </div>
        </div>
      </div>

      {/* Portfolio Item 2 */}
      <div className="flex flex-col lg:flex-row-reverse container items-center relative">
        {/* Text Block */}
        <div className="lg:w-1/2 z-10">
          <h3 className="text-lg font-semibold text-[#D6974E] mb-4">
            Wall Painting
          </h3>
          <p className="text-sm md:text-base text-justify leading-relaxed text-[#E3B98E] mb-6 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu.
          </p>
          <button className="flex items-center gap-2 font-semibold text-[#D6974E] border-b-2 border-[#D6974E] pb-1">
            See More
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Image Block */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 relative flex justify-center">
          <div className="relative w-full max-w-md">
            <Image
              src="/assets/exterior2.jpg"
              alt="Interior 2"
              width={500}
              height={300}
              className="object-cover w-full h-auto border-4 border-white relative z-20"
              priority
            />
            <Image
              src="/assets/interior2.jpg"
              alt="Exterior 2"
              width={300}
              height={200}
              className="object-cover w-full h-auto border-4 border-white absolute top-8 left-8 z-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
