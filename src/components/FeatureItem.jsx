import { Flame, Sparkles, Users } from "lucide-react";

const ICONS = { flame: Flame, sparkles: Sparkles, users: Users };

export default function FeatureItem({ icon, number, title, text }) {
  const Icon = ICONS[icon] ?? Flame;
  return (
    <article>
      <div className="flex items-start justify-between text-wine">
        <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
        <span className="font-mono text-[11px] tracking-[0.2em] text-[#8a7f73]">{number}</span>
      </div>
      <h3 className="display mt-5 text-2xl text-ink">{title}</h3>
      <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-[#5c564f]">{text}</p>
    </article>
  );
}
