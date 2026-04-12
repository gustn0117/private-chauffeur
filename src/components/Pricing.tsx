const pricingItems = [
  {
    icon: "✈",
    title: "Airport Transfer",
    price: "₩70,000 – ₩95,000",
    note: "Zone Fare (Incheon/Gimpo ↔ Seoul)",
    highlight: true,
  },
  {
    icon: "🚗",
    title: "Travel Fare",
    price: "Meter Fare",
    note: "20% surcharge applied",
    highlight: false,
  },
  {
    icon: "📋",
    title: "Private Charter",
    price: "Custom Quote",
    note: "Arranged upon request",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-gold/10 text-gold-dark text-xs tracking-[0.2em] uppercase mb-6 rounded-sm">
            Pricing
          </div>
          <h2
            className="text-3xl sm:text-4xl font-semibold text-primary mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Transparent & Reliable Pricing
          </h2>
          <p className="text-text-light text-lg max-w-xl mx-auto">
            International Taxi is officially designated by the Seoul Metropolitan Government
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {pricingItems.map((item) => (
            <div
              key={item.title}
              className={`relative rounded-sm border p-8 text-center transition-all duration-300 hover:shadow-lg ${
                item.highlight
                  ? "border-gold bg-gradient-to-b from-gold/5 to-transparent"
                  : "border-border hover:border-gold/30"
              }`}
            >
              {item.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-white text-xs tracking-wider uppercase rounded-sm">
                  Popular
                </div>
              )}
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3
                className="text-lg font-semibold text-primary mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {item.title}
              </h3>
              <div className="text-2xl font-bold text-gold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                {item.price}
              </div>
              <p className="text-text-light text-sm">{item.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-text-light text-sm">
            For detailed fare information, visit the{" "}
            <a
              href="https://www.intltaxi.co.kr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-dark underline underline-offset-2"
            >
              International Taxi official website
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
