import { CDN_URL } from "../utils/constants";
import { MdStars } from "react-icons/md";

const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="h-full flex flex-col bg-white dark:bg-gray-800 transition-colors duration-300 shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105">
      <img
        className="w-full h-48 object-cover"
        alt="food"
        src={`${CDN_URL}${resData.info.cloudinaryImageId}`}
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white transition-colors duration-300">
          {resData.info.name}
        </h3>
        <div className="flex items-center gap-1 mt-1">
          <MdStars className="text-green-500" size="20px" />
          <span className="text-gray-800 dark:text-gray-300 font-semibold transition-colors duration-300">
            {resData.info.avgRating}
          </span>
          <span className="text-gray-500 dark:text-gray-400 transition-colors duration-300">
            •
          </span>
          <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            {resData.info.sla.slaString}
          </span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 transition-colors duration-300">
          {resData.info.cuisines.join(", ")}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
          {resData.info.locality}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
