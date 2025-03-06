import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestauarants] = useState([]);
  const [searchBoxText, setSearchBoxText] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const data = await fetch(`${API_URL}`);
      const res = await data.json();
      setListOfRestaurants(
        res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
      setFilteredRestauarants(
        res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Looks like you are offline!</h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-white dark:bg-gray-900 mt-30 p-4">
      <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 shadow-md rounded-lg">
        <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md">
          <input
            type="text"
            className="h-10 px-3 bg-transparent text-gray-800 dark:text-gray-200 outline-none"
            placeholder="Search restaurants..."
            value={searchBoxText}
            onChange={(e) => setSearchBoxText(e.target.value)}
          />
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 h-10 rounded-e-md cursor-pointer transition-all"
            onClick={() => {
              const searchContent = listOfRestaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchBoxText.toLowerCase())
              );
              setFilteredRestauarants(searchContent);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 h-10 rounded-md transition-all"
          onClick={() => {
            const filteredContent = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setFilteredRestauarants(filteredContent);
          }}
        >
          ⭐ Top Rated
        </button>
        {listOfRestaurants.length !== filteredRestaurants.length && (
          <button
            className="bg-red-500 hover:bg-red-600 text-white w-10 h-10 rounded-md transition-all"
            onClick={() => setFilteredRestauarants(listOfRestaurants)}
          >
            X
          </button>
        )}
      </div>
      <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-6">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
