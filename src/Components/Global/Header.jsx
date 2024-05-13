import React from "react";
import SearchBar from "./SearchBar";
import CartButton from "../CartButton";

const Header = () => {
  return (
    <header className="bg-[#3a9188] fixed w-full z-10">
      <div className="container flex justify-between items-center p-5">
        <SearchBar/>
        <CartButton/>
      </div>
    </header>
  );
};

export default Header;
