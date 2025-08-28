import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Cart } from "./components/cart/Cart";
import { Layout } from "./components/layout/Layout";
import { ProductList } from "./components/product/ProductList";
import { CartContext } from "./contexts/cartContext";
import { useReducer } from "react";
import { cartReducer, intialCartState } from "./reducer/cartReducer";

function App() {
  const queryClient = new QueryClient();
  const [state, dispatch] = useReducer(cartReducer, intialCartState);

  return (
    <QueryClientProvider client={queryClient}>
      <CartContext value={{ state, dispatch }}>
        <Layout>
          <div className="flex justify-between gap-14 p-4">
            <ProductList />
            <Cart />
          </div>
        </Layout>
      </CartContext>
    </QueryClientProvider>
  );
}

export default App;
