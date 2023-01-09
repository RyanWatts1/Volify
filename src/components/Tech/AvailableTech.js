import Card from "../UI/Card";
import TechItem from "./TechItem/TechItem";
import classes from "./AvailableTech.module.css";

const DUMMY_TECH = [
  {
    id: "m1",
    name: "Mac Book Pro Vertical Stand",
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

const AvailableTech = () => {
  const techList = DUMMY_TECH.map((tech) => (
    <TechItem
      id={tech.id}
      key={tech.id}
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
