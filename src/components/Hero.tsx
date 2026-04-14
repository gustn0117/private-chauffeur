export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-28 lg:pt-24 pb-20">
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
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 20% 80%, rgba(201,169,110,0.18), transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(201,169,110,0.14), transparent 55%)",
        }}
      />

      {/* Side rails */}
      <div className="hidden md:block absolute left-10 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/10 to-transparent" />
      <div className="hidden md:block absolute right-10 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/10 to-transparent" />

      {/* Top marks */}
      <div className="hidden md:flex absolute left-10 top-8 items-center gap-3 text-gold-light/90">
        <span className="block w-8 h-px bg-gold" />
        <span className="text-[10px] tracking-[0.35em] uppercase">Est. Seoul</span>
      </div>
      <div className="hidden md:flex absolute right-10 top-8 items-center gap-3 text-gold-light/90">
        <span className="text-[10px] tracking-[0.35em] uppercase">Premium Sedan</span>
        <span className="block w-8 h-px bg-gold" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <div className="inline-flex items-center gap-2.5 px-5 py-2 mb-8 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-sm animate-fade-in">
          <svg className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-white text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase">
            Officially Designated by the Seoul Metropolitan Government
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

        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up animation-delay-200">
          <span className="block w-12 h-px bg-gold/60" />
          <span className="text-gold-light text-[10px] tracking-[0.4em] uppercase">
            Chauffeur Service by Jun Hong
          </span>
          <span className="block w-12 h-px bg-gold/60" />
        </div>

        <p className="text-white text-lg sm:text-xl font-light tracking-wide mb-4 animate-fade-in-up animation-delay-200">
          Reliable. Professional. Personal.
        </p>

        <div className="inline-flex items-center gap-2 mb-8 animate-fade-in-up animation-delay-200">
          <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-white text-sm font-medium">Trusted by international travelers</span>
        </div>

        <p className="max-w-2xl mx-auto text-white text-lg sm:text-xl leading-relaxed mb-6 animate-fade-in-up animation-delay-400 font-medium">
          More than just a driver — a trusted partner for your journey in Seoul.
        </p>

        <p className="max-w-3xl mx-auto text-white/85 text-sm italic leading-relaxed mb-12 animate-fade-in-up animation-delay-400">
          International Taxi is the only foreign tourist taxi service officially
          managed by the Seoul Metropolitan Government.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
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
      </div>
    </section>
  );
}
