import Image from "next/image";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Welcome() {
  return (
    <section id="welcome" className="relative py-24 lg:py-32 bg-cream overflow-hidden">
      {/* Decorative number */}
      <div
        className="pointer-events-none absolute -top-10 right-4 lg:right-20 text-[12rem] lg:text-[18rem] font-normal text-gold/6 leading-none select-none"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        01
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Portrait frame */}
          <Reveal>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-gold" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-gold" />

              <div className="relative aspect-4/5 rounded-sm overflow-hidden border border-border">
                <Image
                  src="/jun-hong.jpg"
                  alt="Jun Hong"
                  fill
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-primary/70 via-primary/20 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 text-white">
                  <div className="text-[10px] tracking-[0.35em] uppercase text-gold-light mb-1">
                    Founder
                  </div>
                  <div className="text-2xl font-normal" style={{ fontFamily: "var(--font-playfair)" }}>
                    Jun Hong
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute -bottom-6 -right-2 lg:right-4 bg-white shadow-2xl rounded-sm px-6 py-4 border border-border/60">
                <div className="flex items-center gap-4">
                  <div
                    className="text-4xl font-normal text-gold leading-none"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    CEO
                  </div>
                  <div className="h-10 w-px bg-border" />
                  <div className="text-[10px] text-text-light tracking-[0.25em] uppercase leading-tight">
                    Business
                    <br />
                    Background
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={120}>
            <SectionLabel number="01" label="About Me" />
            <h2
              className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-normal text-primary mb-8 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Welcome to Seoul,
              <br />
              <span className="italic text-gold">Travel Pleasantly</span>
            </h2>
            <div className="space-y-5 text-text-light leading-relaxed">
              <p>
                Hello, I&apos;m{" "}
                <strong className="text-text font-medium">Jun Hong</strong>.
              </p>
              <p>
                With experience in global business including leadership as a CEO,
                I understand both personal comfort and professional expectations.
              </p>
              <p>
                My extensive academic journey has shaped a disciplined and globally
                minded approach to client service.
              </p>
              <p className="text-text font-medium italic border-l-2 border-gold pl-5 py-1">
                Above all, I am a caring and approachable person with a great
                sense of humor.
              </p>
              <p>
                I provide a chauffeur service designed for both travelers and
                business professionals while you are in Korea.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
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
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 text-center p-4 bg-white rounded-sm border border-border/60 hover:border-gold/40 transition-colors"
                >
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.path} />
                  </svg>
                  <span className="text-[11px] tracking-wide text-text font-medium">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
