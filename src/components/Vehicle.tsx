import Image from "next/image";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const specs = [
  { label: "Model", value: "Hyundai Grandeur 2026" },
  { label: "Class", value: "Premium Sedan" },
  { label: "Seats", value: "Up to 3 Passengers" },
  { label: "Interior", value: "Leather, Climate" },
  { label: "Luggage", value: "Up to 3 Large Luggage" },
  { label: "Amenities", value: "Water · Charger · Tissues" },
];

export default function Vehicle() {
  return (
    <section id="vehicle" className="relative py-20 sm:py-24 lg:py-32 bg-white overflow-hidden">
      <div
        className="pointer-events-none absolute -top-8 left-2 sm:left-4 lg:left-20 text-[10rem] sm:text-[12rem] lg:text-[18rem] font-normal text-primary/5 leading-none select-none"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        02
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex justify-center">
              <SectionLabel number="02" label="Vehicle" />
            </div>
            <h2
              className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-normal text-primary mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Hyundai <span className="italic text-gold">Grandeur</span>
            </h2>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="block w-6 h-px bg-gold/60" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-gold-dark font-semibold">
                2026 Model
              </span>
              <span className="block w-6 h-px bg-gold/60" />
            </div>
            <p className="text-text-light text-base sm:text-lg">Comfort for every journey</p>
          </div>
        </Reveal>

        {/* Gallery */}
        <Reveal delay={80}>
          <div className="grid sm:grid-cols-5 gap-3 sm:gap-4 mb-10 sm:mb-14 max-w-5xl mx-auto">
            {/* Exterior — wide */}
            <div className="relative sm:col-span-3 aspect-5/3 sm:aspect-auto sm:h-80 rounded-sm overflow-hidden border border-border bg-linear-to-br from-cream via-white to-cream">
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 85%, rgba(201,169,110,0.18), transparent 65%)",
                }}
              />
              <Image
                src="/grandeur-exterior.png"
                alt="Hyundai Grandeur 2026 Exterior"
                fill
                sizes="(max-width: 640px) 100vw, 60vw"
                className="object-contain p-4 sm:p-8"
              />
              <div className="absolute top-3 left-3 flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-gold-dark font-semibold">
                <span className="block w-6 h-px bg-gold" />
                Exterior
              </div>
            </div>

            {/* Interior — tall */}
            <div className="relative sm:col-span-2 aspect-5/3 sm:aspect-auto sm:h-80 rounded-sm overflow-hidden border border-border">
              <Image
                src="/grandeur-interior.jpg"
                alt="Hyundai Grandeur 2026 Interior"
                fill
                sizes="(max-width: 640px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/60 to-transparent" />
              <div className="absolute top-3 left-3 flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-white font-semibold">
                <span className="block w-6 h-px bg-gold-light" />
                Interior
              </div>
            </div>
          </div>
        </Reveal>

        {/* Specs */}
        <Reveal delay={150}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-0 max-w-4xl mx-auto border-t border-border">
            {specs.map((s) => (
              <div
                key={s.label}
                className="flex items-baseline justify-between py-4 sm:py-5 border-b border-border gap-3"
              >
                <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-text font-semibold shrink-0">
                  {s.label}
                </span>
                <span className="text-sm font-semibold text-primary text-right">{s.value}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Features */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
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
              <div className="group relative p-6 sm:p-8 bg-cream rounded-sm border border-border hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="absolute top-0 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-500" />
                <svg className="w-7 h-7 text-gold mb-4 sm:mb-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
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
