'use client';
import { useShoppingCartContext } from '@/context/ShoppingCartContext';
import { Minus, Plus, ShoppingCart, AlertCircle, Phone } from 'lucide-react';

interface IQuantity {
  props: number; 
  id_p: number; 
  price: number;
}

const QuantitySelector: React.FC<IQuantity> = ({ props: stock, id_p, price }) => {
  const {
    getProductQty,
    handleIncreaseQty,
    handleDecreaseProductQty,
  } = useShoppingCartContext();

  const qty = getProductQty(id_p);
  const isMax = qty >= stock;

  // شرط اصلی برای قابل فروش بودن کالا
  const isPurchasable = stock > 0 && price > 0;

  return (
    <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full max-w-md p-4 rounded-2xl shadow-md border border-gray-200 transition-all bg-white" dir="rtl">
      
      {isPurchasable ? (
        <>
          {qty > 0 ? (
            /* حالت اول: محصول در سبد هست */
            <div className="flex items-center justify-between w-full sm:w-auto border border-gray-300 rounded-xl px-3 py-2 shadow-sm bg-gray-50">
              <button
                onClick={() => handleDecreaseProductQty(id_p)}
                className="p-2 rounded-md hover:bg-red-50 hover:text-red-600 transition text-gray-600"
                aria-label="کاهش تعداد"
              >
                <Minus className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center">
                <span className="w-10 text-center font-bold text-gray-800 text-lg select-none">
                  {qty}
                </span>
                {isMax && <span className="text-[10px] text-orange-500 font-medium">حداکثر</span>}
              </div>

              <button
                onClick={() => handleIncreaseQty(id_p)}
                disabled={isMax}
                className={`p-2 rounded-md transition ${
                  isMax
                    ? 'cursor-not-allowed text-gray-300'
                    : 'hover:bg-green-50 hover:text-green-600 text-gray-600'
                }`}
                aria-label="افزایش تعداد"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          ) : (
            /* حالت دوم: محصول آماده خرید */
            <button
              onClick={() => handleIncreaseQty(id_p)}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-base font-bold bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-lg active:scale-95"
            >
              <ShoppingCart className="w-5 h-5" />
              افزودن به سبد خرید
            </button>
          )}
        </>
      ) : (
        /* حالت سوم: قیمت صفر است یا موجودی تمام شده */
        <div className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-50 text-amber-700 font-bold border border-amber-200 cursor-not-allowed">
          {price === 0 && stock > 0 ? (
            <>
              <Phone className="w-5 h-5" />
              جهت استعلام قیمت تماس بگیرید
            </>
          ) : (
            <>
              <AlertCircle className="w-5 h-5" />
              ناموجود در انبار
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default QuantitySelector;