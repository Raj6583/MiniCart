import * as types from "../actions/actionTypes";
import initialState from "./initialState";

// Initial state = []
// Products: {id, title, desc, image, price, currency}
// Cart: {id, title, desc, image, price, currency, quantity}
// Current Item: null

export default function productReducers(state = initialState.products, action) {
  switch (action.type) {
    case types.LOAD_ITEMS_SUCCESS:
      return action.products;

    case types.ADD_ITEM_SUCCESS:
      const item = state.find((item) => item.id === action.item.id);

      if (item) {
        return state.map((product) =>
          product.id === action.item.id
            ? {
                ...product,
                quantity: product.quantity + 1,
                price: 39 * (product.quantity + 1),
              }
            : product
        );
      }

      return null;

    case types.REMOVE_ITEM_SUCCESS:
      const removeItem = state.find((item) => item.id === action.item.id);

      if (removeItem) {
        return state.map((product) =>
          product.id === action.item.id
            ? {
                ...product,
                quantity:
                  product.quantity > 1
                    ? product.quantity - 1
                    : product.quantity,
                price:
                  product.quantity > 1 ? 39 * (product.quantity - 1) : 39,
              }
            : product
        );
      }

      return null;

    case types.REMOVE_PRODUCT_SUCCESS:
      return state.filter((product) => product.id !== action.product.id);

    default:
      return state;
  }
}
