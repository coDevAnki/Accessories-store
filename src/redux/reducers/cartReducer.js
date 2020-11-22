import { TOGGLE_CART_DROPDOWN } from "../actionTypes";
const initState = {
  hidden: true,
};

const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case TOGGLE_CART_DROPDOWN:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};

export default cartReducer;
