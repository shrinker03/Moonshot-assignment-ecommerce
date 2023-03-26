import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-[100%] bg-slate-800 h-[4rem] text-slate-50 flex justify-between items-center p-[1rem]">
      <Link className="text-2xl" to='/'>Funky Shop</Link>
      <div className="flex gap-5">
        <Link to='cart' className="text-2xl">
          <AiOutlineShoppingCart />
        </Link>
        <div className="text-2xl">
          <FaUserAlt />
        </div>
      </div>
    </div>
  );
};

export default Header;
