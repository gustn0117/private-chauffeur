export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#1a1a3e] to-dark" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iLjAzIiBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L3N2Zz4=')] opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-gold-light text-sm tracking-wider uppercase">
            Seoul International Taxi
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-6 animate-fade-in-up"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Your Travel Partner
          <br />
          <span className="text-gold">in Korea</span>
        </h1>

        <p className="max-w-2xl mx-auto text-white/70 text-lg sm:text-xl leading-relaxed mb-10 animate-fade-in-up animation-delay-200">
          Whether you are visiting Korea or traveling for work,
          <br className="hidden sm:block" />
          enjoy a smooth, comfortable, and reliable journey.
        </p>

        {/* Features */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12 animate-fade-in-up animation-delay-400">
          {[
            "Fluent English Communication",
            "Tailored for Travelers & Professionals",
            "Premium Hyundai Grandeur Sedan",
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-white/80 text-sm">
              <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
          <a
            href="#booking"
            className="px-10 py-4 bg-gold text-white font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-gold-dark transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
          >
            Book Your Ride
          </a>
          <a
            href="#welcome"
            className="px-10 py-4 border border-white/20 text-white text-sm tracking-wider uppercase rounded-sm hover:bg-white/10 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
          <div className="w-1 h-3 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
}
