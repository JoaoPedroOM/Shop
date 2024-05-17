import React, { useContext } from "react";
import { BsFillCartDashFill } from "react-icons/bs";
import formatCurrency from "../utils/formatCurrency";
import AppContext from "../Context/AppContext";

const CartItem = ({data}) => {

  const {cartItems, setCartItems} = useContext(AppContext)
  const {thumbnail, title, price, id}  = data

  const handleRemoveItem = () => {
    const updateItems = cartItems.filter((item) => item.id != id)
    setCartItems(updateItems)
  }
    
  return (
    <section className="flex items-start border-b border-solid border-gray-300 pb-5 mb-5 last:border-b-0">
      <img className="w-[70px]" src={thumbnail} alt="Imagem do produto aqui" />

      <div className="pr-[35px] pl-[10px] relative">
        <h3 className="text-[0.85rem] font-medium text-[#a9a9a9] mb-2">{title}</h3>
        <h3 className="text-[25px] font-medium"> {formatCurrency(price)}</h3>
        <button className="absolute top-0 right-0 text-red-700 text-[1.2rem]" onClick={handleRemoveItem}>
          <BsFillCartDashFill />
        </button>
      </div>
    </section>
  );
};

export default CartItem;
