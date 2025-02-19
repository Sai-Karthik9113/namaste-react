import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { resList } from "../utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const originalList = resList;

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() =>
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res.info.avgRating >= 4.5)
            )
          }
        >
          Top Rated Restaurants
        </button>
        {listOfRestaurants.length !== originalList.length && (
          <button onClick={() => setListOfRestaurants(originalList)}>X</button>
        )}
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
