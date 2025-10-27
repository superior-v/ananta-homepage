import React from "react";
import { ArrowRight } from "lucide-react";

const ManufacturingSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://placehold.co/600x400/1a1a1a/FFFFFF?text=Manufacturing+Floor"
              alt="Ananta Rubber manufacturing facility"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              "Neque Porro Quisquam Est Qui Dolorem Ipsum Quia Dolor Sit Amet,
              Consectetur, Adipisci Velit..."
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Driving precision in rubber engineering since 2016, Ananta Rubber
              is a Hyderabad-based manufacturer of high-quality butyl rubber
              inner tubes, automotive flaps, curing envelopes, and tubeless
              valves. Committed to the "Make in India" vision, we combine
              innovation and expertise to power the global automotive industry.
            </p>

            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-medium hover:shadow-lg transition-all">
              Learn more
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSection;
