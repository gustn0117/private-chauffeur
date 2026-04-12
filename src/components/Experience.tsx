import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const groups = [
  {
    tag: "A",
    title: "For Tourists",
    subtitle: "Enjoy a stress-free experience in Korea",
    icon: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
    items: [
      "Easy communication in English",
      "Insider local recommendations",
      "Comfortable, unhurried travel",
      "Personal assistance throughout",
    ],
    accent: "from-cream to-white",
  },
  {
    tag: "B",
    title: "For Business Travelers",
    subtitle: "Travel with efficiency and professionalism",
    icon: "M20.25 14.15v4.073a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a14.928 14.928 0 0 1-8.596 0l-1.32-.377A2.25 2.25 0 0 1 5.75 18.223V14.15M12 14.25h.008v.008H12v-.008ZM21 10.5v6.75a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 17.25V10.5m18 0V7.5A2.25 2.25 0 0 0 18.75 5.25H5.25A2.25 2.25 0 0 0 3 7.5v3m18 0h-7.5m0 0h-3m3 0V3.75A.75.75 0 0 0 13.5 3h-3a.75.75 0 0 0-.75.75V10.5",
    items: [
      "On-time and reliable service",
      "Quiet and private environment",
      "Flexible scheduling",
      "Discreet personal assistance",
    ],
    accent: "from-primary/5 to-primary/[0.02]",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div
        className="pointer-events-none absolute -top-10 left-4 lg:left-20 text-[12rem] lg:text-[18rem] font-normal text-primary/5 leading-none select-none"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        04
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="text-center mb-16">
            <div className="flex justify-center">
              <SectionLabel number="04" label="Experience" />
            </div>
            <h2
              className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-normal text-primary mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Designed <span className="italic text-gold">Around You</span>
            </h2>
            <p className="text-text-light text-lg">Every journey tailored to your purpose</p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 120}>
              <div
                className={`group relative overflow-hidden bg-linear-to-br ${g.accent} rounded-sm border border-border p-10 lg:p-12 transition-all duration-500 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={g.icon} />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.3em] uppercase text-gold-dark mb-1">
                        Track {g.tag}
                      </div>
                      <h3
                        className="text-2xl font-normal text-primary"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {g.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-text-light mb-8 text-[15px]">{g.subtitle}</p>

                <ul className="space-y-4 border-t border-border pt-6">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-4 text-text"
                    >
                      <span className="shrink-0 w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center">
                        <svg
                          className="w-3.5 h-3.5 text-gold"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-gold/5 group-hover:bg-gold/10 transition-colors duration-500"
                  aria-hidden
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
