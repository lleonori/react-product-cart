import type { Product } from "@/components/product/models/product.model";

export type ItemQty = {
  qty: number;
};

export type CartItem = Product & ItemQty;

export type CartState = {
  items: CartItem[];
  totalQty: number;
};

export type CartAction =
  | {
      type: "ADD_PRODUCT";
      payload: CartItem;
    }
  | {
      type: "REMOVE_PRODUCT";
      payload: CartItem;
    }
  | {
      type: "CLEAR_CART";
    };

export type ActionType = CartAction["type"];
