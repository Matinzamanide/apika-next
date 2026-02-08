import PremiumCategoryClient from "./PremiumCategory.client";

const categories = [
  {
    title: "پمپ آب خانگی",
    enTitle: "Water Pumps",
    href: "/HouseholdPump",
    src: "https://rahabsanat.ir/wp-content/uploads/2025/03/leo_pump-1.webp",
    accent: "bg-blue-500",
  },
  {
    title: "مکانیکال سیل",
    enTitle: "APIKA",
    href: "/product-category/mechanical-seal/",
    src: "https://rahabsanat.ir/wp-content/uploads/2025/03/mechanical_seal-1.webp",
    accent: "bg-purple-500",
  },
  {
    title: "منبع انبساط",
    enTitle: "Expansion Tank",
    href: "/ExpansionSource",
    src: "https://rahabsanat.ir/wp-content/uploads/2025/03/enbesat-1.webp",
    accent: "bg-emerald-500",
  },
  {
    title: "موتور کولر",
    enTitle: "Cooler Motor",
    href: "/Cooler",
    src: "https://rahabsanat.ir/wp-content/uploads/2025/03/cooler_motor-1.webp",
    accent: "bg-orange-500",
  },
  {
    title: "ست کنترل",
    enTitle: "Control Set",
    href: "/SetControl",
    src: "https://rahabsanat.ir/wp-content/uploads/2025/03/control-set.webp",
    accent: "bg-slate-700",
  },
];

export default function PremiumCategory() {
  return (
    <section className="py-24 bg-white overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6">
        {/* Header کاملاً سروری */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="h-1 w-14 bg-slate-900 mb-6" />
            <h2 className="text-4xl md:text-6xl font-light text-slate-900 leading-tight tracking-tight">
              تجلی <span className="font-black text-blue-600">قدرت</span> <br />
              در مهندسی آب و صنعت
            </h2>
          </div>
          <p className="text-slate-400 font-medium max-w-[200px] text-sm leading-6 border-r-2 border-slate-100 pr-4">
            مجموعه‌ای از برترین برندهای جهانی برای پروژه‌های هوشمند شما.
          </p>
        </div>
        <PremiumCategoryClient categories={categories} />
      </div>
    </section>
  );
}
