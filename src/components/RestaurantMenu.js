import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_URL } from "../utils/constant";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const { uniqueId } = useParams();
 
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(RES_URL + uniqueId);
    const json = await data.json();

    console.log(json);

    setRestaurantInfo(json?.data);
  };
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
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(",")}</h2>
      <h3>
        {avgRating} - {totalRatingsString} . {costForTwoMessage}
      </h3>
      <h3>{sla.deliveryTime} Minutes</h3>
      <hr></hr>
      <div>
        <h2>MENU</h2>
        {itemCards ? (
          itemCards.map((items) => (
            <div key={items.card.info.id}>
              <h3>{items.card.info.name}</h3>
              <p>{items.card.info.description}</p>
              <p>💵{items.card.info.price / 100}</p>
              <hr />
            </div>
          ))
        ) : (
          <p>No items available in the menu.</p>
        )}
      </div>
    </div>
  );
};
export default RestaurantMenu;