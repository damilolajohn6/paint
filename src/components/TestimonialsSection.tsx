import React from "react";
import Image from "next/image";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tel",
    name: "Natasha Tomvile",
    title: "House Owner",
    image: "/assets/avatar.jpg",
    bgColor: "bg-[#EAD3C1]",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.",
    name: "Natasha Tomvile",
    title: "House Owner",
    image: "/assets/avatar.jpg",
    bgColor: "bg-[#E9C5CB]",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tel",
    name: "Natasha Tomvile",
    title: "House Owner",
    image: "/assets/avatar.jpg",
    bgColor: "bg-[#EAD3C1]",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-slate-50 text-white px-4 md:px-12 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-[#D6974E] mb-12">
        What are Customer Saying,,,,,, Testimonials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`p-6 rounded-md shadow-md ${testimonial.bgColor} text-black flex flex-col justify-between`}
          >
            <p className="text-sm leading-relaxed mb-6">{testimonial.text}</p>

            <div className="flex items-center gap-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm">{testimonial.name}</p>
                <p className="text-xs text-gray-700">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
