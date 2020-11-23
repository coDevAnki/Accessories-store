import { createSelector } from "reselect";

export const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  selectCart,
  (cart) => cart.cartItems
);

export const selectCartCount = createSelector(selectCartItems, (cartItems) =>
  cartItems.reduce((acc, cur) => acc + cur.quantity, 0)
);

export const selectCartHidden = createSelector(
  selectCart,
  (cart) => cart.hidden
);
