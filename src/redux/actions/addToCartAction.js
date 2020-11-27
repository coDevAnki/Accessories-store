import { ADD_TO_CART } from "../actionTypes";
// import useLocalStore from "../../custom-hooks/useLocalStorage"
const addToCartAction = (item) => {
  return { type: ADD_TO_CART, payload: item };
};

export default addToCartAction;
