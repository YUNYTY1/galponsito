# Galponcito a la Leña — Landing page

Landing de una página para la pollería **Galponcito a la Leña** (Ate Vitarte, Lima).
Stack: Vite + React + Tailwind CSS 3 + lucide-react. Fuentes locales con `@fontsource` (sin links externos).

## Cómo correrlo

```bash
npm install
npm run dev      # desarrollo
npm run build    # build de producción (carpeta dist/)
npm run preview  # previsualizar el build
```

## Estructura

```
src/
├─ data/          Todos los textos, teléfonos, links y listas
│  ├─ site.js        Nombre, WhatsApp principal, redes, horario, helper de links wa.me
│  ├─ navigation.js  Links del menú y del footer
│  ├─ branches.js    Las 3 sucursales
│  ├─ portions.js    Porciones (1/4, 1/2, entero)
│  └─ content.js     Textos de Hero, Nosotros, Especialidad, Delivery, Horarios, Contacto, Footer
├─ components/    Piezas reutilizables (Logo, NavBar, Button, BranchCard, PortionCard, ...)
├─ sections/      Una sección por archivo (Hero, Nosotros, Especialidad, Porciones, Delivery,
│                 Sucursales, Horarios, Contacto, Footer)
├─ assets/        Imágenes locales (placeholders con el nombre final)
└─ App.jsx        Solo importa y ordena las secciones
```

## Imágenes (reemplazar con fotos reales, mismo nombre)

| Archivo | Dónde se usa | Proporción aprox. |
|---|---|---|
| `src/assets/logo.png` | Header, hero, delivery, footer | cuadrado (círculo) |
| `src/assets/hero.jpg` | Hero (arco) | 1 : 1 |
| `src/assets/nosotros-1.jpg` | Nosotros (grande) | 4 : 4.6 |
| `src/assets/nosotros-2.jpg` | Nosotros (pequeña) | 1 : 1 |
| `src/assets/especialidad-1.jpg` | Especialidad (grande) | 4 : 5 |
| `src/assets/especialidad-2.jpg` | Especialidad (pequeña) | 1 : 1 |
| `src/assets/delivery.jpg` | Delivery (arco) | 4 : 5.4 |
| `public/og-image.jpg` | Vista previa al compartir el link | 1200 × 630 |
| `public/favicon.svg` | Favicon | — |

## Pendientes antes de publicar

- [ ] Reemplazar logo y fotos por las reales (tabla de arriba).
- [ ] Confirmar el **WhatsApp principal** (`MAIN_WHATSAPP` en `src/data/site.js`): hoy es el de Mariátegui y lo usan el botón del header, el botón flotante y los botones generales.
- [ ] Confirmar el **WhatsApp de la sección Contacto** (`CONTACT_WHATSAPP`): hoy es el mismo de Mariátegui.
- [ ] Poner los links reales de **Facebook e Instagram** (`SOCIALS` en `src/data/site.js`).
- [ ] Links de **Google Maps**: Mariátegui y Manilsa usan una búsqueda por dirección; reemplazar por el pin exacto. Los Ángeles queda como "próximamente" (`mapsUrl: null` en `src/data/branches.js`).
- [ ] **Texto vertical de Especialidad**: en la captura aparece cortado ("VI…"). Escribirlo en `ESPECIALIDAD.verticalLabel` (`src/data/content.js`); mientras esté vacío no se muestra.
- [ ] **Sección Contacto**: la captura no incluía su contenido; el texto y el diseño son una propuesta (editar en `CONTACTO`).
- [ ] **Precios** de las porciones (hoy "Precio a consultar") y **carta/menú oficial** ("próximamente").
- [ ] Confirmar "Delivery gratis en Ate Vitarte y alrededores" (texto tomado de la captura).
- [ ] Open Graph: con dominio real, usar URL absoluta en `og:image` y agregar `og:url` (`index.html`).
- [ ] Revisar textos: horarios, direcciones y teléfonos de las 3 sucursales.

## Dónde conectar cosas reales

Todos los botones de pedido abren WhatsApp con un mensaje prellenado mediante `buildWhatsAppLink()` (`src/data/site.js`).
Los puntos donde se puede cambiar el destino (bot, carrito, formulario, etc.) están marcados con comentarios `TODO (conexión real)`:
`WhatsAppFloat.jsx`, `PortionCard.jsx`, `BranchCard.jsx` y `Contacto.jsx`.
