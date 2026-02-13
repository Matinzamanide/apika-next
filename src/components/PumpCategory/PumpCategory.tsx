import Image from 'next/image';
import Link from 'next/link';
import {
  Box,
  Settings,
  Droplets,
  Wrench,
  ZapIcon,
  Fan,
} from 'lucide-react';

const iconMapping = {
  'ست کنترل': Settings,
  'تابلو برق': Box,
  'منبع انبساط': Droplets,
  'پمپ آب خانگی': Droplets,
  'مکانیکال سیل': Wrench,
  'تیوپ': Droplets,
  'موتور کولر': Fan,
  'پمپ کف کش': Droplets,
  'پمپ کارواش': Droplets,
  'موتور برق': ZapIcon,
  'پمپ دنده‌ای': Droplets,
  'بلوئر': Droplets,
  'روغن داغ': Droplets,
} as const;

// const categoryMapping = {
//   'ست کنترل': { color: 'from-slate-700 to-slate-500', iconColor: 'text-slate-200' },
//   'منبع انبساط': { color: 'from-sky-600 to-blue-500', iconColor: 'text-sky-200' },
//   'پمپ آب خانگی': { color: 'from-emerald-600 to-green-500', iconColor: 'text-emerald-200' },
//   'مکانیکال سیل': { color: 'from-rose-600 to-red-500', iconColor: 'text-rose-200' },
//   'تیوپ': { color: 'from-amber-600 to-yellow-500', iconColor: 'text-amber-200' },
//   'موتور کولر': { color: 'from-teal-600 to-cyan-400', iconColor: 'text-teal-200' },
//   'پمپ کف کش': { color: 'from-violet-600 to-purple-500', iconColor: 'text-violet-200' },
//   'پمپ کارواش': { color: 'from-red-600 to-orange-500', iconColor: 'text-red-200' },
//   'موتور برق': { color: 'from-zinc-700 to-zinc-500', iconColor: 'text-zinc-200' },
//   'پمپ دنده‌ای': { color: 'from-cyan-700 to-blue-600', iconColor: 'text-cyan-200' },
//   'بلوئر': { color: 'from-cyan-700 to-blue-600', iconColor: 'text-cyan-200' },
//   'روغن داغ': { color: 'from-cyan-700 to-blue-600', iconColor: 'text-cyan-200' },
// } as const;

const categoryMapping = {
  'ست کنترل': { color: 'from-slate-800 to-slate-600', iconColor: 'text-slate-300' },
  'منبع انبساط': { color: 'from-blue-700 to-indigo-500', iconColor: 'text-blue-200' },
  'پمپ آب خانگی': { color: 'from-emerald-700 to-teal-500', iconColor: 'text-emerald-200' },
  'مکانیکال سیل': { color: 'from-orange-600 to-amber-500', iconColor: 'text-orange-100' },
  'تیوپ': { color: 'from-rose-700 to-pink-600', iconColor: 'text-rose-200' },
  'موتور کولر': { color: 'from-cyan-600 to-sky-500', iconColor: 'text-cyan-100' },
  'پمپ کف کش': { color: 'from-violet-700 to-purple-600', iconColor: 'text-violet-200' },
  'پمپ کارواش': { color: 'from-red-700 to-rose-600', iconColor: 'text-red-200' },
  'موتور برق': { color: 'from-zinc-800 to-stone-600', iconColor: 'text-zinc-300' },
  'پمپ دنده‌ای': { color: 'from-amber-700 to-yellow-600', iconColor: 'text-amber-200' },
  'بلوئر': { color: 'from-indigo-800 to-blue-700', iconColor: 'text-indigo-200' },
  'روغن داغ': { color: 'from-orange-900 to-red-900', iconColor: 'text-orange-200' },
} as const;
type CategoryTitle = keyof typeof categoryMapping;

interface CategoryItem {
  title: CategoryTitle;
  href: string;
  src: string;
}

const categories: CategoryItem[] = [
  { title: 'ست کنترل', href: '/SetControl', src: 'https://apitak.ir/images/controlset.webp' },
  { title: 'پمپ آب خانگی', href: '/HouseholdPump', src: 'https://apitak.ir/images/household.webp' },
  { title: 'مکانیکال سیل', href: '/mechanical-seal/', src: 'https://apitak.ir/images/mechanicalseal.webp' },
  { title: 'منبع انبساط', href: '/ExpansionSource', src: 'https://apitak.ir/images/enbesat.webp' },
  { title: 'تیوپ', href: '/tube', src: 'https://apitak.ir/apitak/uploads/file_698e5a58e4405_1770936920.webp' },
  { title: 'موتور کولر', href: '/Cooler', src: 'https://apitak.ir/images/coolermotor.webp' },
  { title: 'پمپ کف کش', href: '/kafkesh-pump', src: 'https://apitak.ir/images/kafkesh1.png' },
  { title: 'پمپ کارواش', href: '/karvash-pump', src: 'https://apitak.ir/apitak/uploads/file_698e5ddc7ab33_1770937820.webp' },
  { title: 'موتور برق', href: '/motor-bargh', src: 'https://apitak.ir/images/motorbargh.png' },
  { title: 'پمپ دنده‌ای', href: '/gear-pump', src: 'https://apitak.ir/images/gear-pump.png' },
  { title: 'بلوئر', href: '/bluer', src: 'https://apitak.ir/images/bluer1.png' },
  { title: 'روغن داغ', href: '/hot-oil', src: 'https://apitak.ir/images/hot-oil1.png' },
];

