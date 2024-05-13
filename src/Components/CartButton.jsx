import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartButton = () => {
  return (
    <button className="text-[2rem] flex p-1 relative justify-center items-center text-[#062925] transform transition-transform hover:scale-125 ease-in duration-300">
      <AiOutlineShoppingCart />
      <span className="bg-[#062925] w-[15px] h-[15px] absolute text-white top-0 left-0 text-[11px] font-semibold rounded-full flex justify-center items-center">1</span>
    </button>
  );
};

export default CartButton;
