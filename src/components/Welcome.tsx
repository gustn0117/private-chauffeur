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
                {
                  label: "Global Mindset",
                  path: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
                },
                {
                  label: "Warm & Friendly",
                  path: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5",
                },
                {
                  label: "Professional",
                  path: "M20.25 14.15v4.073a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a14.928 14.928 0 0 1-8.596 0l-1.32-.377A2.25 2.25 0 0 1 5.75 18.223V14.15M12 14.25h.008v.008H12v-.008ZM21 10.5v6.75a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 17.25V10.5m18 0V7.5A2.25 2.25 0 0 0 18.75 5.25H5.25A2.25 2.25 0 0 0 3 7.5v3m18 0h-7.5m0 0h-3m3 0V3.75A.75.75 0 0 0 13.5 3h-3a.75.75 0 0 0-.75.75V10.5",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-text">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.path} />
                  </svg>
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
