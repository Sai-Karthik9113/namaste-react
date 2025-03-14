import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import ShimmerDish from "./ShimmerDish";
import { MdStars } from "react-icons/md";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();
  const restInfo = useRestaurantMenu(resId);

  if (!restInfo) {
    return <ShimmerDish />;
  }

  const {
    name,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
  } = restInfo?.cards[2]?.card?.card?.info;

  const categories =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        item?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  return (
    <div className="flex justify-center items-center min-h-screen px-4 dark:bg-gray-800 transition-colors duration-300">
      <div className="w-full max-w-4xl mt-20 p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-orange-500 mb-4">{name}</h1>

        <div className="text-[1rem] bg-gray-50 dark:bg-gray-600 shadow-[10px_10px_20px_rgba(0,0,0,0.15),-10px_10px_20px_rgba(0,0,0,0.15),0px_10px_15px_rgba(0,0,0,0.25)] rounded-3xl p-5 mt-6 transition-colors duration-300">
          <p className="flex items-center space-x-1">
            <MdStars size="24px" className="text-green-500" />
            <span className="font-bold text-gray-900 dark:text-white transition-colors duration-300">
              {avgRatingString} ({totalRatingsString}) • {costForTwoMessage}
            </span>
          </p>
          <p className="mt-2">
            <span className="text-orange-500 dark:text-orange-400 font-bold transition-colors duration-300">
              {cuisines.join(", ")}
            </span>
          </p>

          <div className="flex flex-col justify-center mt-4">
            <div className="flex items-center rounded-[50%] bg-gray-400 dark:bg-gray-200 w-[8px] h-[8px] transition-colors duration-300">
              <span className="text-sm font-bold dark:text-gray-50 whitespace-nowrap pl-6 transition-colors duration-300">
                Outlet
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap pl-4 transition-colors duration-300">
                {areaName}
              </span>
            </div>
            <div className="border-l-[3px] border-gray-400 dark:border-gray-200 mx-[2.75px] h-8 transition-colors duration-300"></div>
            <div className="flex items-center rounded-[50%] bg-gray-400 dark:bg-gray-200  w-[8px] h-[8px] transition-colors duration-300">
              <span className="text-sm font-bold dark:text-gray-50 whitespace-nowrap pl-6 lowercase transition-colors duration-300">
                {sla.slaString}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {categories.map((item, index) => (
            <RestaurantCategory
              key={item?.card?.card?.categoryId}
              category={item?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
              restaurantName={name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
