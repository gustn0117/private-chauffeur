const services = [
  {
    icon: "✈",
    title: "Airport Transfer",
    desc: "Fixed-rate fares applied between Incheon/Gimpo Airport and Seoul. Travel with peace of mind without worrying about overcharging.",
    color: "from-blue-50 to-blue-100/50",
    borderColor: "hover:border-blue-200",
  },
  {
    icon: "🗺",
    title: "Seoul Metropolitan Area Tour",
    desc: "Explore major attractions in Seoul and the metropolitan area where Korean tradition and modernity blend.",
    color: "from-green-50 to-green-100/50",
    borderColor: "hover:border-green-200",
  },
  {
    icon: "💼",
    title: "Business Travel",
    desc: "Premium sedan services optimized for business purposes including VIP protocol, corporate events, and long-distance business trips.",
    color: "from-purple-50 to-purple-100/50",
    borderColor: "hover:border-purple-200",
  },
  {
    icon: "🏥",
    title: "Medical Tourism",
    desc: "From airport arrival to hospital transfer and hotel accommodation, we provide safe and attentive transportation services for medical visitors.",
    color: "from-rose-50 to-rose-100/50",
    borderColor: "hover:border-rose-200",
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
              <span className="text-4xl mb-5 block">{service.icon}</span>
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
