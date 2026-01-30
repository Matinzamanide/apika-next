"use client";
import { IChildren } from "@/Types/Types";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export interface ICartItems {
  id: number;
  qty: number;
}
interface IShoppingCartContext {
  cartItems: ICartItems[];
  handleIncreaseQty: (id: number) => void;
  handleDecreaseProductQty: (id: number) => void;
  getProductQty: (id: number) => number;
  cartTotalQty: number;
  handleRemoveProduct: (id: number) => void;
}
const ShoppingCartContext = createContext({} as IShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

const ShoppingCartContextProvider: React.FC<IChildren> = ({ children }) => {
  const [cartItems, setCartItems] = useState<ICartItems[]>([]);
  const handleIncreaseQty = (id: number) => {
    toast.success("محصول با موفقیت به سبد اضافه شد");
    setCartItems((currentItem) => {
      let isNotProductExist = currentItem.find((item) => item.id == id) == null;
      if (isNotProductExist) {
        return [...currentItem, { id: id, qty: 1 }];
      } else {
        return currentItem.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };
  const handleDecreaseProductQty = (id: number) => {
    toast("محصول با موفقیت حذف شد!", {
      icon: "👍🏼",
    });
    setCartItems((currentItems) => {
      const isLastOne = currentItems.find((item) => item.id === id)?.qty === 1;
      if (isLastOne) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        );
      }
    });
  };

  const handleRemoveProduct = (id: number) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log(cartItems);
  }, [cartItems]);

  const getProductQty = (id: number) => {
    return cartItems.find((item) => item.id === id)?.qty || 0;
  };

  const cartTotalQty = cartItems.reduce((totalQty, item) => {
    return totalQty + item.qty;
  }, 0);

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleIncreaseQty,
        handleDecreaseProductQty,
        getProductQty,
        cartTotalQty,
        handleRemoveProduct,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContextProvider;