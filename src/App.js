import { useState } from "react";

import CartProvider from "./store/CartProvider";
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
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Tech />
      </main>
    </CartProvider>
  );
}

export default App;
