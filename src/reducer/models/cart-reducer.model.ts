import type { Product } from "@/components/product/models/product.model";

export type ItemQty = {
  qty: number;
};

export type CartItem = Product & ItemQty;

export type CartState = {
  items: CartItem[];
  totalQty: number;
};

export type CartAction = {
  type: ActionType;
  payload: CartItem;
};

export type ActionType = "ADD_PRODUCT" | "REMOVE_PRODUCT";
