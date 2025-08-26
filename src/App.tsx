import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "./components/layout/Layout";
import { ProductList } from "./components/product/ProductList";
import { Cart } from "./components/cart/Cart";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <div className="p-4">
          {/* <h1 className="text-2xl font-bold mb-4">Benvenuto!</h1> */}
          <ProductList />
          <div className="flex justify-end my-1">
            <Cart />
          </div>
        </div>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
