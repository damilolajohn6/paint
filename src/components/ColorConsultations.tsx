import React from "react";
import Image from "next/image";

const images = [
  "/assets/color1.jpg",
  "/assets/color2.jpg",
  "/assets/color1.jpg",
];

const ColorConsultations: React.FC = () => {
  return (
    <section className="bg-slate-50 px-4 md:px-12 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-[#E1C3A8] mb-10">
        Colors Consultations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-64">
            <Image
              src={src}
              alt={`Color Consultation ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ColorConsultations;
