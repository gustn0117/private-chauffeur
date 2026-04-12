export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-gold/10 text-gold-dark text-xs tracking-[0.2em] uppercase mb-6 rounded-sm">
            Experience
          </div>
          <h2
            className="text-3xl sm:text-4xl font-semibold text-primary mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Designed Around Your Needs
          </h2>
          <p className="text-text-light text-lg">
            Every journey is tailored to your purpose
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* For Tourists */}
          <div className="bg-gradient-to-br from-cream to-white rounded-sm border border-border p-10 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <span className="text-2xl">🌏</span>
              </div>
              <h3
                className="text-2xl font-semibold text-primary"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                For Tourists
              </h3>
            </div>
            <p className="text-text-light mb-6">
              Enjoy a stress-free experience in Korea
            </p>
            <ul className="space-y-3">
              {[
                "Easy communication",
                "Local recommendations",
                "Comfortable travel",
                "Personal assistance",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-text">
                  <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* For Business */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/[0.02] rounded-sm border border-border p-10 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <span className="text-2xl">💼</span>
              </div>
              <h3
                className="text-2xl font-semibold text-primary"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                For Business Travelers
              </h3>
            </div>
            <p className="text-text-light mb-6">
              Travel with efficiency and professionalism
            </p>
            <ul className="space-y-3">
              {[
                "On-time and reliable service",
                "Quiet and private environment",
                "Flexible scheduling",
                "Personal assistance",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-text">
                  <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
