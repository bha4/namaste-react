import React from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/Restautant_data";
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;