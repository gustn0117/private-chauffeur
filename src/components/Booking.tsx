import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const contactChannels = [
  {
    name: "WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    href: "https://wa.me/821096811122",
    color: "bg-[#25D366] hover:bg-[#20bd5a]",
    handle: "+82 10-9681-1122",
  },
  {
    name: "Email",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: "mailto:jun.hong1@gmail.com",
    color: "bg-[#6366f1] hover:bg-[#5558e6]",
    handle: "jun.hong1@gmail.com",
  },
];

const quickInfo = [
  { label: "Response", value: "Within minutes" },
  { label: "Languages", value: "English · Korean" },
  { label: "Availability", value: "Daily · On-demand" },
];

export default function Booking() {
  return (
    <section
      id="booking"
      className="relative py-24 lg:py-32 bg-linear-to-br from-primary via-[#1a1a3e] to-dark text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div
        className="absolute inset-0 opacity-50 mix-blend-soft-light"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(201,169,110,0.25), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(201,169,110,0.15), transparent 55%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <Reveal>
            <SectionLabel number="07" label="Book Now" variant="dark" />
            <h2
              className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Book Your Private
              <br />
              <span className="italic text-gold">Chauffeur</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-md leading-relaxed">
              Reach out through your preferred messaging app — I reply quickly
              and in fluent English.
            </p>

            <a
              href="tel:+821096811122"
              className="inline-flex items-center gap-4 mb-10 px-6 py-4 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 hover:border-gold/40 transition-all duration-300 group"
            >
              <span className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-gold-light" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <div className="text-left">
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-1">
                  Direct Line
                </div>
                <div className="text-lg font-medium text-white group-hover:text-gold-light transition-colors">
                  +82 10-9681-1122
                </div>
              </div>
            </a>

            <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {quickInfo.map((q) => (
                <div key={q.label}>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-white/40 mb-2">
                    {q.label}
                  </div>
                  <div className="text-sm text-white font-medium">{q.value}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right */}
          <Reveal delay={120}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6 text-white/60">
                <span className="block w-8 h-px bg-gold/60" />
                <span className="text-[10px] tracking-[0.3em] uppercase">Messaging Channels</span>
              </div>

              <div className="grid gap-3">
                {contactChannels.map((c) => (
                  <a
                    key={c.name}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 px-5 py-4 rounded-sm text-white transition-all duration-300 hover:translate-x-1 ${c.color}`}
                  >
                    <div className="shrink-0">{c.icon}</div>
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-sm">{c.name}</div>
                      <div className="text-xs opacity-80">{c.handle}</div>
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </a>
                ))}
              </div>

              <p className="mt-6 text-center text-white/40 text-xs tracking-wider">
                Click any channel to connect directly
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
