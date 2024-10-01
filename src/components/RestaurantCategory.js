import ItemList from "./ItemList";

const RestaurantCategory = ({ data, isExpanded, onToggle }) => {
  return (
    <div className="w-6/12 mx-auto my-5 cursor-pointer bg-green-100 shadow-xl p-2 hover:bg-green-200">
      <div className="flex justify-between" onClick={onToggle}>
        <span className="text-lg font-semibold m-5 ">
          {data.title}({data?.itemCards?.length})
        </span>
        <span>{isExpanded ? "▲" : "▼"}</span>
      </div>
      {isExpanded && <ItemList list={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
