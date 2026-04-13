import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

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
    note: "A fare determined based on your destination in Seoul",
    features: [
      "Fixed rate",
      "No surge pricing",
      "Airport pickup service (additional fee applied)",
    ],
    highlight: true,
  },
  {
    Icon: CarIcon,
    title: "Travel Fare",
    price: "Meter Fare",
    note: "20% surcharge applied",
    features: ["By the meter", "Flexible route", "Per-hour option"],
    highlight: false,
  },
  {
    Icon: ClipboardIcon,
    title: "Private Charter",
    price: "Custom Quote",
    note: "Arranged upon request",
    features: ["Tailored itinerary", "Multi-day", "Corporate rate"],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div
        className="pointer-events-none absolute -top-10 left-4 lg:left-20 text-[12rem] lg:text-[18rem] font-normal text-primary/5 leading-none select-none"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        06
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="text-center mb-16">
            <div className="flex justify-center">
              <SectionLabel number="06" label="Pricing" />
            </div>
            <h2
              className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-normal text-primary mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Transparent <span className="italic text-gold">& Reliable</span>
            </h2>
            <p className="text-text-light text-lg max-w-xl mx-auto">
              International Taxi officially designated by the Seoul Metropolitan Government
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6">
          {pricingItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div
                className={`relative rounded-sm p-8 lg:p-10 h-full transition-all duration-500 ${
                  item.highlight
                    ? "bg-linear-to-b from-primary to-[#1a1a3e] text-white shadow-2xl lg:-translate-y-3"
                    : "bg-white border border-border hover:border-gold/40 hover:shadow-xl"
                }`}
              >
                {item.highlight && (
                  <>
                    <div className="absolute inset-x-0 -top-px h-0.5 bg-linear-to-r from-transparent via-gold to-transparent" />
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-white text-[10px] tracking-[0.3em] uppercase rounded-sm">
                      Popular
                    </div>
                  </>
                )}

                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${
                    item.highlight ? "bg-gold/20 text-gold-light" : "bg-gold/10 text-gold"
                  }`}
                >
                  <item.Icon className="w-6 h-6" />
                </div>

                <h3
                  className={`text-xl font-normal mb-2 ${
                    item.highlight ? "text-white" : "text-primary"
                  }`}
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.title}
                </h3>
                <p className={`text-xs ${item.highlight ? "text-white/60" : "text-text-light"}`}>
                  {item.note}
                </p>

                <div
                  className={`my-6 h-px ${
                    item.highlight ? "bg-white/15" : "bg-border"
                  }`}
                />

                <div
                  className={`text-2xl font-normal mb-6 ${
                    item.highlight ? "text-gold-light" : "text-gold"
                  }`}
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.price}
                </div>

                <ul className="space-y-3">
                  {item.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-center gap-3 text-sm ${
                        item.highlight ? "text-white/80" : "text-text-light"
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 ${item.highlight ? "text-gold-light" : "text-gold"}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-12 text-center">
            <p className="text-text-light text-sm">
              For detailed fare information, visit the{" "}
              <a
                href="https://www.intltaxi.co.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-dark underline underline-offset-4 decoration-gold/40"
              >
                International Taxi official website
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
