import { useCart } from "../../contexts/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useNavigate } from "react-router-dom";

const HeaderCartButton = (props) => {
  const { items } = useCart();
  const navigate = useNavigate();

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const navigateToCart = () => {
    navigate("/cart");
  };

  return (
    <button className={classes.button} onClick={navigateToCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> {numberOfCartItems} </span>
    </button>
  );
};

export default HeaderCartButton;
