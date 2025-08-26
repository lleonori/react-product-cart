import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Cart } from "./components/cart/Cart";
import { Layout } from "./components/layout/Layout";
import { ProductList } from "./components/product/ProductList";
import { CartProvider } from "./contexts/cartProvider";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Layout>
          <div className="flex justify-between gap-14 p-4">
            <ProductList />
            <Cart />
          </div>
        </Layout>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
