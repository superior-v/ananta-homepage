import React from "react";
import { ArrowRight } from "lucide-react"; // Lucide (Radix UI icon set)

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quote */}
        <div className="text-center mb-12">
          <p className="text-2xl sm:text-3xl md:text-4xl font-light italic text-gray-800 leading-snug">
            "Neque Porro Quisquam Est Qui Dolorem Ipsum
            <br className="hidden sm:inline" />
            Quia Dolor Sit Amet, Consectetur, Adipisci Velit..."
          </p>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            Driving precision in rubber engineering since 2016, Ananta Rubber is
            a Hyderabad-based manufacturer of high-quality butyl rubber inner
            tubes, automotive flaps, curing envelopes, and tubeless valves.
            Committed to the "Make in India" vision, we combine innovation and
            expertise to power the global automotive industry.
          </p>

          {/* Learn More button */}
          <div className="flex justify-center md:justify-start">
            <a
              href="#learnmore"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-mag)] text-white font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              Learn more
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
