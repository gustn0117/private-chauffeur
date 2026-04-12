import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 lg:pt-24 pb-16">
      {/* Background layers */}
      <div className="absolute inset-0 bg-linear-to-br from-primary via-[#1a1a3e] to-dark" />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div
        className="absolute inset-0 opacity-50 mix-blend-soft-light"
        style={{
          background:
            "radial-gradient(ellipse at 75% 40%, rgba(201,169,110,0.35), transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(201,169,110,0.15), transparent 55%)",
        }}
      />

      {/* Side rails */}
      <div className="hidden md:block absolute left-10 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/10 to-transparent" />
      <div className="hidden md:block absolute right-10 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/10 to-transparent" />

      {/* Top marks */}
      <div className="hidden md:flex absolute left-10 top-8 items-center gap-3 text-white/50">
        <span className="block w-8 h-px bg-gold/60" />
        <span className="text-[10px] tracking-[0.35em] uppercase">Est. Seoul</span>
      </div>
      <div className="hidden md:flex absolute right-10 top-8 items-center gap-3 text-white/50">
        <span className="text-[10px] tracking-[0.35em] uppercase">Premium Sedan</span>
        <span className="block w-8 h-px bg-gold/60" />
      </div>

      {/* Content grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-[1.15fr_1fr] items-center gap-10 lg:gap-16">
          {/* Text column */}
          <div>
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-gold-light text-xs tracking-[0.25em] uppercase">
                Seoul International Taxi
              </span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-normal text-white leading-[1.05] mb-8 animate-fade-in-up tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Your Travel Partner
              <br />
              <span className="italic text-gold">in Korea</span>
            </h1>

            <div className="flex items-center gap-4 mb-8 animate-fade-in-up animation-delay-200">
              <span className="block w-12 h-px bg-gold/60" />
              <span className="text-gold-light text-[10px] tracking-[0.4em] uppercase">
                Chauffeured by Jun Hong
              </span>
            </div>

            <p className="max-w-xl text-white/70 text-lg leading-relaxed mb-10 animate-fade-in-up animation-delay-200 font-light">
              Whether you are visiting Korea or traveling for work, enjoy a
              smooth, comfortable, and reliable journey with a private chauffeur
              who speaks fluent English.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-14 animate-fade-in-up animation-delay-600">
              <a
                href="#booking"
                className="group relative px-10 py-4 bg-gold text-white font-medium text-xs tracking-[0.25em] uppercase rounded-sm hover:bg-gold-dark transition-all duration-300 hover:shadow-xl hover:shadow-gold/30 overflow-hidden"
              >
                <span className="relative z-10">Book Your Ride</span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-linear-to-r from-gold-dark via-gold to-gold-dark" />
                <span className="relative z-10 ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#welcome"
                className="px-10 py-4 border border-white/20 text-white text-xs tracking-[0.25em] uppercase rounded-sm hover:bg-white/10 hover:border-gold/60 transition-all duration-300"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-xl border-t border-white/10 pt-8 animate-fade-in-up animation-delay-600">
              {[
                { num: "10+", label: "Years in Business" },
                { num: "5.0", label: "Guest Rating" },
                { num: "24/7", label: "Reservation" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="text-3xl sm:text-4xl font-normal text-gold mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {s.num}
                  </div>
                  <div className="text-[10px] text-white/50 tracking-[0.2em] uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Portrait column */}
          <div className="relative animate-fade-in-up animation-delay-400 w-full max-w-md mx-auto lg:max-w-none">
            {/* Gold corners */}
            <div className="absolute -top-3 -left-3 w-14 h-14 border-t-2 border-l-2 border-gold z-10" />
            <div className="absolute -bottom-3 -right-3 w-14 h-14 border-b-2 border-r-2 border-gold z-10" />

            <div className="relative aspect-4/5 rounded-sm overflow-hidden bg-linear-to-b from-white/10 to-white/3 border border-white/15 backdrop-blur-sm">
              {/* Gradient behind photo */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, rgba(201,169,110,0.05) 40%, transparent 70%)",
                }}
              />

              <Image
                src="/jun-hong.jpg"
                alt="Jun Hong, Private Chauffeur"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover object-top"
              />

              {/* Bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-dark/80 via-dark/30 to-transparent" />

              {/* Name card */}
              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
                <div>
                  <div className="text-[10px] tracking-[0.35em] uppercase text-gold-light mb-1">
                    Your Chauffeur
                  </div>
                  <div
                    className="text-2xl text-white font-normal"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Jun Hong
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] tracking-wider uppercase text-white">Available</span>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -left-4 top-10 hidden lg:flex flex-col items-center gap-2 px-4 py-3 bg-white shadow-2xl rounded-sm border border-border/60 rotate-[-4deg]">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-[9px] tracking-[0.25em] uppercase text-text-light">
                5-Star Rated
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.35em] uppercase text-white/40">Scroll</span>
        <div className="w-5 h-9 rounded-full border border-white/25 flex items-start justify-center pt-1.5">
          <div className="w-0.5 h-2.5 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
