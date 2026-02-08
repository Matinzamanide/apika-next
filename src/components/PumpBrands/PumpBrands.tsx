import Link from "next/link";

const brands = [
  { name: "موتوژن", slug: "موتوژن", color: "from-blue-500 to-blue-700" },
  { name: "توان تک", slug: "توان تک", color: "from-emerald-500 to-emerald-700" },
  { name: "بهار پمپ", slug: "بهار پمپ", color: "from-orange-500 to-orange-700" },
  { name: "نوید موتور", slug: "نوید موتور", color: "from-purple-500 to-purple-700" },
  { name: "رایان", slug: "رایان", color: "from-slate-600 to-slate-800" },
];

export default function PumpBrands() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            برندهای معتبر پمپ
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            انتخابی از برندهای قابل اعتماد برای پروژه‌های صنعتی و خانگی
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {brands.map((brand) => (
            <Link
              key={brand.slug}
              href={`/ProductBrands/${brand.slug}`}
              className="group relative rounded-3xl p-[1px] overflow-hidden"
            >
              {/* Border gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-30 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Card */}
              <div className="relative bg-white rounded-3xl h-48 flex flex-col items-center justify-center gap-4 transition-transform duration-500 group-hover:-translate-y-2">
                
                {/* Monogram */}
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${brand.color} text-white flex items-center justify-center text-2xl font-black shadow-lg`}
                >
                  {brand.name[0]}
                </div>

                {/* Brand name */}
                <span className="text-lg font-bold text-gray-800 group-hover:tracking-widest transition-all duration-300">
                  {brand.name}
                </span>

                {/* subtle hint */}
                <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  مشاهده محصولات →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
