import { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import Tech from "./components/Tech/Tech";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart />}
      <Header />
      <main>
        <Tech />
      </main>
    </Fragment>
  );
}

export default App;
