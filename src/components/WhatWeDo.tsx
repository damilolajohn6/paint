import React from "react";

const WhatWeDo = () => {
  return (
    <section className="py-16 bg-slate-50 text-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#DBA56D]">
        What we do
      </h2>
      <p className="max-w-2xl mx-auto text-[#95725A] mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-4">
        <div className="bg-[#C56905] text-white font-bold text-xl px-6 py-20 rounded-full rotate-[25deg] w-40 md:w-52">
          <p className="rotate-[-90deg] whitespace-nowrap font-handwriting">
            Residential
          </p>
        </div>

        <div className="bg-[#E5C2C2] text-white font-bold text-xl px-6 py-20 rounded-full rotate-[25deg] w-40 md:w-52">
          <p className="rotate-[-90deg] whitespace-nowrap font-handwriting">
            Commercial
          </p>
        </div>

        <div className="bg-[#E9C9A9] text-white font-bold text-xl px-6 py-20 rounded-full rotate-[25deg] w-40 md:w-52">
          <p className="rotate-[-90deg] whitespace-nowrap font-handwriting">
            Restoration
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
