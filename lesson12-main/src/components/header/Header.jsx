import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-300">
      <header className="max-w-[1700px] px-4 m-auto">
        <div className="flex justify-between items-center">
          <h1>Logo</h1>
          <ul className="flex justify-between gap-32 py-2">
            <li>
              <NavLink to={"/"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/products"}>Products</NavLink>
            </li>
            <li>
              <NavLink to={"/users"}>Users</NavLink>
            </li>
            <li>
              <NavLink to={"/orders"}>Orders</NavLink>
            </li>
            <li>
              <NavLink to={"/comments"}>Comments</NavLink>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
