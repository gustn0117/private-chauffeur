import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

type IconProps = { className?: string };

const PlaneIcon = ({ className }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
  </svg>
);

const MapIcon = ({ className }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="m15 10.5 3.75-1.875v9.75L15 20.25m-6-9.75 6 3m-6-3L5.25 12.375v9.75L9 20.25m6-9.75v9.75M9 10.5 5.25 8.625M15 10.5 18.75 8.625M9 20.25l6-2.25M5.25 8.625 9 6.75l6 3 3.75-1.875" />
  </svg>
);

const BriefcaseIcon = ({ className }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a14.928 14.928 0 0 1-8.596 0l-1.32-.377A2.25 2.25 0 0 1 5.75 18.223V14.15M12 14.25h.008v.008H12v-.008ZM21 10.5v6.75a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 17.25V10.5m18 0V7.5A2.25 2.25 0 0 0 18.75 5.25H5.25A2.25 2.25 0 0 0 3 7.5v3m18 0h-7.5m0 0h-3m3 0V3.75A.75.75 0 0 0 13.5 3h-3a.75.75 0 0 0-.75.75V10.5" />
  </svg>
);

const HospitalIcon = ({ className }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
  </svg>
);

const services = [
  {
    num: "01",
    Icon: PlaneIcon,
    title: "Airport Transfer",
    desc: "Fixed-rate fares applied between Incheon/Gimpo Airport and Seoul. Travel with peace of mind without worrying about overcharging.",
  },
  {
    num: "02",
    Icon: MapIcon,
    title: "Seoul Metropolitan Tour",
    desc: "Explore major attractions in Seoul and the metropolitan area where Korean tradition and modernity blend.",
  },
  {
    num: "03",
    Icon: BriefcaseIcon,
    title: "Business Travel",
    desc: "Premium sedan services optimized for business purposes including VIP protocol, corporate events, and long-distance business trips.",
  },
  {
    num: "04",
    Icon: HospitalIcon,
    title: "Medical Tourism",
    desc: "From airport arrival to hospital transfer and hotel accommodation, we provide safe and attentive transportation for medical visitors.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-cream overflow-hidden">
      <div
        className="pointer-events-none absolute -top-10 right-4 lg:right-20 text-[12rem] lg:text-[18rem] font-normal text-gold/6 leading-none select-none"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        03
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="text-center mb-16">
            <div className="flex justify-center">
              <SectionLabel number="03" label="Services" />
            </div>
            <h2
              className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-normal text-primary mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              What <span className="italic text-gold">I Offer</span>
            </h2>
            <p className="text-text-light text-lg max-w-xl mx-auto">
              Tailored transportation solutions for every need
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-sm overflow-hidden">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <div className="group relative h-full bg-white p-10 transition-all duration-500 hover:bg-linear-to-br hover:from-white hover:to-gold/5">
                <span className="absolute top-0 left-0 h-0.5 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-gold group-hover:text-white transition-all duration-500">
                    <service.Icon className="w-7 h-7" />
                  </div>
                  <span
                    className="text-3xl font-normal text-gold/30 group-hover:text-gold transition-colors"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {service.num}
                  </span>
                </div>
                <h3
                  className="text-2xl font-normal text-primary mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {service.title}
                </h3>
                <p className="text-text-light leading-relaxed text-sm">
                  {service.desc}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span>Inquire</span>
                  <span className="block w-6 h-px bg-gold" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
