import React from "react";

const HeroSection = () => {
  const tireImageUrl = "/tires.jpg"; // put tires.jpg inside public/

  return (
    <section className="relative overflow-hidden bg-gray-50">
      {/* Hero image */}
      <div className="relative h-[480px] md:h-[550px] rounded-b-3xl overflow-hidden shadow-lg bg-black">
        <img
          src={tireImageUrl}
          alt="High-performance rubber tires"
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://placehold.co/1280x480/000000/FFFFFF?text=Tire+Image+Not+Found";
          }}
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* text content */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-widest leading-tight">
            PIONEERS IN AUTOMOBILE RUBBER PRODUCTS
          </h1>
        </div>

        {/* slider dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-white/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-blue)] ring-2 ring-white" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
