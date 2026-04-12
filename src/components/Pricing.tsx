type IconProps = { className?: string };

const PlaneIcon = ({ className }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
  </svg>
);

const CarIcon = ({ className }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
  </svg>
);

const ClipboardIcon = ({ className }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
  </svg>
);

const pricingItems = [
  {
    Icon: PlaneIcon,
    title: "Airport Transfer",
    price: "₩70,000 – ₩95,000",
    note: "Zone Fare (Incheon/Gimpo ↔ Seoul)",
    highlight: true,
  },
  {
    Icon: CarIcon,
    title: "Travel Fare",
    price: "Meter Fare",
    note: "20% surcharge applied",
    highlight: false,
  },
  {
    Icon: ClipboardIcon,
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
              <item.Icon className="w-10 h-10 mb-4 mx-auto text-gold" />
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
