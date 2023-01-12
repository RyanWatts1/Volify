import Card from "../UI/Card";
import TechItem from "./TechItem/TechItem";
import classes from "./AvailableTech.module.css";
import { toBeChecked } from "@testing-library/jest-dom/dist/matchers";

const DUMMY_TECH = [
  {
    id: "m1",
    name: "Mac Book Pro Vertical Stand",
    description: "Ultra Sleek Space Grey Stand",
    price: 99.95,
  },
  {
    id: "m2",
    name: "Wool Desk Mat",
    description: "Authentic wool dark charcoal mat ",
    price: 49.5,
  },
  {
    id: "m3",
    name: "MagSafe wooden Charger",
    description: "Dark Oak 20W fast chrager",
    price: 45.99,
  },
  {
    id: "m4",
    name: "M3 Neo Charger",
    description: "Matrix speed charging cabel",
    price: 88.99,
  },
];

const AvailableTech = () => {
  const techList = DUMMY_TECH.map((tech) => (
    <TechItem
      key={tech.id}
      id={toBeChecked.id}
      name={tech.name}
      description={tech.description}
      price={tech.price}
    />
  ));

  return (
    <section className={classes.tech}>
      <Card>
        <ul>{techList}</ul>
      </Card>
    </section>
  );
};

export default AvailableTech;
