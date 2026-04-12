export default function Welcome() {
  return (
    <section id="welcome" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-gold/10 rounded-sm overflow-hidden flex items-center justify-center border border-border">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center border-2 border-gold/30">
                  <svg className="w-16 h-16 text-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="text-text-light text-sm">Profile Photo</p>
              </div>
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-4 -right-4 bg-white shadow-xl rounded-sm p-5 border border-border">
              <div className="text-3xl font-bold text-gold" style={{ fontFamily: "var(--font-playfair)" }}>
                CEO
              </div>
              <div className="text-xs text-text-light tracking-wider uppercase mt-1">
                Business Background
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="inline-block px-4 py-1.5 bg-gold/10 text-gold-dark text-xs tracking-[0.2em] uppercase mb-6 rounded-sm">
              About Me
            </div>
            <h2
              className="text-3xl sm:text-4xl font-semibold text-primary mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Welcome to Seoul
              <br />
              <span className="text-gold">Travel Pleasantly, Move Comfortably</span>
            </h2>
            <div className="space-y-4 text-text-light leading-relaxed">
              <p>
                Hello, I&apos;m <strong className="text-text font-medium">Jun Hong</strong>.
              </p>
              <p>
                With experience in global business including leadership as a CEO,
                I understand both personal comfort and professional expectations.
              </p>
              <p>
                My extensive academic journey has shaped a disciplined and globally
                minded approach to client service.
              </p>
              <p className="text-text font-medium italic border-l-2 border-gold pl-4">
                Above all, I am a caring and approachable person with a great sense of humor!
              </p>
              <p>
                I provide a chauffeur service designed for both travelers and business
                professionals while you are in Korea.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              {[
                { icon: "🌏", label: "Global Mindset" },
                { icon: "🤝", label: "Warm & Friendly" },
                { icon: "💼", label: "Professional" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-text">
                  <span className="text-xl">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
