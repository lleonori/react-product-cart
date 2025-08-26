import { initialCartState } from "@/reducer/cartReducer";
import type { CartAction } from "@/reducer/models/cart-reducer.model";
import { createContext } from "react";

type CartContextType = {
  state: typeof initialCartState;
  dispatch: React.Dispatch<CartAction>;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
