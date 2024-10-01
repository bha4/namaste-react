import React, {useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const isOnline = useOnlineStatus();
  const userDetails = useContext(UserContext);
  const cart = useSelector((store)=>store.cart.items)
  return (
    <div className="flex justify-between bg-green-200 shadow-lg m-2">
      <div className="hover:shadow-lg ">
        <Link to="/">
          <img className="w-40" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-5 text-slate-800 ">
            Online Status : {isOnline ? "🟢" : "🔴"}
          </li>
          <li className="px-5  hover:bg-green-500 hover:shadow-lg hover:text-emerald-950 hover:rounded-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5  hover:bg-green-500 hover:shadow-lg  hover:text-emerald-950 hover:rounded-xl">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-5  hover:bg-green-500 hover:shadow-lg  hover:text-emerald-950 hover:rounded-xl">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-5  hover:bg-green-500 hover:shadow-lg  hover:text-emerald-950 hover:rounded-xl">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-5  hover:bg-green-500 hover:shadow-lg  hover:text-emerald-950 hover:rounded-xl">
            <Link to="/cart">Cart ({cart.length} items )</Link>
          </li>
          <button
            className="px-5  hover:bg-green-500 hover:shadow-lg  hover:text-emerald-950 hover:rounded-xl"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-10  hover:bg-green-500 hover:shadow-lg  hover:text-emerald-950 hover:rounded-xl">
            {userDetails.loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
 