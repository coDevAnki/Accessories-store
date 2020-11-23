export const addToCartHelper = (state, item) => {
  const isInCart = state.cartItems.some((cartItem) => cartItem.id === item.id);
  if (isInCart) {
    return state.cartItems.map((cartItem) => {
      if (cartItem.id === item.id)
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      return cartItem;
    });
  }
  return [...state.cartItems, { ...item, quantity: 1 }];
};
