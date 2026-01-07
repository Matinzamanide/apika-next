"use client"
import { useEffect, useState } from "react";
import type { IProduct } from "../../Types/Types";
import axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard";

const SkeletonCard = () => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
    <div className="w-full h-48 bg-gray-200"></div>
    <div className="p-4 space-y-3">
      <div className="h-5 bg-gray-200 rounded"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="flex justify-between items-center">
        <div className="h-5 bg-gray-200 rounded w-1/3"></div>
        <div className="h-8 bg-gray-200 rounded w-16"></div>
      </div>
    </div>
  </div>
);

const Products = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const categorySynonyms: Record<string, string[]> = {
    "ست کنترل پمپ": [
      "ست کنترل پمپ",
      "کنترل پمپ",
      "پمپ کنترل",
      "کنترلر پمپ",
      "پمپ کنترلر",
      "کنترل فشار پمپ",
      "فشار کنترل پمپ",
      "کنترل پمپ آب",
    ],
    "دوزینگ پمپ": [
      "دوزینگ پمپ",
      "پمپ دوزینگ",
      "دوزینگ",
      "پمپ شیمیایی",
      "پمپ تزریقی",
    ],
    "الکترو پمپ": ["الکترو پمپ", "الکتروپمپ", "پمپ الکتریکی", "الکتریک پمپ"],
    "منبع انبساط": [
      "منبع انبساط",
      "منبع تحت فشار",
      "تینک انبساط",
      "فشار تنک",
      "پرسور تنک",
      "اکسپنشن تانک",
    ],
    "پمپ لجن کش": ["پمپ لجن کش", "لجن کش", "پمپ فاضلاب", "پمپ زباله"],
    "کولر": ["کولر", "کولر آبی", "کولر پوششی", "کولر صنعتی"],
    "ویبراتور": ["ویبراتور", "موتور ویبراتور", "ویبره", "موتور ویبره"],
    "گیربکس": ["گیربکس", "گیربکس صنعتی", "دنده", "گیر دنده"],
  };

  const normalizeCategory = (cat: string): string => {
    if (!cat) return "";
    const normalized = cat.trim().toLowerCase().replace(/[\s\-_]+/g, " ");
    for (const [canonical, variants] of Object.entries(categorySynonyms)) {
      if (variants.map((v) => v.toLowerCase().trim()).includes(normalized)) {
        return canonical;
      }
    }
    return cat.trim();
  };

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios("https://apitak.ir/apitak/get_products.php")
      .then((res) => {
        const products: IProduct[] = res.data;
        setData(products);

        const allCategories = products.flatMap((p) => p.categories || []);
        const normalizedCategories = allCategories
          .filter((cat): cat is string => Boolean(cat))
          .map(normalizeCategory);

        const uniqueCategories = Array.from(new Set(normalizedCategories))
          .filter((cat) => cat !== "")
          .sort((a, b) => a.localeCompare(b, "fa-IR"));

        setAvailableCategories(uniqueCategories);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError("دریافت محصولات با خطا مواجه شد. لطفاً دوباره تلاش کنید.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredData = selectedCategory
    ? data.filter((p) =>
        (p.categories || []).some(
          (cat) => normalizeCategory(cat) === selectedCategory
        )
      )
    : data;

  const handleClearFilter = () => setSelectedCategory(null);

  return (
    <div className="flex flex-col lg:flex-row w-[95%] mx-auto my-8 gap-8 min-h-screen">
      <aside className="lg:w-1/4 w-full lg:sticky lg:top-4 self-start">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-4 text-right">
            فیلتر دسته‌بندی
          </h3>

          {availableCategories.length > 0 ? (
            <>
              <div className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {availableCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-right pr-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium
                      ${
                        selectedCategory === cat
                          ? "bg-blue-100 text-blue-800 border-r-4 border-blue-500"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {selectedCategory && (
                <button
                  onClick={handleClearFilter}
                  className="mt-4 w-full text-center text-sm text-red-600 hover:text-red-800 font-medium transition"
                >
                  ✕ پاک کردن فیلتر
                </button>
              )}
            </>
          ) : (
            <p className="text-gray-500 text-sm">هیچ دسته‌بندی موجود نیست</p>
          )}
        </div>
      </aside>

      <main className="lg:w-3/4 w-full">
        <div className="mb-6 text-right">
          <h1 className="text-2xl font-bold text-gray-800">
            {selectedCategory ? `محصولات دسته: ${selectedCategory}` : "همه محصولات"}
          </h1>
          <p className="text-gray-600 mt-1">
            {filteredData.length} محصول {selectedCategory ? `در دسته "${selectedCategory}"` : ""}
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg text-sm text-right mb-6">
            {error}
          </div>
        )}

        {loading ? (
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : filteredData.length === 0 ? (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center">
            <img
              src="/images/empty-box.png"
              alt="محصولی یافت نشد"
              className="w-20 h-20 mx-auto opacity-50"
            />
            <h3 className="mt-4 text-gray-700 font-medium">محصولی یافت نشد</h3>
            <p className="text-gray-500 text-sm mt-1">
              {selectedCategory
                ? `در دسته "${selectedCategory}" هیچ محصولی وجود ندارد.`
                : "هیچ محصولی در سیستم موجود نیست."}
            </p>
            {selectedCategory && (
              <button
                onClick={handleClearFilter}
                className="mt-4 text-blue-600 hover:underline text-sm font-medium"
              >
                بازگشت به همه محصولات
              </button>
            )}
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 animate-fadeIn">
            {filteredData.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Products;

