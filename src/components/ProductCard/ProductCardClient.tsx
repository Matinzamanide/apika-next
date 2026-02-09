"use client";

import Image from "next/image";
import { ShoppingCart, Star, ArrowLeft } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface ProductCardClientProps {
  title: string;
  price: number;
  before_discount_price: number;
  images: string[];
  inventory: number;
  brand: string;
  categories: string[];
  discountPercentage: number | null;
  isAvailable: boolean;
  safeSlug: string;
}

const ProductCardClient = ({
  title,
  price,
  before_discount_price,
  images,
  inventory,
  brand,
  categories,
  discountPercentage,
  isAvailable,
  safeSlug,
}: ProductCardClientProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Link href={isAvailable ? `/ProductPage/${safeSlug}` : "#"}>
        <div
          className={`relative bg-white rounded-[2.5rem] p-4 transition-all duration-700 ${
            isAvailable
              ? "border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] group-hover:border-blue-100"
              : "grayscale opacity-70 cursor-not-allowed"
          }`}
        >
          <div className="relative h-64 w-full rounded-[2rem] bg-slate-50 overflow-hidden flex items-center justify-center transition-colors duration-500 group-hover:bg-blue-50/50">
            {/* برچسب تخفیف و ناموجود */}
            <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
              {discountPercentage && (
                <span className="bg-red-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg shadow-red-200">
                  {discountPercentage}%- 
                </span>
              )}
              {!isAvailable && (
                <span className="bg-slate-800 text-white text-[10px] font-bold px-3 py-1.5 rounded-full">
                  ناموجود
                </span>
              )}
            </div>

            {/* تصویر */}
            <Image
              src={hovered && images.length > 1 ? images[1] : images[0]}
              alt={title}
              fill
              className="object-contain p-8 transition-all duration-1000 ease-out group-hover:scale-110 group-hover:rotate-2"
            />

            {/* دکمه خرید سریع */}
            <AnimatePresence>
              {hovered && isAvailable && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-4 inset-x-4 z-30"
                >
                  <div className="bg-white/80 backdrop-blur-md border border-white/40 py-3 rounded-2xl flex items-center justify-center gap-2 shadow-xl">
                    <ShoppingCart size={18} className="text-blue-600" />
                    <span className="text-sm font-bold text-slate-800">خرید سریع</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* اطلاعات محصول */}
          <div className="mt-6 px-2 pb-2 text-right" dir="rtl">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Premium Equipment</span>
              <div className="flex items-center gap-1 text-amber-400">
                <Star size={12} fill="currentColor" />
                <span className="text-[10px] font-black text-slate-600">4.9</span>
              </div>
            </div>

            <h3 className="text-lg font-bold text-slate-800 line-clamp-1 group-hover:text-blue-600 transition-colors duration-300">
              {title}
            </h3>

            <div className="mt-4 flex items-end justify-between">
              <div className="flex flex-col">
                {discountPercentage && (
                  <span className="text-xs text-slate-400 line-through decoration-red-400/50 mb-1">
                    {before_discount_price.toLocaleString()}
                  </span>
                )}
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-black text-slate-900 tracking-tighter">{price.toLocaleString()}</span>
                  <span className="text-[10px] font-bold text-slate-400">تومان</span>
                </div>
              </div>

              <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-50 flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${isAvailable ? 'bg-emerald-500' : 'bg-slate-300'}`} />
              <span className="text-[10px] font-bold text-slate-400">
                {isAvailable ? 'آماده ارسال از انبار مرکزی' : 'عدم موجودی در این لحظه'}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCardClient;
