import type { Product } from "@/components/product/models/product.model";

export type CartState = {
  product: Product;
};

export type CartAction = {
  type: ActionType;
  payload: Product;
};

export type ActionType = "ADD_PRODUCT" | "REMOVE_PRODUCT";
