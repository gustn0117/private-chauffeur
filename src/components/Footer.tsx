export default function Footer() {
  return (
    <footer className="bg-dark text-white/50 py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-white text-lg font-semibold mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
              Jun Hong
            </div>
            <div className="text-xs tracking-[0.15em] uppercase text-gold/60">
              Private Chauffeur Service in Seoul
            </div>
          </div>
          <div className="text-center sm:text-right text-xs space-y-1">
            <p>Seoul International Taxi</p>
            <p>&copy; {new Date().getFullYear()} Jun Hong. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
