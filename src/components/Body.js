import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaraunt, setListOfRestaraunt] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9304278&lng=77.678404&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
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
