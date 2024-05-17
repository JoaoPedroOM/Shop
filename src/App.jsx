import React from "react";
import Header from "./Components/Global/Header";
import Products from "./Components/Products";
import Provider from "./Context/Provider";
import Cart from "./Components/Cart/Cart";

const App = () => {
  return (
    <Provider>
      <Header />
      <Products />
      <Cart/>
    </Provider>
  );
};

export default App;
