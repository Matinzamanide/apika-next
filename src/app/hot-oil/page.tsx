import ProductCard from "@/components/ProductCard/ProductCard";
import ProductFilters from "@/components/ProductFilters/ProductFilters";
import { IProduct } from "@/Types/Types";

interface ExpansionSourceProps {
  searchParams: Promise<{
    brand?: string;
    sort?: string;
  }>;
}

const HotOil = async (props: ExpansionSourceProps) => {
  const searchParams = await props.searchParams;
  const selectedBrand = searchParams.brand || "all";
  const sortOrder = searchParams.sort || "default";

  let allProducts: IProduct[] = [];
  try {
    const res = await fetch("https://apitak.ir/apitak/get_products.php", {
      cache: "no-store",
    });
    allProducts = (await res.json()) as IProduct[];
  } catch (error) {
    console.error("خطا در دریافت محصولات:", error);
    return (
      <div
        className="max-w-[95%] mx-auto py-10 px-4 sm:px-6 lg:px-8 text-center text-red-500"
        dir="rtl"
      >
        <p className="text-xl font-medium">
          متأسفانه در حال حاضر امکان بارگذاری محصولات وجود ندارد.
        </p>
        <p>لطفاً دقایقی دیگر تلاش کنید.</p>
      </div>
    );
  }

  let filteredByCategory = allProducts.filter((product) =>
    product.categories?.some((cat) => cat.includes("پمپ روغن داغ"))
  );

  const availableBrands = Array.from(
    new Set(filteredByCategory.map((product) => product.brand))
  ).filter((brand): brand is string => Boolean(brand));

  if (selectedBrand !== "all") {
    filteredByCategory = filteredByCategory.filter(
      (product) => product.brand === selectedBrand
    );
  }

  if (sortOrder === "cheapest") {
    filteredByCategory.sort((a, b) => Number(a.price) - Number(b.price));
  } else if (sortOrder === "most_expensive") {
    filteredByCategory.sort((a, b) => Number(b.price) - Number(a.price));
  }

  return (
    <div className="max-w-[95%] mx-auto py-10 px-4 sm:px-6 lg:px-8" dir="rtl">
      <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
         انواع پمپ روغن داغ
      </h2>

      <div className="flex flex-col md:grid md:grid-cols-4 md:gap-6">
        <div className="mb-6 md:mb-0">
          <ProductFilters availableBrands={availableBrands} title="فیلترها" />
        </div>

        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredByCategory.length > 0 ? (
            filteredByCategory.map((item, index) => (
              <ProductCard key={item.id || index} {...item} />
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-gray-600">
              <p className="text-xl font-medium">محصولی با این فیلترها یافت نشد.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotOil;