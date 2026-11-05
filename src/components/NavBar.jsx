import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";
import { NAV_LINKS } from "../data/navigation";
import { MAIN_WHATSAPP, buildWhatsAppLink } from "../data/site";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú móvil con Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid ? "border-b border-white/10 bg-charcoal/95 backdrop-blur" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[76px] w-full max-w-page items-center justify-between px-5 sm:px-8 lg:h-[86px] lg:px-12">
        <Logo />

        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[13px] font-semibold uppercase tracking-[0.2em] text-white/75 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href={buildWhatsAppLink(MAIN_WHATSAPP)}
            external
            size="sm"
            className="hidden sm:inline-flex"
          >
            Pedir por WhatsApp
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="menu-movil"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        id="menu-movil"
        className={`lg:hidden ${open ? "block" : "hidden"} border-t border-white/10 bg-charcoal`}
      >
        <nav aria-label="Navegación móvil" className="mx-auto max-w-page px-5 py-6 sm:px-8">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="border-b border-white/10 last:border-0">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/85"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            href={buildWhatsAppLink(MAIN_WHATSAPP)}
            external
            size="block"
            className="mt-6 sm:hidden"
          >
            Pedir por WhatsApp
          </Button>
        </nav>
      </div>
    </header>
  );
}
