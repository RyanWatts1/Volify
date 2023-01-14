import React from "react";
import CartItem from "../app/components/Cart/CartItems";
import classes from "../app/components/Cart/Cart.module.css";
import { useCart } from "../app/contexts/cart-context";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { items, totalAmount, addItemToCart, removeItemFromCart } = useCart();
  const navigate = useNavigate();
  const formattedTotalAmount = `$${totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0;
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={() => removeItemFromCart(item.id)}
          onAdd={() => addItemToCart(item)}
        />
      ))}
    </ul>
  );

  const handleNavigateBack = () => {
    navigate(-1);
  };

  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{formattedTotalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={handleNavigateBack}>
          Back
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </div>
  );
}
