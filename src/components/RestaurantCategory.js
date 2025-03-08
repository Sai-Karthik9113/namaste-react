import DishCard from "./DishCard";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const RestaurantCategory = ({ category, showItems, setShowIndex }) => {
  const totalDish = category?.itemCards?.length || category?.categories?.length;

  const itemCards =
    category?.categories?.flatMap((category) => category.itemCards) ||
    category?.itemCards ||
    [];

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div
      className="my-10 pb-10 border-b-15 border-gray-200 dark:border-gray-600 transition-colors duration-300"
      onClick={handleClick}
    >
      <div className="flex justify-between items-center cursor-pointer font-black dark:text-white transition-colors duration-300">
        <p className="text-xl">
          {category?.title} ({totalDish})
        </p>
        {!showItems ? <BiChevronDown size={30} /> : <BiChevronUp size={30} />}
      </div>
      {showItems && (
        <div>
          {itemCards.map((item) => (
            <DishCard key={item?.card?.info?.id} dishData={item?.card?.info} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
