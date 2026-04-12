const navLinks = [
  { href: "#welcome", label: "About" },
  { href: "#vehicle", label: "Vehicle" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#reviews", label: "Reviews" },
  { href: "#pricing", label: "Pricing" },
  { href: "#booking", label: "Booking" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white/60">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div
              className="text-2xl font-normal text-white mb-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Jun Hong
            </div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-5">
              Private Chauffeur · Seoul
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              A premium chauffeur experience for travelers and business
              professionals visiting Korea.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <span className="block w-10 h-px bg-gold/40" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold/70">
                Est. Seoul
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-5">
              Explore
            </div>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-5">
              Contact
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-gold shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+821096811122" className="hover:text-gold transition-colors">
                  +82 10-9681-1122
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-gold shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:jun.hong1@gmail.com" className="hover:text-gold transition-colors">
                  jun.hong1@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-gold shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Seoul, Republic of Korea</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Jun Hong · Private Chauffeur. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Seoul International Taxi</p>
        </div>
      </div>
    </footer>
  );
}
