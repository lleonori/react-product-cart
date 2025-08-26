import type { CartAction, CartState } from "./models/cart-reducer.model";

export const initialCartState: CartState = {
  product: {
    id: "",
    name: "",
    price: 0,
    stock: 0,
    image: "",
  },
};

export function cartReducer(state: CartState, action: CartAction) {
  switch (action.type) {
    case "ADD_PRODUCT": {
      //   const findProduct = state.products.find(
      //     (product) => product.id === action.payload.id
      //   );

      return { ...state, product: action.payload };
    }
    case "REMOVE_PRODUCT": {
      return {
        ...state,
      };
    }
  }
}
