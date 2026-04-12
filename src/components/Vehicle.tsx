export default function Vehicle() {
  return (
    <section id="vehicle" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-gold/10 text-gold-dark text-xs tracking-[0.2em] uppercase mb-6 rounded-sm">
            Vehicle
          </div>
          <h2
            className="text-3xl sm:text-4xl font-semibold text-primary mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Hyundai Grandeur
          </h2>
          <p className="text-text-light text-lg">
            Comfort for Every Journey
          </p>
        </div>

        {/* Vehicle Image Placeholder */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="aspect-[16/9] bg-gradient-to-br from-primary/5 to-gold/5 rounded-sm overflow-hidden flex items-center justify-center border border-border">
            <div className="text-center">
              <svg className="w-24 h-24 mx-auto text-gold/40 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 17h8M8 17v-4m8 4v-4m-8 0h8m-8 0L6 9h12l-2 4M6 9l-2 4h2m12-4l2 4h-2" />
              </svg>
              <p className="text-text-light text-sm">Vehicle Photo</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              ),
              title: "Quiet Environment",
              desc: "Perfect for rest or business calls",
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              ),
              title: "Spacious Seating",
              desc: "Comfortable for every passenger",
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: "Smooth & Stable",
              desc: "Ideal for all types of travel",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="text-center p-8 bg-cream rounded-sm border border-border hover:border-gold/30 transition-colors group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-5 group-hover:bg-gold/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                {feature.title}
              </h3>
              <p className="text-text-light text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
