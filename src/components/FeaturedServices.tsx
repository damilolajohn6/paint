import React from "react";
import { BrickWall, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Wall Painting",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quis sit egestas amet ultrices egestas sus",
    bgColor: "bg-[#E1C3A8]",
  },
  {
    title: "Repairs Painting",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quis sit egestas amet ultrices egestas sus",
    bgColor: "bg-[#C87416]",
  },
  {
    title: "Regular painting",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quis sit egestas amet ultrices egestas sus",
    bgColor: "bg-[#D8B5B5]",
  },
  {
    title: "Wall Painting",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quis sit egestas amet ultrices egestas sus",
    bgColor: "bg-[#C87416]",
  },
  {
    title: "Repairs Painting",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quis sit egestas amet ultrices egestas sus",
    bgColor: "bg-[#D8B5B5]",
  },
  {
    title: "Regular painting",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quis sit egestas amet ultrices egestas sus",
    bgColor: "bg-[#E1C3A8]",
  },
];

const FeaturedServices: React.FC = () => {
  return (
    <section className="bg-slate-50 px-4 md:px-12 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-[#E1C3A8] mb-2">
        Featured Services
      </h2>
      <p className="text-gray-400 mb-10">Check Our Exclusives Services</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.bgColor} text-white p-6 rounded-md flex flex-col justify-between min-h-[220px]`}
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <BrickWall className="w-6 h-6" />
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>

            <div className="flex justify-between items-center mt-6 text-white font-bold">
              <span>Hire Now</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedServices;
