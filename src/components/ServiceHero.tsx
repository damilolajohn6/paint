import Image from "next/image";
import React from "react";

const ServiceHero = () => {
  return (
    <div>
      <section className="relative h-[400px] w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/assets/servicehero.png"
          alt="Contact Us"
          layout="fill"
          objectFit="cover"
          className="object-center"
          priority
        />
      </section>
    </div>
  );
};

export default ServiceHero;
