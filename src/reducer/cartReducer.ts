import type { CartAction, CartState } from "./models/cart-reducer.model";

export const intialCartState: CartState = {
  items: [],
  totalQty: 0,
};

export function cartReducer(state: CartState, action: CartAction) {
  if (action.type === "ADD_PRODUCT") {
    const findItem = state.items.find((item) => item.id === action.payload.id);
    if (!findItem) {
      return {
        ...state,
        items: [...state.items, action.payload],
        totalQty: state.items.reduce(
          (accumulator, currentValue) => accumulator + currentValue.qty,
          1
        ),
      };
    } else {
      return {
        ...state,
        items: [
          ...state.items.map((item) =>
            item.id === findItem.id && item.qty < item.stock
              ? { ...findItem, qty: findItem.qty + 1 }
              : item
          ),
        ],
        totalQty: state.items.reduce(
          (accumulator, currentValue) => accumulator + currentValue.qty,
          1
        ),
      };
    }
  } else if (action.type === "REMOVE_PRODUCT") {
    const findItem = state.items.find((item) => item.id === action.payload.id);
    if (findItem && findItem.qty === 1) {
      return {
        ...state,
        items: [...state.items.filter((item) => item.id !== findItem.id)],
      };
    } else {
      return {
        ...state,
        items: [
          ...state.items.map((item) =>
            item.id === findItem?.id && item.qty > 0
              ? { ...findItem, qty: findItem.qty - 1 }
              : item
          ),
        ],
      };
    }
  } else if (action.type === "CLEAR_CART") {
    return intialCartState;
  }
  throw Error("Unknown action.");
}
