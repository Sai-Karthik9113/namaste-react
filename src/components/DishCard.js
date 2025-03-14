import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { FaStar } from "react-icons/fa";
import { addItem, removeItem } from "../redux_store/cartSlice";

const DishCard = (props) => {
  const { dishData } = props;
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const dishInfo = useSelector((state) => state.cart.items);
  const existingDish = dishInfo.find((item) => item.name === dishData.name);
  const quantity = existingDish ? existingDish.quantity : 0;

  return (
    <div className="flex justify-between items-center py-10 border-b border-gray-300 dark:border-gray-600 transition-colors duration-300">
      <div className="w-2/3 space-y-1">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
          {dishData.name}
        </h4>
        <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
          ₹{(dishData?.price || dishData?.defaultPrice) / 100}
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
        {quantity === 0 ? (
          <button
            className="absolute uppercase bottom-[-20px] left-1/2 transform -translate-x-1/2 text-white bg-orange-500 hover:bg-orange-600 px-15 py-2 rounded-md text-lg font-semibold shadow-lg cursor-pointer"
            onClick={() => handleAddItem(dishData)}
          >
            Add
          </button>
        ) : (
          <div className="absolute flex uppercase bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-orange-500 text-white font-semibold rounded-md shadow-lg">
            <button
              className="rounded-r-md hover:bg-orange-600 rounded-l-md px-5 py-2 text-lg font-black cursor-pointer"
              onClick={() => handleRemoveItem(dishData)}
            >
              -
            </button>
            <span className="px-5 py-2 text-xl">{quantity}</span>
            <button
              className="rounded-r-md hover:bg-orange-600 px-5 py-2 text-lg font-black cursor-pointer"
              onClick={() => handleAddItem(dishData)}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DishCard;
