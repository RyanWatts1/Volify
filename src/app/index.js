import { useState } from "react";

import Header from "./components/Layout/Header";
import Tech from "./components/Tech/Tech";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./contexts/cart-context";

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
