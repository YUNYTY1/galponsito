// Sucursales. `mapsUrl: null` muestra "Ubicación en mapa: próximamente".
// TODO (pendiente): reemplazar los mapsUrl por el link exacto del pin de Google Maps de cada local
// (ahora son búsquedas por dirección) y agregar el de Los Ángeles.

const mapsSearch = (address) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address + ", Ate, Lima, Perú")}`;

export const BRANCHES = [
  {
    id: "mariategui",
    order: "01",
    badge: "SEDE PRINCIPAL",
    name: "MARIÁTEGUI",
    address: "Av. José C. Mariátegui, Vitarte.",
    phones: [
      { label: "Celular", number: "985 098 714" },
      { label: "Teléfono", number: "01 4941722" },
    ],
    whatsapp: [{ label: "PEDIR POR WHATSAPP", number: "985098714" }],
    mapsUrl: mapsSearch("Av. José C. Mariátegui, Vitarte"),
  },
  {
    id: "manilsa",
    order: "02",
    badge: "SUCURSAL 02",
    name: "MANILSA",
    address: "Av. Manilsa 668, frente al Grifo.",
    phones: [
      { label: "Celular 1", number: "974 491 149" },
      { label: "Celular 2", number: "994 986 642" },
    ],
    whatsapp: [
      { label: "WHATSAPP 974 491 149", number: "974491149" },
      { label: "WHATSAPP 994 986 642", number: "994986642" },
    ],
    mapsUrl: mapsSearch("Av. Manilsa 668"),
  },
  {
    id: "los-angeles",
    order: "03",
    badge: "SUCURSAL 03",
    name: "LOS ÁNGELES",
    address: "Calle Río Zarumilla Mz. E Lt. 25, Ate Vitarte.",
    phones: [
      { label: "Celular", number: "989 987 815" },
      { label: "Teléfono", number: "01 5035248" },
    ],
    whatsapp: [{ label: "PEDIR POR WHATSAPP", number: "989987815" }],
    mapsUrl: null,
  },
];

export const BRANCHES_COPY = {
  label: "SUCURSALES",
  number: "05",
  title: "SIEMPRE CERCA DE TI.",
  text: "Encuentra tu Galponcito más cercano y realiza tu pedido directamente con tu sucursal. Cada una atiende su propio WhatsApp.",
  mapsLabel: "VER UBICACIÓN EN GOOGLE MAPS",
  mapsSoon: "UBICACIÓN EN MAPA: PRÓXIMAMENTE",
};
