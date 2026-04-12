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
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
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
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a14.928 14.928 0 0 1-8.596 0l-1.32-.377A2.25 2.25 0 0 1 5.75 18.223V14.15M12 14.25h.008v.008H12v-.008ZM21 10.5v6.75a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 17.25V10.5m18 0V7.5A2.25 2.25 0 0 0 18.75 5.25H5.25A2.25 2.25 0 0 0 3 7.5v3m18 0h-7.5m0 0h-3m3 0V3.75A.75.75 0 0 0 13.5 3h-3a.75.75 0 0 0-.75.75V10.5" />
                </svg>
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
