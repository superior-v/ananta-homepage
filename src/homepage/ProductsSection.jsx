import React from "react";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      title: "Butyl Tubes",
      image: "https://placehold.co/400x300/1a1a1a/FFFFFF?text=Butyl+Tube",
      description:
        "Our butyl tubes resist resistance and strength against tension and tearing, with advanced air leaking ensuring premium quality for trucks, passenger, and two-wheel tyres.",
    },
    {
      id: 2,
      title: "Curing Bags",
      image: "https://placehold.co/400x300/1a1a1a/FFFFFF?text=Curing+Bag",
      description:
        "Ananta Rubber Bags, used for tyre retreading, are valued for durability and long service life, meeting strict quality standards and client specifications with consistent reliability.",
    },
    {
      id: 3,
      title: "Envelopes",
      image: "https://placehold.co/400x300/1a1a1a/FFFFFF?text=Envelope",
      description:
        "We manufacture premium envelopes for the global retreading industry, using heat resistant polymers and imported butyl rubber to ensure long service life and lower cost per cure.",
    },
    {
      id: 4,
      title: "Flaps",
      image: "https://placehold.co/400x300/1a1a1a/FFFFFF?text=Flap",
      description:
        "We serve a complete portfolio of Tyre Flaps. Our Tyre Flaps protect the tyre against damage and alterations. These products have wear resistance and are highly sustainable and effective.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Products
        </h2>

        {/* Products Grid with Navigation */}
        <div className="relative">
          {/* Left Navigation */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl p-[2px] bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-white rounded-2xl overflow-hidden h-full">
                  {/* Product Image */}
                  <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 text-sm">
                      <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        Learn More
                      </button>
                      <span className="text-gray-400">|</span>
                      <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        Request catalogue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Navigation */}
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Tire Size Guide Section */}
        <div className="mt-20 bg-gradient-to-br from-blue-50 to-pink-50 rounded-3xl p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Find Your
                <br />
                Tyre Size Guide
              </h3>

              <div className="space-y-4">
                {/* Vehicle Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vehicle
                  </label>
                  <button className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-left flex items-center justify-between hover:border-gray-400 transition-colors">
                    <span className="text-gray-600">Lorem Ipsum</span>
                    <Download className="w-4 h-4 text-gray-500" />
                  </button>
                </div>

                {/* Size Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Size
                  </label>
                  <button className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-left flex items-center justify-between hover:border-gray-400 transition-colors">
                    <span className="text-gray-600">Lorem Ipsum</span>
                    <Download className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>

            {/* Tire Specifications */}
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 mb-6">
                <img
                  src="https://placehold.co/256x256/000000/FFFFFF?text=Tire"
                  alt="Tire guide"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="text-sm text-gray-700 space-y-1">
                <p>• Tyre Variant : 80CKSOLID</p>
                <p>
                  • Wheel/Rim Type : Single Piece Wheel(DDCL/B/QUICK HEEL/ST)
                </p>
                <p>• Tyre Size(Front) : 7.00-12</p>
                <p>• Rim Size(Front) : 5.00Sq2</p>
                <p>• Tyre Size(Rear) : 6.50-10</p>
                <p>• Rim Size(Rear) : 5.5Fq0A/5.00Fq0</p>
              </div>

              <button className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-medium hover:shadow-lg transition-all">
                Learn more
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
