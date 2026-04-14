type Props = {
  number: string;
  label: string;
  variant?: "light" | "dark";
};

export default function SectionLabel({ number, label, variant = "light" }: Props) {
  const numColor = variant === "dark" ? "text-gold-light/80" : "text-gold-dark";
  const lineColor = variant === "dark" ? "bg-gold/60" : "bg-gold/60";
  const labelColor = variant === "dark" ? "text-gold-light" : "text-gold-dark";
  return (
    <div className="inline-flex items-center gap-4">
      <span
        className={`text-sm font-light tracking-widest ${numColor}`}
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {number}
      </span>
      <span className={`block h-px w-10 ${lineColor}`} />
      <span className={`text-[11px] tracking-[0.3em] uppercase ${labelColor}`}>{label}</span>
    </div>
  );
}
