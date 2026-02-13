import { IProduct } from '@/Types/Types';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ShoppingBag } from 'lucide-react';

export default async function NewestProduct() {
  const res = await fetch('https://apitak.ir/apitak/get_products.php', {
    next: { revalidate: 60 },
  });

  const json = await res.json();

  // معکوس کردن آرایه برای نمایش آخرین محصولات ثبت شده
  const products: IProduct[] = Array.isArray(json)
    ? [...json].reverse().slice(0, 8) // ابتدا کپی، بعد معکوس، بعد انتخاب ۸ تا
    : [];

  if (products.length === 0) return null;

  return (
    <section className="py-16 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between border-r-4 border-blue-600 pr-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              جدیدترین محصولات <span className="text-blue-600">آپیکا پمپ</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-medium">آخرین تجهیزات صنعتی و مهندسی اضافه شده</p>
          </div>
          <Link
            href="/Productss"
            className="hidden sm:flex items-center gap-2 text-sm font-bold text-blue-600 hover:gap-3 transition-all"
          >
            مشاهده همه محصولات
            <ChevronLeft size={18} />
          </Link>
        </div>

        {/* Products Slider Area */}
        <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 no-scrollbar">
          {products.map((product) => {
             const priceNum = Number(product.price);
             
             return (
              <Link
                key={product.id}
                href={`/ProductPage/${product.title}`}
                className="min-w-[260px] sm:min-w-[280px] snap-start group bg-white rounded-[2rem] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative w-full h-56 bg-slate-50 p-4">
                  <Image
                    src={product.images?.[0] || '/placeholder.png'}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 260px, 280px"
                    className="object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                  />
                  {priceNum > 0 && (
                    <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md p-2 rounded-xl shadow-sm">
                      <ShoppingBag size={18} className="text-blue-600" />
                    </div>
                  )}
                </div>

                {/* Info Section */}
                <div className="p-6 space-y-4">
                  <h3 className="text-sm font-extrabold text-slate-800 line-clamp-2 h-10 leading-6">
                    {product.title}
                  </h3>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                    {priceNum > 0 ? (
                      <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 font-bold mb-1">قیمت امروز:</span>
                        <span className="text-blue-700 font-black text-lg">
                          {priceNum.toLocaleString('fa-IR')} 
                          <span className="text-[10px] mr-1 font-normal text-slate-500 italic">تومان</span>
                        </span>
                      </div>
                    ) : (
                      <span className="text-amber-600 font-bold text-sm bg-amber-50 px-3 py-1 rounded-lg border border-amber-100">
                        تماس بگیرید
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-6 sm:hidden">
            <Link href="/Productss" className="w-full flex justify-center items-center py-4 bg-slate-50 rounded-2xl text-slate-600 font-bold text-sm border border-slate-100">
                مشاهده همه محصولات
            </Link>
        </div>
      </div>
    </section>
  );
}