// Botón/enlace reutilizable. Si recibe `href` se renderiza como <a>, si no como <button>.
const VARIANTS = {
  primary:
    "bg-brasa text-white hover:bg-brasa-dark hover:shadow-[0_12px_28px_-10px_rgba(217,35,35,0.7)]",
  outline:
    "border border-gold/40 text-white hover:border-gold hover:bg-white/5 hover:shadow-[0_12px_28px_-12px_rgba(201,164,92,0.45)]",
  outlineDark:
    "border border-white/15 text-white hover:border-gold/60 hover:bg-white/5 hover:shadow-[0_12px_28px_-12px_rgba(201,164,92,0.35)]",
};

const SIZES = {
  sm: "px-6 py-3 text-xs",
  md: "px-8 py-4 text-xs sm:text-[13px]",
  block: "w-full px-6 py-4 text-xs",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  external = false,
  ...props
}) {
  const classes = `btn-anim inline-flex items-center justify-center gap-3 rounded-full font-semibold uppercase tracking-[0.18em] ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}