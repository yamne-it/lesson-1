export const findItem = (cartItems, itemToFind) => {
  return cartItems.find((cartItem) => cartItem.id === itemToFind.id);
};

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = findItem(cartItems, cartItemToAdd);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = findItem(cartItems, cartItemToRemove);

  if (existingCartItem) {
    if (cartItemToRemove.quantity > 1) {
      return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    }

    return clearItemFromCart(cartItems, cartItemToRemove);
  }
};
