import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
    console.log(data);
    const [show,setShow]=useState(false)
    const handleClick = () => {
       show?setShow(false):setShow(true)
    };
  return (
      <div className="w-6/12 mx-auto my-5 cursor-pointer bg-green-100 shadow-xl p-2 hover:bg-green-200">
        <div className="flex justify-between" onClick={()=>{handleClick()}}>        
          <span className="text-lg font-semibold m-5 ">
            {data.title}({data?.itemCards?.length})
          </span>
          <span> ▼ </span>
        </div>
        {show && <ItemList list={data?.itemCards} />}
      </div>
   
  );
};

export default RestaurantCategory;
