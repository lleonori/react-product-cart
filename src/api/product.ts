import type { Product } from "@/components/product/models/product.model";

export function getProducts(): Promise<Product[]> {
  return fetch("http://localhost:3000/products").then((res) => res.json());
}
