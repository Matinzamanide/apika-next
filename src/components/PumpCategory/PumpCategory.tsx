'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

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

const PremiumCategory = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6">
        
        {/* Header: بسیار ساده و با کلاس */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              className="h-1 bg-slate-900 mb-6"
            />
            <h2 className="text-4xl md:text-6xl font-light text-slate-900 leading-tight tracking-tight">
              تجلی <span className="font-black text-blue-600">قدرت</span> <br /> 
              در مهندسی آب و صنعت
            </h2>
          </div>
          <p className="text-slate-400 font-medium max-w-[200px] text-sm leading-6 border-r-2 border-slate-100 pr-4">
            مجموعه‌ای از برترین برندهای جهانی برای پروژه‌های هوشمند شما.
          </p>
        </div>

        {/* Grid: معماری منظم و خلوت */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={cat.href} className="group relative block h-[450px] w-full bg-slate-50 rounded-[3rem] overflow-hidden border border-transparent hover:border-slate-200 transition-all duration-700">
                
                {/* پس‌زمینه متنی عمودی */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] rotate-90 group-hover:rotate-0 transition-transform duration-1000">
                  <span className="text-8xl font-black uppercase whitespace-nowrap">
                    {cat.enTitle}
                  </span>
                </div>

                {/* محتوای کارت */}
                <div className="relative h-full w-full flex flex-col items-center justify-between py-12 px-6 z-10">
                  
                  {/* دایره کوچک شاخص */}
                  <div className={`w-2 h-2 rounded-full ${cat.accent} mb-4 group-hover:scale-[3] transition-transform duration-500`} />

                  {/* تصویر محصول با سایه معلق */}
                  <div className="relative w-40 h-40 group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-700 ease-out">
                    <div className="absolute inset-0 bg-slate-200 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity" />
                    <Image
                      src={cat.src}
                      alt={cat.title}
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>

                  {/* عنوان و دکمه کشیده */}
                  <div className="text-center w-full">
                    <h3 className="text-xl font-bold text-slate-800 mb-6 group-hover:tracking-widest transition-all duration-500">
                      {cat.title}
                    </h3>
                    
                    {/* دکمه دایره‌ای پایین کارت */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 shadow-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* لایه رنگی بسیار ملایم در پایین که در هوور بالا می‌آید */}
                <div className="absolute bottom-0 left-0 right-0 h-0 bg-white group-hover:h-full transition-all duration-700 -z-0 opacity-10" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* استایل برای بهبود فونت‌ها */}
      <style jsx global>{`
        .font-light { font-weight: 300; }
        .tracking-tight { letter-spacing: -0.05em; }
      `}</style>
    </section>
  );
};
export default PremiumCategory;