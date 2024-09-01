import React from "react";
import { CDN_IMAGES_URL } from "../utils/constant";
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="card">
      <img
        src={`${CDN_IMAGES_URL}${cloudinaryImageId}`}/>
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{area}</h5>
      <h6>{avgRating}</h6>
      <h6>{lastMileTravelString}</h6>
      <h6>{costForTwoString}</h6>
    </div>
  );
};
export default RestaurantCard;