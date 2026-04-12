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
    Icon: PlaneIcon,
    title: "Airport Transfer",
    desc: "Fixed-rate fares applied between Incheon/Gimpo Airport and Seoul. Travel with peace of mind without worrying about overcharging.",
    color: "from-blue-50 to-blue-100/50",
    borderColor: "hover:border-blue-200",
    iconColor: "text-blue-600",
  },
  {
    Icon: MapIcon,
    title: "Seoul Metropolitan Area Tour",
    desc: "Explore major attractions in Seoul and the metropolitan area where Korean tradition and modernity blend.",
    color: "from-green-50 to-green-100/50",
    borderColor: "hover:border-green-200",
    iconColor: "text-green-600",
  },
  {
    Icon: BriefcaseIcon,
    title: "Business Travel",
    desc: "Premium sedan services optimized for business purposes including VIP protocol, corporate events, and long-distance business trips.",
    color: "from-purple-50 to-purple-100/50",
    borderColor: "hover:border-purple-200",
    iconColor: "text-purple-600",
  },
  {
    Icon: HospitalIcon,
    title: "Medical Tourism",
    desc: "From airport arrival to hospital transfer and hotel accommodation, we provide safe and attentive transportation services for medical visitors.",
    color: "from-rose-50 to-rose-100/50",
    borderColor: "hover:border-rose-200",
    iconColor: "text-rose-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-gold/10 text-gold-dark text-xs tracking-[0.2em] uppercase mb-6 rounded-sm">
            Services
          </div>
          <h2
            className="text-3xl sm:text-4xl font-semibold text-primary mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What I Offer
          </h2>
          <p className="text-text-light text-lg max-w-xl mx-auto">
            Tailored transportation solutions for every need
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group p-8 bg-gradient-to-br ${service.color} rounded-sm border border-border ${service.borderColor} transition-all duration-300 hover:shadow-lg`}
            >
              <service.Icon className={`w-10 h-10 mb-5 ${service.iconColor}`} />
              <h3
                className="text-xl font-semibold text-primary mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {service.title}
              </h3>
              <p className="text-text-light leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
