"use client";

export default function HeroCTA() {
  const goBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById("booking");
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", "#booking");
    }
  };

  const goWelcome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById("welcome");
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", "#welcome");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
      <a
        href="#booking"
        onClick={goBooking}
        className="inline-flex items-center justify-center px-10 py-4 bg-gold text-white font-medium text-xs tracking-[0.25em] uppercase rounded-sm hover:bg-gold-dark active:bg-gold-dark transition-colors duration-300 shadow-lg shadow-gold/30 hover:shadow-xl hover:shadow-gold/40"
      >
        <span>Book Your Ride</span>
        <span className="ml-2">→</span>
      </a>
      <a
        href="#welcome"
        onClick={goWelcome}
        className="px-10 py-4 border border-white/20 text-white text-xs tracking-[0.25em] uppercase rounded-sm hover:bg-white/10 hover:border-gold/60 transition-all duration-300"
      >
        Learn More
      </a>
    </div>
  );
}
