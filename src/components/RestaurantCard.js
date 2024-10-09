import React from "react";
import { CDN_IMAGES_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const {
  cloudinaryImageId,
  name,
  cuisines,
  locality,
  sla,
  costForTwo,
  avgRating,
} =props


  return (
    <div data-testid="ResCard" className=" h-[400px]  text-green-400 bg-green-200 rounded-lg shadow-lg overflow-hidden m-4 w-[300px] hover:shadow-xl hover:bg-green-500 hover:text-emerald-950 ">
      <img
        className="w-full h-48 object-cover"
        src={`${CDN_IMAGES_URL}${cloudinaryImageId}`}
        alt={name}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <h4 className="text-gray-600 text-sm mb-2">{cuisines.join(", ")}</h4>
        <h5 className="text-gray-500 text-sm">{locality}</h5>
        <div className="flex justify-between items-center mt-2">
          <h5
            className={`font-bold ${
              avgRating >= 4 ? "text-green-700" : "text-yellow-500"
            }`}
          >
            ⭐ {avgRating}
          </h5>
          <h5 className="text-gray-700">{sla.deliveryTime} min</h5>
        </div>
        <h5 className="text-gray-700 mt-2">{costForTwo}</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
