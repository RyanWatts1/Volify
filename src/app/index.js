import { useState } from "react";

import Header from "./components/Layout/Header";
import Tech from "../tech";
import Cart from "../cart";
import { CartProvider } from "./contexts/cart-context";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      <BrowserRouter>
        <main>
          {cartIsShown && <Cart onClose={hideCartHandler} />}
          <Header onShowCart={showCartHandler} />
          <Routes>
            <Route path="/" element={<Tech />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
