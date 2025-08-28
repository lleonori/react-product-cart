import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useReducer } from "react";
import { Outlet } from "react-router";
import { CartContext } from "./contexts/cartContext";
import { cartReducer, intialCartState } from "./reducer/cartReducer";
import { Layout } from "./components/layout/Layout";

function App() {
  const queryClient = new QueryClient();
  const [state, dispatch] = useReducer(cartReducer, intialCartState);

  return (
    <QueryClientProvider client={queryClient}>
      <CartContext value={{ state, dispatch }}>
        <Layout>
          <Outlet />
        </Layout>
      </CartContext>
    </QueryClientProvider>
  );
}

export default App;
