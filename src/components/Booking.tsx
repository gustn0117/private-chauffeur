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
    name: "KakaoTalk",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 3c-5.08 0-9.2 3.39-9.2 7.57 0 2.73 1.81 5.13 4.54 6.48-.2.74-.72 2.68-.82 3.1-.13.5.18.49.39.36.16-.1 2.59-1.76 3.64-2.48.47.07.96.11 1.45.11 5.08 0 9.2-3.39 9.2-7.57S17.08 3 12 3z" />
      </svg>
    ),
    href: "http://qr.kakao.com/talk/yhAS6WEaAqu3uR4eiE8O1gZDlUI-",
    color: "bg-[#FEE500] hover:bg-[#e6cf00] text-[#191919]",
    handle: "Scan · Open Chat",
  },
  {
    name: "LINE",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.271.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
      </svg>
    ),
    href: "https://line.me/ti/p/tMzxzV543W",
    color: "bg-[#06C755] hover:bg-[#04a346]",
    handle: "Add Friend",
  },
  {
    name: "WeChat",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01-.023-.156.49.49 0 01.201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zM14.87 13.13c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982zm4.82 0c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982z" />
      </svg>
    ),
    href: "https://u.wechat.com/kI4KmHVxguW-mK8gjWZVOyw",
    color: "bg-[#07C160] hover:bg-[#06ad56]",
    handle: "Add Contact",
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
            <p className="text-white/90 text-lg mb-10 max-w-md leading-relaxed">
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
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold-light mb-1">
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
                  <div className="text-[10px] tracking-[0.25em] uppercase text-gold-light mb-2">
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
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-8 h-px bg-gold" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold-light">
                  Messaging Channels
                </span>
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
                      <div className="font-bold text-sm">{c.name}</div>
                      <div className="text-xs font-medium opacity-95">{c.handle}</div>
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                      →
                    </span>
                  </a>
                ))}
              </div>

              <p className="mt-6 text-center text-white/70 text-xs tracking-wider">
                Click any channel to connect directly
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
