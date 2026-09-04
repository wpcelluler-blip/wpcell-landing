/**
 * CONTENT — konten halaman yang bersifat modular.
 *
 * Semua section (services, portfolio, testimonials, FAQ, dsb.) membaca data
 * dari file ini, sehingga nanti dapat dihubungkan ke backend/CMS tanpa
 * mengubah struktur komponen.
 */

export type IconName =
  | "wrench"
  | "chip"
  | "headset"
  | "bolt"
  | "battery"
  | "refresh"
  | "screen"
  | "signal"
  | "camera"
  | "thermo"
  | "code"
  | "board"
  | "zap"
  | "more"
  | "android"
  | "apple"
  | "search"
  | "doc"
  | "shield"
  | "layers"
  | "check"
  | "message"
  | "map"
  | "clock"
  | "phone";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: IconName;
}

export const services: ServiceItem[] = [
  {
    id: "servis-smartphone",
    title: "Servis Smartphone",
    description:
      "Penanganan berbagai permasalahan smartphone Android dan iOS.",
    icon: "wrench",
  },
  {
    id: "sparepart",
    title: "Sparepart",
    description: "Menyediakan berbagai kebutuhan sparepart smartphone.",
    icon: "chip",
  },
  {
    id: "aksesoris",
    title: "Aksesoris",
    description:
      "Berbagai aksesoris untuk melengkapi kebutuhan smartphone Anda.",
    icon: "headset",
  },
];

export const platforms = [
  {
    id: "android",
    label: "Android",
    icon: "android" as IconName,
    note: "Bootloop, LCD, battery, software & lainnya.",
  },
  {
    id: "ios",
    label: "iOS",
    icon: "apple" as IconName,
    note: "Servis perangkat iPhone beserta sparepart-nya.",
  },
];

export const brands = [
  "APPLE",
  "SAMSUNG",
  "XIAOMI",
  "REDMI",
  "OPPO",
  "VIVO",
  "REALME",
  "ASUS",
] as const;

export const allBrandNote = "+ ALL BRAND";

export interface ProblemItem {
  id: string;
  title: string;
  icon: IconName;
}

export const problems: ProblemItem[] = [
  { id: "mati-total", title: "Mati total", icon: "bolt" },
  { id: "tidak-charging", title: "Tidak bisa charging", icon: "battery" },
  { id: "bootloop", title: "Bootloop", icon: "refresh" },
  { id: "lcd", title: "LCD bermasalah", icon: "screen" },
  { id: "battery", title: "Battery", icon: "battery" },
  { id: "no-signal", title: "No signal", icon: "signal" },
  { id: "kamera", title: "Kamera", icon: "camera" },
  { id: "overheat", title: "Overheat", icon: "thermo" },
  { id: "software", title: "Software", icon: "code" },
  { id: "motherboard", title: "Motherboard", icon: "board" },
  { id: "short", title: "Short / konslet", icon: "zap" },
  { id: "lainnya", title: "Dan masalah lainnya", icon: "more" },
];

export interface WhyItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: IconName;
}