const MainCategory = () => {
  return (
    <section className="container mx-auto px-4 py-10 my-10 mb-20 md:py-16" dir="rtl">
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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {categories.map((cat) => {
          const style = categoryMapping[cat.title];
          const Icon = iconMapping[cat.title] ?? Box;

          return (
            <Link
              key={cat.title}
              href={cat.href}
              className={`group relative overflow-hidden flex flex-col items-center p-4 pt-8 md:p-6 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-[1.03] hover:shadow-2xl text-white min-h-[220px] bg-gradient-to-br ${style.color}`}
            >
              <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:rotate-12 transition-transform duration-500">
                <Icon size={96} className={style.iconColor} />
              </div>

              <div className="w-24 h-24 md:w-32 md:h-32 mb-4 absolute  top-15 lg:top-10 z-10">
                <Image
                  src={cat.src}
                  alt={cat.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:-rotate-6"
                />
              </div>

              <h3 className="text-lg md:text-xl font-extrabold text-center mt-auto z-10">
                {cat.title}
              </h3>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default MainCategory;





// import PremiumCategoryClient from "./PremiumCategory.client";

// const categories = [
//   {
//     title: "پمپ آب خانگی",
//     href: "/HouseholdPump",
//     src: "https://rahabsanat.ir/wp-content/uploads/2025/03/leo_pump-1.webp",
//   },
//   {
//     title: "مکانیکال سیل",
//     enTitle: "APIKA",
//     href: "/product-category/mechanical-seal/",
//     src: "https://rahabsanat.ir/wp-content/uploads/2025/03/mechanical_seal-1.webp",
//     accent: "bg-purple-500",
//   },
//   {
//     title: "منبع انبساط",
//     enTitle: "Expansion Tank",
//     href: "/ExpansionSource",
//     src: "https://rahabsanat.ir/wp-content/uploads/2025/03/enbesat-1.webp",
//     accent: "bg-emerald-500",
//   },
//   {
//     title: "تیوپ",
//     enTitle: "Expansion Tank",
//     href: "/tiup",
//     src: "https://apitak.ir/images/tiup.png",
//     accent: "bg-emerald-500",
//   },
//   {
//     title: "موتور کولر",
//     enTitle: "Cooler Motor",
//     href: "/Cooler",
//     src: "https://rahabsanat.ir/wp-content/uploads/2025/03/cooler_motor-1.webp",
//     accent: "bg-orange-500",
//   },
//   {
//     title: "ست کنترل",
//     enTitle: "Control Set",
//     href: "/SetControl",
//     src: "https://rahabsanat.ir/wp-content/uploads/2025/03/control-set.webp",
//     accent: "bg-slate-700",
//   },
//   {
//     title: "پمپ کف کش",
//     enTitle: "Control Set",
//     href: "/kafkesh-pump",
//     src: "https://apitak.ir/images/kafkesh1.png",
//     accent: "bg-slate-700",
//   },
//   {
//     title: "پمپ کارواش ",
//     enTitle: "Control Set",
//     href: "/karvash-pump",
//     src: "https://apitak.ir/images/karvash1.png",
//     accent: "bg-slate-700",
//   },
//   {
//     title: "موتور برق",
//     enTitle: "Control Set",
//     href: "/bluer",
//     src: "https://apitak.ir/images/motorbargh.png",
//     accent: "bg-slate-700",
//   },
//   {
//     title: "پمپ دنده‌ای",
//     enTitle: "Control Set",
//     href: "/bluer",
//     src: "https://apitak.ir/images/gear-pump.png",
//     accent: "bg-slate-700",
//   },
// ];

// export default function PremiumCategory() {
//   return (
//     <section className="py-24 bg-white overflow-hidden" dir="rtl">
//       <div className="container mx-auto px-6">
//         <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
//           <div className="max-w-2xl">
//             <div className="h-1 w-14 bg-slate-900 mb-6" />
//             <h2 className="text-4xl md:text-6xl font-light text-slate-900 leading-tight tracking-tight">
//               تجلی <span className="font-black text-blue-600">قدرت</span> <br />
//               در مهندسی آب و صنعت
//             </h2>
//           </div>
//           <p className="text-slate-400 font-medium max-w-[200px] text-sm leading-6 border-r-2 border-slate-100 pr-4">
//             مجموعه‌ای از برترین برندهای جهانی برای پروژه‌های هوشمند شما.
//           </p>
//         </div>
//         <PremiumCategoryClient categories={categories} />
//       </div>
//     </section>
//   );
// }
