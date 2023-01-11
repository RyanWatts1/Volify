import TechItemForm from "./TechItemForm";
import classes from "./TechItem.module.css";

const TechItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.tech}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <TechItemForm id={props.id} />
      </div>
    </li>
  );
};

export default TechItem;