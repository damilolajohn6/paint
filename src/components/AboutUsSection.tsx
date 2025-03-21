import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <section className="flex flex-col md:flex-row w-full">
      {/* Left Section - About Us + Image */}
      <div className="bg-[#D6974E] text-white p-6 md:p-12 md:w-2/3 flex flex-col justify-between">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* About Us Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-sm leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo.
            </p>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue.
            </p>
            {/* Hire Now Link */}
            <div className="mt-6">
              <button className="flex items-center gap-2 font-semibold text-white border-b-2 border-white pb-1">
                Hire Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <Image
              src="/assets/pbuck.jpg"
              alt="Painting Right"
              width={400}
              height={400}
              className="object-cover w-full h-auto border-4 border-white max-w-[400px]"
              priority
            />
          </div>
        </div>
      </div>

      {/* Right Section - CTA */}
      <div className="bg-[#E7C1C0] text-white p-6 md:p-12 md:w-1/3 flex flex-col justify-between">
        <div className="flex-1 flex items-center justify-center">
          <h2 className="text-2xl font-bold text-center md:text-left">
            Do you have any Project?
          </h2>
        </div>

        {/* Get a Quote Link */}
        <div className="mt-6">
          <button className="flex items-center gap-2 font-semibold text-[#C56905] border-b-2 border-[#C56905] pb-1">
            Get a quote
            <ArrowRight className="w-4 h-4 text-[#C56905]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
