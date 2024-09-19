import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useListOfRes from "../utils/useListOfRes.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [listOfRestaraunt,filteredRestaurants,setFilteredRestaurants]=useListOfRes();

  const onlineStatus = useOnlineStatus();
  if(onlineStatus===false) return(<h1>Please check your internet connection!!</h1>)
  return listOfRestaraunt.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="btn">
        <input
          className="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filtered = listOfRestaraunt.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filtered);
          }}
        >
          🔍Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = listOfRestaraunt.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setFilteredRestaurants(filtered);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => {
         return (
           <Link
             key={restaurant.info.id}
             to={"/restaurants/" + restaurant.info.id}
           >
             <RestaurantCard {...restaurant.info} />
           </Link>
         );
        })}
      </div>
    </div>
  );
};

export default Body;
