import React from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/Restautant_data";
import { useState } from "react";
const Body = () => {
  const [listOfRestaraunt,setListOfRestaraunt] = useState(restaurantList);  
  return (
    <div className="body">
      <div className="btn">
        <button
          className="filter-btn"
          onClick={() => {
             const filtered= listOfRestaraunt.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaraunt(filtered)
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaraunt.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
