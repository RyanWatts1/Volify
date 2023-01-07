import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Mac Pro Vertical Stand",
    description: "Ultra Sleek Space Grey Stand",
    price: 99.95,
  },
  {
    id: "m2",
    name: "Desk Mat",
    description: "A wool desk mat!",
    price: 49.5,
  },
  {
    id: "m3",
    name: "MagSafe wooden Charger",
    description: "wooden ultra chrager",
    price: 45.99,
  },
  {
    id: "m4",
    name: "M3 Charger",
    description: "Matrix speed charging cabel",
    price: 88.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
