import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import TechImage from "../../assets/tech.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>VOLIFY</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={TechImage} alt="tech!" />
      </div>
    </Fragment>
  );
};

export default Header;
