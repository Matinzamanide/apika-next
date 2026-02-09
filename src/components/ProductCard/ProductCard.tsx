import ClientCard from "./ProductCardClient";
import { IProduct } from "@/Types/Types";

interface ProductCardServerProps extends IProduct {}

const ProductCardServer = ({
  title,
  price,
  before_discount_price,
  images,
  inventory,
  brand,
  categories,
}: ProductCardServerProps) => {
  const numericPrice = Number(price);
  const numericBeforeDiscountPrice = Number(before_discount_price);
  const isAvailable = Number(inventory) > 0;
  const hasDiscount = numericPrice < numericBeforeDiscountPrice && numericBeforeDiscountPrice > 0;

  const discountPercentage = hasDiscount
    ? Math.round(((numericBeforeDiscountPrice - numericPrice) / numericBeforeDiscountPrice) * 100)
    : null;

  const safeSlug = encodeURIComponent(title);

  return (
    <ClientCard
      title={title}
      price={numericPrice}
      before_discount_price={numericBeforeDiscountPrice}
      images={images}
      inventory={Number(inventory)}
      brand={brand}
      categories={categories}
      discountPercentage={discountPercentage}
      isAvailable={isAvailable}
      safeSlug={safeSlug}
    />
  );
};

export default ProductCardServer;
