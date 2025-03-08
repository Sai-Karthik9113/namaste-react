import { CDN_URL } from "../utils/constants";
import { FaStar } from "react-icons/fa";

const DishCard = (props) => {
  const { dishData } = props;

  return (
    <div className="flex justify-between items-center py-10 border-b border-gray-300 dark:border-gray-600 transition-colors duration-300">
      <div className="w-2/3 space-y-1">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
          {dishData.name}
        </h4>
        <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
          ₹{dishData.price / 100}
        </p>

        {dishData.ratings?.aggregatedRating?.rating && (
          <div className="flex items-center gap-1 text-green-600 dark:text-green-400 text-sm transition-colors duration-300">
            <FaStar />
            <p className="font-semibold">
              {dishData.ratings.aggregatedRating.rating} (
              {dishData.ratings.aggregatedRating.ratingCountV2})
            </p>
          </div>
        )}

        <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
          {dishData.description}
        </p>
      </div>

      <div className="w-1/4 relative">
        {dishData.imageId && (
          <img
            className="w-full h-40 object-cover rounded-lg"
            alt="dish"
            src={`${CDN_URL}${dishData.imageId}`}
          />
        )}
        <button className="absolute uppercase bottom-[-20px] left-1/2 transform -translate-x-1/2 text-white bg-orange-500 hover:bg-orange-600 px-15 py-2 rounded-md text-lg font-semibold shadow-lg cursor-pointer">
          Add
        </button>
      </div>
    </div>
  );
};

export default DishCard;
