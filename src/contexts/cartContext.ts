import type {
  CartAction,
  CartState,
} from "@/reducer/models/cart-reducer.model";
import { createContext } from "react";

type ContextCartState = {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
};

export const CartContext = createContext<ContextCartState | undefined>(
  undefined
);
