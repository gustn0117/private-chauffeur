import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const specs = [
  { label: "Model", value: "Hyundai Grandeur" },
  { label: "Class", value: "Premium Sedan" },
  { label: "Seats", value: "Up to 3 Passengers" },
  { label: "Interior", value: "Leather, Climate" },
  { label: "Luggage", value: "2 Large / 2 Carry-on" },
  { label: "Amenities", value: "Wi-Fi · Water · Charger" },
];

function SedanSVG() {
  return (
    <svg viewBox="0 0 600 220" className="w-full h-full" fill="none">
      <defs>
        <linearGradient id="body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2a4a" />
          <stop offset="60%" stopColor="#14142a" />
          <stop offset="100%" stopColor="#0b0b18" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#aeb6cc" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#3a425e" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c9a96e" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#c9a96e" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Ground shadow */}
      <ellipse cx="300" cy="195" rx="230" ry="10" fill="#000" opacity="0.15" />
      {/* Body */}
      <path
        d="M60 170 Q70 130 130 120 L200 95 Q260 75 340 75 Q420 75 480 105 L540 120 Q565 125 570 150 L570 170 Z"
        fill="url(#body)"
      />
      {/* Roof highlight */}
      <path
        d="M200 95 Q260 75 340 75 Q420 75 480 105"
        stroke="#c9a96e"
        strokeWidth="0.6"
        strokeOpacity="0.6"
      />
      {/* Windows */}
      <path
        d="M215 100 Q265 82 335 82 L335 118 L215 118 Z"
        fill="url(#glass)"
        opacity="0.85"
      />
      <path
        d="M345 82 Q410 82 465 107 L465 118 L345 118 Z"
        fill="url(#glass)"
        opacity="0.85"
      />
      {/* Window divider */}
      <line x1="340" y1="82" x2="340" y2="118" stroke="#0b0b18" strokeWidth="2" />
      {/* Door line */}
      <line x1="300" y1="118" x2="300" y2="170" stroke="#000" strokeOpacity="0.35" strokeWidth="1" />
      <line x1="405" y1="118" x2="405" y2="170" stroke="#000" strokeOpacity="0.35" strokeWidth="1" />
      {/* Door handles */}
      <rect x="258" y="140" width="16" height="2.5" fill="#c9a96e" opacity="0.85" />
      <rect x="420" y="140" width="16" height="2.5" fill="#c9a96e" opacity="0.85" />
      {/* Bottom highlight */}
      <path d="M70 170 L570 170" stroke="#c9a96e" strokeOpacity="0.25" strokeWidth="1" />
      {/* Headlight */}
      <path d="M545 135 L567 143 L567 153 L545 150 Z" fill="#f4e4bb" opacity="0.9" />
      <circle cx="552" cy="146" r="3" fill="#fff8dd" />
      {/* Taillight */}
      <path d="M65 150 L75 147 L75 162 L65 162 Z" fill="#b03a3a" opacity="0.8" />
      {/* Wheels */}
      <g>
        <circle cx="160" cy="175" r="28" fill="#0a0a14" />
        <circle cx="160" cy="175" r="20" fill="#1a1a2a" />
        <circle cx="160" cy="175" r="12" fill="#2a2a3c" stroke="#c9a96e" strokeOpacity="0.4" strokeWidth="1" />
        <circle cx="160" cy="175" r="3" fill="#c9a96e" opacity="0.6" />
      </g>
      <g>
        <circle cx="450" cy="175" r="28" fill="#0a0a14" />
        <circle cx="450" cy="175" r="20" fill="#1a1a2a" />
        <circle cx="450" cy="175" r="12" fill="#2a2a3c" stroke="#c9a96e" strokeOpacity="0.4" strokeWidth="1" />
        <circle cx="450" cy="175" r="3" fill="#c9a96e" opacity="0.6" />
      </g>
      {/* Gold reflection highlight along body */}
      <path
        d="M130 130 Q260 105 460 115"
        stroke="#c9a96e"
        strokeOpacity="0.35"
        strokeWidth="0.8"
        fill="none"
      />
      {/* Ground reflection */}
      <rect x="50" y="200" width="500" height="10" fill="url(#ground)" />
    </svg>
  );
}

export default function Vehicle() {
  return (
    <section id="vehicle" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div
        className="pointer-events-none absolute -top-10 left-4 lg:left-20 text-[12rem] lg:text-[18rem] font-normal text-primary/5 leading-none select-none"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        02
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="text-center mb-16">
            <div className="flex justify-center">
              <SectionLabel number="02" label="Vehicle" />
            </div>
            <h2
              className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-normal text-primary mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Hyundai <span className="italic text-gold">Grandeur</span>
            </h2>
            <p className="text-text-light text-lg">Comfort for every journey</p>
          </div>
        </Reveal>

        {/* Vehicle illustration */}
        <Reveal delay={100}>
          <div className="relative max-w-4xl mx-auto mb-20">
            <div className="relative aspect-video bg-linear-to-br from-cream via-white to-cream rounded-sm overflow-hidden border border-border p-6 lg:p-10">
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 50% 80%, rgba(201,169,110,0.15), transparent 60%)",
                }}
              />
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #1a1a2e 1px, transparent 1px), linear-gradient(to bottom, #1a1a2e 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="relative h-full flex items-end">
                <SedanSVG />
              </div>
              <div className="absolute top-6 right-6 flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-gold-dark">
                <span className="block w-8 h-px bg-gold/60" />
                Flagship
              </div>
            </div>
          </div>
        </Reveal>

        {/* Specs */}
        <Reveal delay={200}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-0 max-w-4xl mx-auto border-t border-border">
            {specs.map((s) => (
              <div
                key={s.label}
                className="flex items-baseline justify-between py-5 border-b border-border"
              >
                <span className="text-[11px] tracking-[0.25em] uppercase text-text-light">
                  {s.label}
                </span>
                <span className="text-sm font-medium text-primary">{s.value}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Features */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              path: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
              title: "Quiet Cabin",
              desc: "Perfect for rest or calls",
            },
            {
              path: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4",
              title: "Spacious",
              desc: "Room for every passenger",
            },
            {
              path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              title: "Safe & Stable",
              desc: "Ideal for all journeys",
            },
          ].map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="group relative p-8 bg-cream rounded-sm border border-border hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="absolute top-0 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-500" />
                <svg className="w-7 h-7 text-gold mb-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={f.path} />
                </svg>
                <h3
                  className="text-lg font-medium text-primary mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {f.title}
                </h3>
                <p className="text-text-light text-sm">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
