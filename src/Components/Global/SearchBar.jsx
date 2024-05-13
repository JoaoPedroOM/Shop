import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <form className="flex bg-white w-full max-w-[500px] justify-between shadow rounded">
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produto"
        required
        className="p-[13px] grow border-none !outline-none text-[0.8rem] font-medium rounded"
        onChange={({ target }) => setSearchValue(target.value)}
      />

      <button
        type="submit"
        className="text-[1rem] flex justify-center items-center text-[#333] pl-[13px] pr-[13px] border-l border-solid border-gray-300 hover:bg-[#b8e1dd] rounded"
      >
        <BsSearch/>
      </button>
    </form>
  );
};

export default SearchBar;
