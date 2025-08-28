import { CartContext } from "@/contexts/cartContext";
import { useContext } from "react";

export function useCart() {
  const cart = useContext(CartContext);
  if (cart) return cart;
  else throw new Error("Cart context undefined");
}
