import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { RES_LIST } from "../utils/constant.js";
const Body = () => {
  const [listOfRestaraunt, setListOfRestaraunt] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST);
    const json = await data.json();
    const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaraunt(restaurants);
    setFilteredRestaurants(restaurants);
  };

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
