import { Cart } from "../cart/Cart";
import { ProductList } from "../product/ProductList";

export function Home() {
  return (
    <div className="flex justify-between gap-14 p-4">
      <ProductList />
      <Cart />
    </div>
  );
}
