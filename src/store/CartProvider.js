import { useReducer } from "react";
import CartContext from "./cart-context";

const defualtCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  return defualtCartState;
};

const CartProvider = (props) => {
  const [cartSate, dispatchCartAction] = useReducer(
    cartReducer,
    defualtCartState
  );

  const addItemToCartHandler = (item) => {};

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: cartSate.items,
    totalAmount: defualtCartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
