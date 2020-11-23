import { addToCartHelper } from "../../utils/cartUtils";
import { ADD_TO_CART, TOGGLE_CART_DROPDOWN } from "../actionTypes";
const initState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case TOGGLE_CART_DROPDOWN:
      return { ...state, hidden: !state.hidden };
    case ADD_TO_CART:
      return { ...state, cartItems: addToCartHelper(state, payload) };
    default:
      return state;
  }
};

export default cartReducer;
