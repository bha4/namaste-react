import React, {useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer.js";
const Body = () => {
  const [listOfRestaraunt,setListOfRestaraunt] = useState([]);  

  useEffect(()=>{
    fetchData()
  },[])

const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9304278&lng=77.678404&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  const json = await data.json();
  setListOfRestaraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};
//conditional rendering 
  if (listOfRestaraunt.length===0) {
    return <Shimmer/>
  }

  return (
    <div className="body">
      <div className="btn">
        <button
          className="filter-btn"
          onClick={() => {
             const filtered= listOfRestaraunt.filter(
              (res) => res.info.avgRating >= 4.5
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
            <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
