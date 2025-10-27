import React, { useState } from "react";
import {
  ArrowRight,
  Download,
  ChevronLeft,
  ChevronRight,
  Quote,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

// Header Component
const Header = () => {
  const navItems = ["Home", "About Us", "Products", "My Wall", "Contact Us"];

  return (
    <header className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-[2px] bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500">
          <div className="bg-white rounded-2xl px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/src/assets/logo.svg"
                alt="Ananta Rubber Logo"
                className="h-12 w-auto object-contain"
              />
            </div>

            <nav className="hidden md:block">
              <ul className="flex gap-10 items-center">
                {navItems.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-800 hover:text-blue-600 transition-colors text-lg font-medium tracking-wide"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div className="relative h-[480px] md:h-[550px] rounded-b-3xl overflow-hidden shadow-lg bg-black">
        <img
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200"
          alt="High-performance rubber tires"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-widest leading-tight">
            PIONEERS IN AUTOMOBILE RUBBER PRODUCTS
          </h1>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-white/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 ring-2 ring-white" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-2xl sm:text-3xl md:text-4xl font-light italic text-gray-800 leading-snug">
            "Neque Porro Quisquam Est Qui Dolorem Ipsum
            <br className="hidden sm:inline" />
            Quia Dolor Sit Amet, Consectetur, Adipisci Velit..."
          </p>
        </div>
        <div className="max-w-3xl mx-auto text-center md:text-left">
          {/* large spinning logo — column on small, row on md+ */}
          <div className="flex flex-col md:flex-row md:items-start md:gap-8 items-center">
            <div className="flex items-center justify-center mb-6 md:mb-0 flex-shrink-0">
              <img
                src="/src/assets/logo1.png"
                alt="Ananta spinning logo"
                className="h-40 w-40 md:h-56 md:w-56 lg:h-72 lg:w-72 object-contain animate-spin"
                style={{ animationDuration: "8s" }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            <div>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                Driving precision in rubber engineering since 2016, Ananta
                Rubber is a Hyderabad-based manufacturer of high-quality butyl
                rubber inner tubes, automotive flaps, curing envelopes, and
                tubeless valves. Committed to the "Make in India" vision, we
                combine innovation and expertise to power the global automotive
                industry.
              </p>
              <div className="flex justify-center md:justify-start">
                <a
                  href="#learnmore"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Products Section Component
const ProductsSection = () => {
  const products = [
    {
      id: 1,
      title: "Butyl Tubes",
      image: "/src/assets/tir1.png",
      description:
        "Our butyl tubes offer high resistance and strength against tension and tearing, with advanced air leaking ensuring premium quality for trucks, passenger, and two-wheel tyres.",
    },
    {
      id: 2,
      title: "Curing Bags",
      image: "/src/assets/tir2.png",
      description:
        "Our Butyl Rubber Curing Bags, used for tyre retreading, are valued for durability and long service life, meeting strict quality standards and client specifications with consistent reliability.",
    },
    {
      id: 3,
      title: "Envelopes",
      image: "/src/assets/tir3.png",
      description:
        "We manufacture premium envelopes for the global retreading industry, using heat resistant polymers and imported butyl rubber to ensure long service life and lower cost per cure.",
    },
    {
      id: 4,
      title: "Flaps",
      image: "/src/assets/tir4.png",
      description:
        "We serve a complete portfolio of Tyre Flaps. Our Tyre Flaps protect the tyre against damage and alterations. These products have wear resistance and are highly sustainable and effective.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Products
        </h2>
        <div className="relative">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl p-[2px] bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-white rounded-2xl overflow-hidden h-full flex flex-col">
                  <div className="aspect-[4/3] bg-gray-50 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://placehold.co/400x300/f9fafb/9ca3af?text=" +
                          product.title.replace(/\s+/g, "+");
                      }}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-3 text-sm flex-wrap">
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
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Tyre Size Guide Section Component
const TyreSizeGuide = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Tire image and specs */}
          <div className="flex flex-col items-center">
            <div className="w-64 h-64 mb-8 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400"
                alt="Tire guide"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="text-sm text-gray-700 space-y-2 mb-8">
              <p>• Tyre Variant : 80CKSOLID</p>
              <p>• Wheel/Rim Type : Single Piece Wheel(DDCL/B/QUICK HEEL/ST)</p>
              <p>• Tyre Size(Front) : 7.00-12</p>
              <p>• Rim Size(Front) : 5.00Sq2</p>
              <p>• Tyre Size(Rear) : 6.50-10</p>
              <p>• Rim Size(Rear) : 5.5Fq0A/5.00Fq0</p>
            </div>

            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-medium hover:shadow-lg transition-all">
              Learn more
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right side - Form */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
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
                <button className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-left flex items-center justify-between hover:border-blue-400 transition-colors">
                  <span className="text-gray-600">Lorem Ipsum</span>
                  <Download className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              {/* Size Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Size
                </label>
                <button className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-left flex items-center justify-between hover:border-blue-400 transition-colors">
                  <span className="text-gray-600">Lorem Ipsum</span>
                  <Download className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Manufacturing Section Component
const ManufacturingSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-800">
            <img
              src="/src/assets/img1.png"
              alt="Ananta Rubber Manufacturing Floor"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement.innerHTML =
                  '<div class="absolute inset-0 flex items-center justify-center text-white text-2xl">Manufacturing Floor</div>';
              }}
            />
          </div>
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

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Ananta Rubber is our go-to supplier for all things rubber. Their products are high quality and durable, and their customer service is top-notch.",
      author: "Bob Fisher",
      company: "Tri-City Manufacturing",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop",
    },
    {
      id: 2,
      quote:
        "Ananta Rubber is our go-to supplier for all things rubber. Their products are high quality and durable, and their customer service is top-notch.",
      author: "Bob Fisher",
      company: "Tri-City Manufacturing",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Testimonials
          </h2>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-white transition-colors bg-white">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-white transition-colors bg-white">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="mb-6">
                <svg
                  className="w-10 h-10 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-800 text-base">
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

// Contact Section Component
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-2">
              60
            </h3>
            <p className="text-gray-600 font-medium">Countries</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-2">
              120
            </h3>
            <p className="text-gray-600 font-medium">Port of Entries</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent mb-2">
              20+
            </h3>
            <p className="text-gray-600 font-medium">Products</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent mb-2">
              50+
            </h3>
            <p className="text-gray-600 font-medium">Clients</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              "Neque Porro Quisquam Est Qui Dolorem Ipsum Quia Dolor Sit Amet,
              Consectetur, Adipisci Velit..."
            </h2>
            <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-2xl mb-8 border-4 border-white">
              <img
                src="/src/assets/img2.png"
                alt="CEO - Ananta Rubber"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.classList.add(
                    "bg-gradient-to-br",
                    "from-blue-500",
                    "to-purple-600",
                    "flex",
                    "items-center",
                    "justify-center"
                  );
                  e.currentTarget.parentElement.innerHTML =
                    '<span class="text-white text-6xl font-bold">CEO</span>';
                }}
              />
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              Driving precision in rubber engineering since 2016, Ananta Rubber
              is a Hyderabad-based manufacturer of high-quality butyl rubber
              inner tubes, automotive flaps, curing envelopes, and tubeless
              valves. Committed to the "Make in India" vision, we combine
              innovation and expertise to power the global automotive industry.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                />
              </div>
              <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold text-lg hover:shadow-xl transition-all">
                Let's Connect
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// News & Footer Component
const NewsAndFooter = () => {
  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              News & Events
            </h2>
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="mb-6">
                  <svg
                    className="w-10 h-10 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  "Ananta Rubber is our go-to supplier for all things rubber.
                  Their products are high quality and durable, and their
                  customer service is top-notch."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop"
                    alt="Bob Fisher"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">
                      Bob Fisher
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Tri-City Manufacturing
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Vehicle Icons Strip */}
          <div className="border-t border-gray-300 pt-12">
            <div className="max-w-5xl mx-auto">
              {" "}
              {/* removed opacity-30 grayscale */}
              <img
                src="/src/assets/img3.png"
                alt="Vehicle types"
                className="w-full h-auto object-contain opacity-100 filter-none"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Ananta Rubber. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Main HomePage Component
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <TyreSizeGuide />
        <ManufacturingSection />
        <TestimonialsSection />
        <ContactSection />
        <NewsAndFooter />
      </main>
    </div>
  );
};

export default HomePage;
