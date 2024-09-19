import { useEffect, useState } from "react"
import { RES_LIST } from "./constant";
const useListOfRes = () => {

  const [listOfRestaraunt, setListOfRestaraunt] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST);
    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaraunt(restaurants);
    setFilteredRestaurants(restaurants);
  };
  return [listOfRestaraunt,filteredRestaurants,setFilteredRestaurants];

}

export default useListOfRes