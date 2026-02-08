'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Category = {
  title: string;
  enTitle: string;
  href: string;
  src: string;
  accent: string;
};

export default function PremiumCategoryClient({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {categories.map((cat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Link
            href={cat.href}
            className="group relative block h-[450px] bg-slate-50 rounded-[3rem] overflow-hidden border border-transparent hover:border-slate-200 transition-all duration-700"
          >
            {/* متن بک‌گراند */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] rotate-90 group-hover:rotate-0 transition-transform duration-1000">
              <span className="text-8xl font-black uppercase whitespace-nowrap">
                {cat.enTitle}
              </span>
            </div>

            <div className="relative h-full flex flex-col items-center justify-between py-12 px-6 z-10">
              <div className={`w-2 h-2 rounded-full ${cat.accent} mb-4 group-hover:scale-[3] transition-transform duration-500`} />

              <div className="relative w-40 h-40 group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-700">
                <Image
                  src={cat.src}
                  alt={cat.title}
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-6 group-hover:tracking-widest transition-all duration-500">
                  {cat.title}
                </h3>

                <div className="inline-flex w-12 h-12 items-center justify-center rounded-full bg-white group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 shadow-sm">
                  ↗
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
