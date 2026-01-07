import ProductCard from "@/components/ProductCard/ProductCard";
import { IProduct } from "@/Types/Types";

interface IProps {
  params: Promise<{ id: string }>;
}

const ProductBrands = async (props: IProps) => {
  const params = await props.params;
  const { id } = params;

  const decodedId = decodeURIComponent(id);

  const res = await fetch("https://apitak.ir/apitak/get_products.php", {
    cache: "no-store",
  });
  const data = (await res.json()) as IProduct[];

  const filteredByBrand = data.filter((product) =>
    product.brand.includes(decodedId)
  );

  return (
    <div className="w-[95%] mx-auto">
      <h1 className="text-center text-3xl font-bold my-10">
        محصولات برند {decodedId}
      </h1>

      <div className="grid lg:grid-cols-4 gap-4 my-10">
        {filteredByBrand.length > 0 ? (
          filteredByBrand.map((item) => <ProductCard key={item.id} {...item} />)
        ) : (
          <p className="col-span-4 text-center text-gray-600 py-6">
            محصولی از برند "{decodedId}" یافت نشد.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductBrands;