import React from "react";
import { PlusSquare } from "lucide-react"; // Icon library

const newsItems = [
  {
    title: "Painting is an illusion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
  },
  {
    title: "Painting is an illusion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
  },
  {
    title: "Painting is an illusion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
  },
  {
    title: "Painting is an illusion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
  },
];

const PaintingNewsSection: React.FC = () => {
  return (
    <section className="bg-[#E1C3A8] text-white px-4 md:px-12 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-12">
        News On Painting & colors Trends
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#FBF9F2] text-[#C68840] p-6 rounded-md flex flex-col justify-between min-h-[180px]"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-[#4A4A4A]">{item.description}</p>
            </div>
            <div className="flex justify-end mt-4">
              <PlusSquare className="w-5 h-5 text-[#C68840]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PaintingNewsSection;
