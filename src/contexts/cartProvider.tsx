import { cartReducer, initialCartState } from "@/reducer/cartReducer";
import { useReducer } from "react";
import { CartContext } from "./cartContext";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
