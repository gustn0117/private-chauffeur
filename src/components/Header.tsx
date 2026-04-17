"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#welcome", label: "About" },
  { href: "#vehicle", label: "Vehicle" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#reviews", label: "Reviews" },
  { href: "#pricing", label: "Pricing" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-3">
          <div
            className={`text-xl font-semibold tracking-wide transition-colors duration-500 ${
              scrolled ? "text-primary" : "text-white"
            }`}
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Jun Hong
          </div>
          <div
            className={`hidden sm:block text-xs tracking-[0.2em] uppercase transition-colors duration-500 ${
              scrolled ? "text-gold" : "text-gold-light"
            }`}
          >
            Private Chauffeur
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors duration-300 hover:text-gold ${
                scrolled ? "text-text" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="ml-4 px-6 py-2.5 bg-gold text-white text-sm font-medium rounded-sm tracking-wide hover:bg-gold-dark transition-colors duration-300"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              menuOpen
                ? "rotate-45 translate-y-2 bg-primary"
                : scrolled
                ? "bg-primary"
                : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              menuOpen
                ? "opacity-0"
                : scrolled
                ? "bg-primary"
                : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              menuOpen
                ? "-rotate-45 -translate-y-2 bg-primary"
                : scrolled
                ? "bg-primary"
                : "bg-white"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 bg-white ${
          menuOpen ? "max-h-96 border-t border-border" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col py-4 px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-3 text-text text-sm tracking-wide hover:text-gold transition-colors border-b border-border/50"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="mt-4 block w-full py-3 bg-gold text-white text-sm font-medium text-center rounded-sm tracking-wide hover:bg-gold-dark transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}
