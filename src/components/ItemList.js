import { useDispatch } from "react-redux";
import { CDN_IMAGES_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ list }) => {
  const dispatch =useDispatch();
const addingToTheStore =(item)=>{
  dispatch(addItem(item));
  
} 

  return (
    <div className="text-lg">
      {list.map((item) => (
        <div
          key={item.card.info.id}
          className="hover:bg-green-500 border-b-4 border-lime-100 flex items-start p-4"
        >
          <div className="w-9/12">
            <span className="font-semibold ">{item.card.info.name}</span>

            <span className="font-medium text-gray-800 ">
              -₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="py-2 text-sm text-gray-600">
              {item.card.info.description}
            </p>
          </div>

          <div className="w-3/12 flex justify-end">
            <img
              src={CDN_IMAGES_URL + item.card.info.imageId}
              className="w-28 h-24 object-cover rounded-lg"
              alt={item.card.info.name}
            />
            <button
              className="bg-black rounded-md text-white absolute my-[80px] "
              onClick={() => {
                addingToTheStore(item);
              }}
             >
              +Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
