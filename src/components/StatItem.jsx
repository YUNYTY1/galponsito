export default function StatItem({ value, label }) {
  return (
    <div className="border-l border-[#d9d2c7] px-5 py-6 first:border-l-0 first:pl-0 sm:px-6 sm:first:pl-0 lg:first:pl-5">
      <p className="font-display text-4xl leading-none text-wine sm:text-5xl">{value}</p>
      <p className="mt-3 text-sm leading-snug text-[#5c564f]">{label}</p>
    </div>
  );
}