export const whyPoints: WhyItem[] = [
  {
    id: "since-2014",
    number: "01",
    title: "Trusted Since 2014",
    description:
      "Pengalaman lebih dari satu dekade melayani kebutuhan smartphone.",
    icon: "shield",
  },
  {
    id: "android-ios",
    number: "02",
    title: "Android & iOS",
    description:
      "Melayani perangkat Android dan iOS dari berbagai brand.",
    icon: "layers",
  },
  {
    id: "diagnosis",
    number: "03",
    title: "Professional Diagnosis",
    description:
      "Setiap perangkat diperiksa untuk memahami sumber masalah sebelum menentukan tindakan.",
    icon: "search",
  },
  {
    id: "transparan",
    number: "04",
    title: "Transparent Service",
    description:
      "Pelanggan mendapatkan informasi mengenai kondisi perangkat sebelum proses perbaikan.",
    icon: "doc",
  },
  {
    id: "lengkap",
    number: "05",
    title: "Complete Mobile Solution",
    description:
      "Servis, sparepart, dan aksesoris dalam satu tempat.",
    icon: "check",
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Consult", description: "Hubungi WP CELLULER melalui WhatsApp." },
  { number: "02", title: "Diagnosis", description: "Perangkat diperiksa oleh teknisi." },
  {
    number: "03",
    title: "Confirmation",
    description:
      "Informasi mengenai kerusakan dan tindakan servis dikomunikasikan kepada pelanggan.",
  },
  { number: "04", title: "Repair", description: "Perangkat ditangani sesuai kebutuhan." },
  {
    number: "05",
    title: "Testing",
    description: "Perangkat dilakukan testing sebelum diserahkan kepada pelanggan.",
  },
];

export type PortfolioCategory = "ios" | "android" | "hardware" | "software";
export type PortfolioImageName =
  | "iphone13"
  | "galaxya52"
  | "redminote11"
  | "iphone11";

export interface PortfolioItem {
  id: number;
  device: string;
  problem: string;
  solution: string;
  status: string;
  categories: PortfolioCategory[];
  image: PortfolioImageName;
}

export const portfolioFilters: Array<"all" | PortfolioCategory> = [
  "all",
  "ios",
  "android",
  "hardware",
  "software",
];

export const portfolio: PortfolioItem[] = [
  {
    id: 1,
    device: "iPhone 13",
    problem: "Mati Total",
    solution: "Motherboard Repair",
    status: "Completed",
    categories: ["ios", "hardware"],
    image: "iphone13",
  },
  {
    id: 2,
    device: "Samsung Galaxy A52",
    problem: "LCD Bermasalah",
    solution: "Ganti LCD",
    status: "Completed",
    categories: ["android", "hardware"],
    image: "galaxya52",
  },
  {
    id: 3,
    device: "Redmi Note 11",
    problem: "Tidak Bisa Charging",
    solution: "Ganti IC Charging",
    status: "Completed",
    categories: ["android", "hardware"],
    image: "redminote11",
  },
  {
    id: 4,
    device: "iPhone 11",
    problem: "Bootloop",
    solution: "Reflash Software",
    status: "Completed",
    categories: ["ios", "software"],
    image: "iphone11",
  },
];

export interface TestimonialItem {
  id: number;
  rating: number;
  quote: string;
  name: string;
  service: string;
  placeholder: boolean;
}

export const testimonials: TestimonialItem[] = [
  {
    id: 1,
    rating: 5,
    quote:
      "HP iPhone saya mati total dikira sudah tidak bisa diperbaiki. Di WP CELLULER dijelaskan detail kerusakan motherboard-nya sebelum dikerjakan. Hasilnya HP hidup lagi dan data masih aman. Pelayanan sangat profesional dan transparan.",
    name: "Andi Prasetyo",
    service: "iPhone 13 • Mati Total",
    placeholder: false,
  },
  {
    id: 2,
    rating: 5,
    quote:
      "Ganti LCD Samsung A52 di WP CELLULER hasilnya rapi seperti HP baru. Pengerjaan cepat, harga dijelaskan di awal tanpa biaya tambahan. Teknisi juga ramah menjelaskan garansi. Sangat recommended untuk warga Wonogiri!",
    name: "Siti Rahayu",
    service: "Samsung Galaxy A52 • Ganti LCD",
    placeholder: false,
  },
  {
    id: 3,
    rating: 5,
    quote:
      "Konsultasi via WhatsApp direspon cepat, dijelaskan kerusakan dan estimasi biaya sebelum servis. Redmi Note 11 saya yang tidak bisa charging sekarang normal kembali. Proses jujur, tidak memaksa, dan hasilnya memuaskan.",
    name: "Budi Santoso",
    service: "Redmi Note 11 • Service Charging",
    placeholder: false,
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "Apakah WP CELLULER melayani semua brand?",
    answer:
      "Ya, WP CELLULER melayani berbagai brand smartphone Android maupun iOS.",
  },
  {
    question: "Apakah bisa konsultasi melalui WhatsApp?",
    answer:
      "Ya. Pelanggan dapat menghubungi WP CELLULER terlebih dahulu sebelum datang ke toko.",
  },
  {
    question: "Apakah semua kerusakan bisa diperbaiki?",
    answer:
      "Setiap kerusakan memiliki kondisi berbeda dan perlu diperiksa terlebih dahulu.",
  },
  {
    question: "Apakah tersedia sparepart?",
    answer: "Ya, WP CELLULER menyediakan sparepart smartphone.",
  },
  {
    question: "Apakah tersedia aksesoris?",
    answer:
      "Ya, WP CELLULER juga menyediakan berbagai aksesoris smartphone.",
  },
  {
    question: "Berapa harga servis?",
    answer:
      "Harga tidak ditampilkan di website. Pelanggan diarahkan untuk melakukan konsultasi melalui WhatsApp.",
  },
  {
    question: "Kapan WP CELLULER buka?",
    answer: "Setiap hari pukul 09.00–21.00.",
  },
];