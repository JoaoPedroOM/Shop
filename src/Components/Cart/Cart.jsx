import React, { useContext } from "react";
import CartItem from "../CartItem";
import AppContext from "../../Context/AppContext";
import formatCurrency from "../../utils/formatCurrency";

const Cart = () => {
  const { cartItems, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc
  }, 0);

  return (
    <section className={`w-full max-w-[330px] bg-white h-screen fixed top-0 right-0 pt-[100px] pb-[20px] px-[20px] flex flex-col justify-between transform ${isCartVisible ? "translate-x-0" : "translate-x-110"} transition-all duration-[400ms] ease-in-out`}>
      <div className="cart items overflow-auto grow">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </div>
      <div className="text-[1.2rem] font-medium pt-9 pb-4 border-t border-solid border-gray-300">
        {totalPrice ? formatCurrency(totalPrice) : "Resumo do carrinho"}
      </div>
    </section>
  );
};

export default Cart;
