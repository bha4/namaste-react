import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { uniqueId } = useParams();
  const restaurantInfo = useRestaurantMenu(uniqueId);
  if (restaurantInfo === null) return <Shimmer />;
  const {
    name,
    cuisines,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    sla,
  } = restaurantInfo?.cards?.[2]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
      ?.card?.card;

  const category =
    restaurantInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  
  return (
    <div className="text-center ">
      <div className="bg-green-200">
        {" "}
        <h1 className="font-extrabold my-6 text-2xl ">{name}</h1>
        <h2 className=" font-semibold text-lg my-3">{cuisines.join(",")}</h2>
        <h3 className="text-base my-1">
          {avgRating} - {totalRatingsString} . {costForTwoMessage}
        </h3>
        <h3>{sla.deliveryTime} Minutes</h3>
        <hr></hr>
      </div>

      {category.map((c) => (
        <div key={c?.card?.card?.itemCards?.card?.info?.id}>
          <RestaurantCategory data={c?.card?.card} />
        </div>
      ))}
    </div>
  );
};
export default RestaurantMenu;
