import CartContext from "./cart-context";

const CartProvider = (props) => {
  const AddItemToCartHandler = (item) => {};

  const removeItemFromCartHandler = (is) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: AddItemToCartHandler,
    removieItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provder value={cartContext}>
      {props.children}
    </CartContext.Provder>
  );
};

export default CartProvider;
