import { handleResponse, handleError } from "./apiUtils.js";

// const baseUrl = "https://dnc0cmt2n557n.cloudfront.net/products.json";
const baseUrl = "http://localhost:3201/products";

//JS Fetch function
export function getProducts() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
