import React, { useContext, useState } from "react";
import propTypes from "prop-types";
import { BsFillCartPlusFill } from "react-icons/bs";
import formatCurrency from "../utils/formatCurrency";
import AppContext from "../Context/AppContext";

const ProductCard = ({ data }) => {
  const { title, thumbnail, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const [isHovered, setIsHovered] = useState(false);

  const handleAddCart = () => {
    setCartItems([...cartItems, data]);
  };

  return (
    <section
      className={`w-full max-w-[300px] h-full max-h-full bg-white flex flex-col cursor-pointer m-auto relative rounded ${
        isHovered ? "hover:shadow-card" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="w-full"
        src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt={title}
      />

      <div className="p-5 border-t border-solid border-[#ddd]">
        <h2 className="text-[30px] font-normal block mb-[10px]">
          {formatCurrency(price)}
        </h2>
        <h2 className="text-[15px] leading-normal font-medium text-[#4d564d]">
          {title}
        </h2>
      </div>

      <button
        type="button"
        className={`absolute top-0 right-0 w-[45px] h-[45px] rounded-full mx-[15px] my-[12px] justify-center items-center text-[1.5rem] bg-[#b8e1dd] ${
          isHovered ? "flex" : "hidden"
        }`}
        onClick={handleAddCart}
      >
        <BsFillCartPlusFill />
      </button>
    </section>
  );
};

export default ProductCard;

ProductCard.protoTypes = {
  data: propTypes.shape({}),
}.isRequired;
