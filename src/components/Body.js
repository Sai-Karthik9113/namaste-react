import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchBoxText, setSearchBoxText] = useState("");

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Looks like you are offline!</h1>;

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const data = await fetch(`${API_URL}`);
      const res = await data.json();

      const availableRestaurants = res?.data?.cards.filter(
        (item) =>
          item?.card?.card?.gridElements?.infoWithStyle?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle"
      );

      const mergerdRestaurants = availableRestaurants.flatMap(
        (item) =>
          item?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
      );

      const uniqueRestaurants = Array.from(
        new Map(
          mergerdRestaurants.map((item) => [item?.info?.id, item])
        ).values()
      );

      setListOfRestaurants(uniqueRestaurants);
      setFilteredRestaurants(uniqueRestaurants);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-white dark:bg-gray-900 mt-20 p-6 transition-colors duration-300">
      <div className="flex items-center justify-between gap-4 p-4 bg-gray-50 dark:bg-gray-800 shadow-md rounded-lg transition-colors duration-300">
        <div className="flex gap-4">
          <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md overflow-hidden transition-colors duration-300">
            <input
              type="text"
              className="h-12 px-4 bg-transparent text-gray-800 dark:text-gray-200 outline-none transition-colors duration-300"
              placeholder="Search restaurants..."
              value={searchBoxText}
              onChange={(e) => setSearchBoxText(e.target.value)}
            />
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 h-12 rounded-e-md cursor-pointer transition-all"
              onClick={() => {
                const searchContent = listOfRestaurants.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchBoxText.toLowerCase())
                );
                setFilteredRestaurants(searchContent);
              }}
            >
              Search
            </button>
          </div>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-5 h-12 rounded-md cursor-pointer transition-all"
            onClick={() => {
              const filteredContent = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setFilteredRestaurants(filteredContent);
            }}
          >
            ⭐ Top Rated
          </button>
        </div>
        {listOfRestaurants.length !== filteredRestaurants.length && (
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-5 h-12 rounded-md cursor-pointer transition-all"
            onClick={() => setFilteredRestaurants(listOfRestaurants)}
          >
            Clear
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
          >
            {restaurant?.info?.aggregatedDiscountInfoV3 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
