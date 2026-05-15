"use client";

function scrollToId(id: string) {
  const HEADER_OFFSET = 64;
  const el = document.getElementById(id);
  if (!el) return;
  const targetY = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  // Use scrollTo on the body/html so anchor offset is computed against current
  // layout — avoids scrollIntoView miscalculating before images/fonts settle.
  window.scrollTo({ top: targetY, behavior: "smooth" });
  history.replaceState(null, "", `#${id}`);

  // If the target moves after async layout (font swap, image load), correct
  // again on the next frame.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const corrected =
        document.getElementById(id)!.getBoundingClientRect().top +
        window.scrollY -
        HEADER_OFFSET;
      if (Math.abs(corrected - targetY) > 4) {
        window.scrollTo({ top: corrected, behavior: "smooth" });
      }
    });
  });
}

export default function HeroCTA() {
  const handle = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
      <a
        href="#booking"
        onClick={handle("booking")}
        className="inline-flex items-center justify-center px-10 py-4 bg-gold text-white font-medium text-xs tracking-[0.25em] uppercase rounded-sm hover:bg-gold-dark active:bg-gold-dark transition-colors duration-300 shadow-lg shadow-gold/30 hover:shadow-xl hover:shadow-gold/40"
      >
        <span>Book Your Ride</span>
        <span className="ml-2">→</span>
      </a>
      <a
        href="#welcome"
        onClick={handle("welcome")}
        className="px-10 py-4 border border-white/20 text-white text-xs tracking-[0.25em] uppercase rounded-sm hover:bg-white/10 hover:border-gold/60 transition-all duration-300"
      >
        Learn More
      </a>
    </div>
  );
}
