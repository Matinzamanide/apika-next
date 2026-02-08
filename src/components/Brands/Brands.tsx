import Image from "next/image";
import Link from "next/link";

const brands = [
  { src: "https://apitak.ir/images/Electrogen.png", brand: "الکتروژن", link: "/ProductBrands/الکتروژن" },
  { src: "https://apitak.ir/images/motogen.png", brand: "موتوژن", link: "/ProductBrands/موتوژن" },
  { src: "https://apitak.ir/images/bahar.png", brand: "بهار پمپ", link: "/ProductBrands/بهار پمپ" },
  { src: "https://apitak.ir/images/rayan.jpg", brand: "رایان پمپ", link: "/ProductBrands/رایان" },
  { src: "https://apitak.ir/images/hedfix.png", brand: "هدفیکس", link: "/ProductBrands/HEDFIX" },
  { src: "https://apitak.ir/images/PENTAX.png", brand: "PENTAX", link: "/ProductBrands/PENTAX" },
  { src: "https://apitak.ir/images/onyx.png", brand: "ONYX", link: "/ProductBrands/ONYX" },
  { src: "https://apitak.ir/images/abara.png", brand: "آبارا", link: "/ProductBrands/آبارا" },
  { src: "https://apitak.ir/images/Danfoss.webp", brand: "Danfoss", link: "/ProductBrands/Danfoss" },
  { src: "https://apitak.ir/images/hachasou.png", brand: "هاچاسو", link: "/ProductBrands/هاچاسو" },
];

export default function Brands() {
  return (
    <section className="w-full py-16">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
          برندهای معتبر همکار
        </h2>
        <p className="text-slate-500 mt-3">
          محصولات اصل، گارانتی معتبر و خدمات پس از فروش
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto px-6">
        {brands.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-slate-100 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
          >
            <div className="relative w-24 h-24 mb-4">
              <Image
                src={item.src}
                alt={item.brand}
                width={120}
                height={120}
                className="object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <span className="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
              {item.brand}
            </span>
          </Link>
        ))}
      </div>

      {/* Divider */}
      <div className="mt-14 flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
      </div>
    </section>
  );
}
