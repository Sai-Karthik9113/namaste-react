import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";

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

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            value={searchBoxText}
            onChange={(e) => setSearchBoxText(e.target.value)}
          />
          <button
            className="search-btn"
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
          className="filter-btn"
          onClick={() => {
            const filteredContent = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setFilteredRestauarants(filteredContent);
          }}
        >
          Top Rated Restaurants
        </button>
        {listOfRestaurants.length !== filteredRestaurants.length && (
          <button onClick={() => setFilteredRestauarants(listOfRestaurants)}>
            X
          </button>
        )}
      </div>
      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
