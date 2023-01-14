import TechItemForm from "./TechItemForm";
import classes from "./TechItem.module.css";
import { useCart } from "../../../contexts/cart-context";

const TechItem = (props) => {
  const { addItemToCart } = useCart();

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    console.log("amount", amount, "props", props);
    addItemToCart({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.tech}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <TechItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default TechItem;
