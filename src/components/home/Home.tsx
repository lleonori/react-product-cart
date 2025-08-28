import { Cart } from "../cart/Cart";
import { ProductList } from "../product/ProductList";

export function Home() {
  return (
    <div className="flex gap-6 p-4">
      <div className="flex-2">
        <ProductList />
      </div>
      <div className="flex-1">
        <Cart />
      </div>
    </div>
  );
}
