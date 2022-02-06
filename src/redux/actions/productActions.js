import * as types from "./actionTypes";
import * as productApi from "../../api/productsApi";

//Action
export function loadItemsSuccess(products) {
  return {
    type: types.LOAD_ITEMS_SUCCESS,
    products,
  };
}

// Add item to Cart
export function addItemSuccess(item) {
  return { type: types.ADD_ITEM_SUCCESS, item };
}

// Remove item from cart
export function removeItemSuccess(item) {
  return { type: types.REMOVE_ITEM_SUCCESS, item };
}

// Remove product from cart
export function removeProductSuccess(product) {
  return { type: types.REMOVE_PRODUCT_SUCCESS, product };
}

// Get all the products
export function loadItems() {
  return function (dispatch) {
    return productApi
      .getProducts()
      .then((list) => dispatch(loadItemsSuccess(list)))
      .catch((error) => {
        throw error;
      });
  };
}
