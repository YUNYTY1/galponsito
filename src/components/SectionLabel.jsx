// Etiqueta de sección: "NOSOTROS · 01 ————"
export default function SectionLabel({ label, number, tone = "dark", icon = null }) {
  const text = tone === "light" ? "text-gold" : "text-[#6b5a4a]";
  const line = tone === "light" ? "bg-gold/50" : "bg-[#6b5a4a]/40";

  return (
    <p className={`flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] ${text}`}>
      {icon}
      <span>
        {label} · {number}
      </span>
      <span aria-hidden="true" className={`h-px w-16 sm:w-24 ${line}`} />
    </p>
  );
}
