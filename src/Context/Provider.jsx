import React, {useState } from "react";
import AppContext from './AppContext'

const Provider = ({children}) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const value = {
    products,
    setProducts,
    loading, 
    setLoading,
    cartItems, 
    setCartItems,
    isCartVisible, 
    setIsCartVisible,
  }


  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
   )
}

export default Provider
