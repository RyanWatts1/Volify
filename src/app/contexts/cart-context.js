import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  /**
   Add item to cart takes in a new item and checks if it already exists in the cart. If it does it updates the amount of that item in the cart. If it doesn't it adds the item to the cart with an amount of 1.
   */
  const addItemToCart = (newItem) => {
    setCart((prevCart) => {
      const itemExistsInCart = prevCart.find(
        (itemInCart) => itemInCart.id === newItem.id
      );

      if (itemExistsInCart) {
        return prevCart.map((itemInCart) =>
          itemInCart.id === newItem.id
            ? { ...itemInCart, amount: itemInCart.amount + 1 }
            : itemInCart
        );
      } else {
        return [...prevCart, { ...newItem, amount: 1 }];
      }
    });
  };

  /**
   removeItemFromCart takes in an id and checks if the item exists in the cart. If it does it checks if the amount is 1. If it is it removes the item from the cart. If it isn't it updates the amount of that item in the cart by subtracting 1.
   */

  const removeItemFromCart = (id) => {
    setCart((prevCart) => {
      const itemExistsInCart = prevCart.find(
        (itemInCart) => itemInCart.id === id
      );

      console.log(itemExistsInCart);

      if (itemExistsInCart.amount === 1) {
        return prevCart.filter((itemInCart) => itemInCart.id !== id);
      } else {
        return prevCart.map((itemInCart) =>
          itemInCart.id === id
            ? { ...itemInCart, amount: itemInCart.amount - 1 }
            : itemInCart
        );
      }
    });
  };

  const value = {
    items: cart,
    totalAmount: cart.reduce((total, item) => total + item.price, 0),
    addItemToCart,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
