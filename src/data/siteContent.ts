export const siteContent = {
  brand: {
    name: "O‘zgidromet",
    subtitle: "Gidrometeorologiya xizmati agentligi",
  },
  nav: [
    { label: "Agentlik", href: "#about" },
    { label: "Xizmatlar", href: "#services" },
    { label: "Rahbariyat", href: "#leadership" },
    { label: "Qabul", href: "#reception" },
    { label: "Bog‘lanish", href: "#contact" },
  ],
  hero: {
    eyebrow: "O‘zbekiston Respublikasi",
    title: "Gidrometeorologiya xizmati agentligi",
    lead:
      "Ob-havo, iqlim, gidrologik va agrometeorologik kuzatishlar. Aholini va iqtisodiyotni ogohlantirishda ishonchli manba.",
    ctas: [
      { label: "Bog‘lanish", href: "#contact", variant: "primary" as const },
      { label: "Xizmatlar", href: "#services", variant: "secondary" as const },
    ],
    infoCard: {
      title: "Rasmiy yo‘nalishlar",
      items: [
        {
          title: "Ob-havo kuzatuvlari",
          description: "Meteorologik monitoring va tezkor ma’lumotlar.",
        },
        {
          title: "Iqlim monitoringi",
          description: "Uzoq muddatli iqlim ma’lumotlari va tahlil.",
        },
        {
          title: "Gidrologik ma’lumotlar",
          description: "Daryo oqimi, suv sathi, sel va toshqin xavfi.",
        },
        {
          title: "Xavfli hodisalar ogohlantirishi",
          description: "Ekstremal ob-havo va tabiiy xavflar bo‘yicha xabarnomalar.",
        },
      ],
    },
  },
  about: {
    eyebrow: "Agentlik haqida",
    title: "O‘zgidromet nima?",
    paragraphs: [
      "O‘zgidromet — O‘zbekiston Respublikasi Gidrometeorologiya xizmati agentligi. Agentlik mamlakatimizda meteorologik, iqlimiy, gidrologik va agrometeorologik kuzatishlarni amalga oshiruvchi davlat tashkilotidir.",
      "Aholini, qishloq xo‘jaligini, suv resurslarini va transport sektorini ob-havo o‘zgarishlari to‘g‘risida o‘z vaqtida ogohlantirish hamda ishonchli iqlim ma’lumotlarini taqdim etish agentlik faoliyatining muhim yo‘nalishlaridan hisoblanadi.",
    ],
    pillars: [
      {
        title: "24/7 kuzatuv",
        description: "Uzluksiz meteorologik monitoring va ma’lumot yig‘ish.",
      },
      {
        title: "Aniq bashorat",
        description: "Zamonaviy usullar asosida ob-havo prognozi.",
      },
      {
        title: "Xavfli hodisalar",
        description: "Sellar, ko‘chkilar va ekstremal ob-havo ogohlantirishlari.",
      },
      {
        title: "Iqlim monitoring",
        description: "Uzoq muddatli iqlim o‘zgarishlarini kuzatish.",
      },
    ],
  },
  services: {
    eyebrow: "Xizmatlar",
    title: "Asosiy yo‘nalishlar",
    lead: "Agentlik yuritadigan kuzatuv va xizmat turlari.",
    items: [
      {
        title: "Meteorologiya",
        description: "Atmosfera holati, ob-havo hodisalari va qisqa muddatli prognozlar.",
      },
      {
        title: "Gidrologiya",
        description: "Daryo oqimi, suv sathi, sel va toshqin xavfini kuzatish.",
      },
      {
        title: "Agrometeorologiya",
        description: "Qishloq xo‘jaligi uchun iqlim sharoitlari va tavsiyalar.",
      },
      {
        title: "Iqlim monitoringi",
        description: "Ko‘p yillik iqlim ma’lumotlari va o‘zgarishlar tahlili.",
      },
      {
        title: "Atrof-muhit monitoringi",
        description: "Havo sifati va ekologik ko‘rsatkichlar bo‘yicha kuzatuvlar.",
      },
      {
        title: "Aviatsiya meteorologiyasi",
        description: "Aeroport va uchish zonalari uchun maxsus ob-havo ma’lumotlari.",
      },
      {
        title: "Raqamli bashorat",
        description: "Hisoblash modellari asosida yuqori aniqlikdagi prognoz.",
      },
      {
        title: "Ogohlantirishlar",
        description: "Ekstremal ob-havo hodisalari bo‘yicha oldindan xabardorlik.",
      },
    ],
  },
  leadership: {
    eyebrow: "Rahbariyat",
    title: "Agentlik rahbariyati",
    lead: "Professional jamoa.",
    people: [
      {
        name: "Xabibullayev Sherzod Xabibullaxo‘jayevich",
        role: "Agentlik direktori",
        phone: "55 503 1222 (100)",
        email: "info@meteo.uz",
        receptionDay: "Payshanba",
        receptionTime: "11:00 – 13:00",
      },
      {
        name: "Karimov Ibratjon Alijonovich",
        role: "Agentlik direktori o‘rinbosari",
        phone: "78 150-86-35",
        email: "i.karimov@meteo.uz",
        receptionDay: "Seshanba",
        receptionTime: "10:00 – 12:00",
      },
      {
        name: "Vakant",
        role: "Raqamli texnologiyalar rivojlantirish bo‘yicha maslahatchi",
        phone: "55-503-21-20 (103)",
        email: "sfi@meteo.uz",
        receptionDay: "Chorshanba",
        receptionTime: "10:00 – 12:00",
      },
      {
        name: "Tashxodjayeva Nigora Baxtiyor qizi",
        role: "Axborot siyosati bo‘yicha maslahatchi — Matbuot kotibi",
        phone: "55-503-21-20 (203)",
        email: "is@meteo.uz",
        receptionDay: "Juma",
        receptionTime: "10:00 – 13:00",
      },
      {
        name: "Kulumbetov Qudratjon Mamasharifovich",
        role: "Ma’naviy-tarbiyaviy ishlar va Davlat tili masalalari bo‘yicha maslahatchi",
        phone: "55 503 1222",
        email: "",
        receptionDay: "Payshanba",
        receptionTime: "14:00 – 16:00",
      },
    ],
  },
  reception: {
    eyebrow: "Fuqarolar qabulxonasi",
    title: "Qabul jadvali",
    lead: "Manzil: Toshkent sh., Yunusobod tumani, Osiyo ko‘chasi, 72A",
  },
  contact: {
    eyebrow: "Bog‘lanish",
    title: "Manzil va aloqa",
    lead: "Ish kunlari dushanba–juma, 09:00–18:00",
    address: "Toshkent sh., Yunusobod tumani, Osiyo ko‘chasi, 72A",
    phone: "+998555031222",
    phoneDisplay: "55 503 1222 (100)",
    email: "info@meteo.uz",
    website: "https://gov.uz/oz/hydromet",
    mapEmbedUrl:
      "https://www.google.com/maps?q=72A%20Osiyo%20Street%2C%20Tashkent%2C%20Uzbekistan%20100052&output=embed",
    mapOpenUrl:
      "https://www.google.com/maps/search/?api=1&query=72A%20Osiyo%20Street%20Tashkent",
    mapDirUrl:
      "https://www.google.com/maps/dir/?api=1&destination=72A%20Osiyo%20Street%20Tashkent",
  },
  news: {
    eyebrow: "Yangiliklar",
    title: "So‘nggi yangiliklar",
    lead: "Yangiliklar bo‘limi statik ko‘rinishda. Keyinroq rasmiy manbalardan yangilanadi.",
    items: [
      {
        title: "Rasmiy yangiliklar",
        date: "",
        description:
          "Bu bo‘limni rasmiy yangiliklar ro‘yxati bilan to‘ldirish mumkin (statik fayl orqali).",
      },
    ],
  },
  footer: {
    copyright: "© 2026 O‘zgidromet. Barcha huquqlar himoyalangan.",
    links: [
      { label: "Rasmiy portal", href: "https://gov.uz/oz/hydromet" },
      { label: "Murojaat", href: "mailto:info@meteo.uz" },
    ],
  },
} as const

export type SiteContent = typeof siteContent
