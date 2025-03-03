import { CDN_URL } from "../utils/constants";
import { MdStars } from "react-icons/md";

const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card">
      <img
        className="food-image"
        alt="food"
        src={`${CDN_URL}${resData.info.cloudinaryImageId}`}
      />
      <div className="food-details">
        <h3>{resData.info.name}</h3>
        <div className="rating-delivery-container">
          <MdStars size="24px" color="green" />
          <h3>{resData.info.avgRating}</h3>
          <h3>•</h3>
          <h3>{resData.info.sla.slaString}</h3>
        </div>
        <p>{resData.info.cuisines.join(", ")}</p>
        <p>{resData.info.locality}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
