import { CDN_URL } from "../utils/constants";
import { FaStar } from "react-icons/fa";

const DishCard = (props) => {
  const { dishData } = props;
  console.log(dishData);

  return (
    <div className="dish-container">
      <div className="dish-details">
        <h4>{dishData.name}</h4>
        <p className="price">₹{dishData.price / 100}</p>
        {dishData.ratings?.aggregatedRating?.rating && (
          <div className="rating">
            <FaStar />
            <p>
              {dishData.ratings.aggregatedRating.rating} (
              {dishData.ratings.aggregatedRating.ratingCountV2})
            </p>
          </div>
        )}
        <p>{dishData.description}</p>
      </div>
      <div className={dishData.imageId ? "dish-has-image" : "dish-no-image"}>
        {dishData.imageId ? (
          <>
            <img
              className="dish-image"
              alt="dish"
              src={`${CDN_URL}${dishData.imageId}`}
            />
            <button className="addFood">Add</button>
          </>
        ) : (
          <button className="addFood">Add</button>
        )}
      </div>
    </div>
  );
};

export default DishCard;
