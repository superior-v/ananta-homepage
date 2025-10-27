import React from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Ananta Rubber is our go-to supplier for all things rubber. Their products are high quality and durable, and their customer service is top-notch.",
      author: "Bob Fisher",
      company: "Tri-City Manufacturing",
      image: "https://placehold.co/80x80/4A90E2/FFFFFF?text=BF",
    },
    {
      id: 2,
      quote:
        "Ananta Rubber is our go-to supplier for all things rubber. Their products are high quality and durable, and their customer service is top-notch.",
      author: "Bob Fisher",
      company: "Tri-City Manufacturing",
      image: "https://placehold.co/80x80/4A90E2/FFFFFF?text=BF",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Testimonials
          </h2>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Quote className="w-6 h-6 text-white" fill="white" />
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
