import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import AppContext from "../Context/AppContext";

const CartButton = () => {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button type="button" className="text-[2rem] flex p-1 relative justify-center items-center text-[#062925] transform transition-transform hover:scale-125 ease-in duration-300" onClick={() => setIsCartVisible(!isCartVisible)}>
      <AiOutlineShoppingCart />
      {cartItems.length > 0 && (
        <span className="bg-[#062925] w-[15px] h-[15px] absolute text-white top-0 left-0 text-[11px] font-semibold rounded-full flex justify-center items-center">
          {cartItems.length}
        </span>
      )}
    </button>
  );
};

export default CartButton;
