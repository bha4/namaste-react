import { RES_URL } from "./constant";
import { useEffect, useState } from "react";
const useRestaurantMenu = (uniqueId)=>{
    const [restaurantInfo,setRestaurantInfo] = useState(null);
    useEffect(() => {
      fetchMenu();
    }, []);
        const fetchMenu = async () => {
        const data = await fetch(RES_URL + uniqueId);
        const json = await data.json();
        setRestaurantInfo(json.data);
        };
    return restaurantInfo;
}

export default useRestaurantMenu;