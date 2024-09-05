import React from "react";
import { CDN_IMAGES_URL } from "../utils/constant";
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  locality,
  sla,
  costForTwo,
  avgRating,
}) => {
  return (
    <div className="card">
      <img src={`${CDN_IMAGES_URL}${cloudinaryImageId}`} />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{locality}</h5>
      <h5>{avgRating}</h5>
      <h5>{sla.deliveryTime} Minutes</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};
export default RestaurantCard;