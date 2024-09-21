import React, {useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const isOnline = useOnlineStatus();
  return (
    <div className="flex justify-between bg-green-300 shadow-lg m-2">
      <div className="hover:shadow-lg ">
        <Link to="/">
          <img className="w-40" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-10 text-slate-800 ">
            Online Status : {isOnline ? "🟢" : "🔴"}
          </li>
          <li className="px-10  hover:bg-green-500 hover:shadow-lg hover:text-emerald-950 hover:rounded-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="px-10  hover:bg-green-500 hover:shadow-lg  hover:text-emerald-950 hover:rounded-xl">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-10  hover:bg-green-500 hover:shadow-lg  hover:text-emerald-950 hover:rounded-xl">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-10  hover:bg-green-500 hover:shadow-lg  hover:text-emerald-950 hover:rounded-xl">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-10  hover:bg-green-500 hover:shadow-lg  hover:text-emerald-950 hover:rounded-xl">
            Cart
          </li>
          <button
            className="px-10  hover:bg-green-500 hover:shadow-lg  hover:text-emerald-950 hover:rounded-xl"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
