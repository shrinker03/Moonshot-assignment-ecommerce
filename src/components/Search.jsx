import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ initialProducts, products, setProducts }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);

    const filteredProducts = products.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );

    if (e.target.value && filteredProducts.length > 0) {
      setProducts(filteredProducts);
    } else {
      setProducts(initialProducts);
    }
  };

  return (
    <div className="flex">
     
      <input
        value={searchInput}
        onChange={handleInputChange}
        placeholder="Search Product..."
        className="w-[20rem] border border-slate-700 p-3"
      />
       <div className="flex justify-center items-center mx-2">
        <FaSearch className="text-2xl" />
      </div>
    </div>
  );
};

export default Search;
