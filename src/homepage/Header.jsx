import React from "react";
import logoUrl from "../assets/logo.svg";

const Header = () => {
  const navItems = ["Home", "About Us", "Products", "My Wall", "Contact Us"];

  return (
    <header className="py-6">
      {/* outer gradient border */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-[2px] bg-gradient-to-r from-[var(--accent-blue)] via-purple-400 to-[var(--accent-mag)]">
          <div className="bg-white rounded-2xl px-6 py-4 flex items-center justify-between">
            {/* logo */}
            <div className="flex items-center gap-4">
              <img
                src={logoUrl}
                alt="Ananta logo"
                className="h-12 w-auto object-contain"
              />
              {/* optional small text if svg doesn't include text */}
              {/* <div className="leading-tight">
                <div className="text-lg font-extrabold tracking-wide text-gray-800">ANANTA</div>
                <div className="text-xs text-gray-500 font-medium">RUBBER</div>
              </div> */}
            </div>

            {/* nav */}
            <nav className="hidden md:block">
              <ul className="flex gap-10 items-center">
                {navItems.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-800 hover:text-[var(--accent-blue)] transition-colors text-lg font-medium tracking-wide"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
                aria-label="Open menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
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

export default Header;
