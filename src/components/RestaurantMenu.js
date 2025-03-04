import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import DishCard from "./DishCard";
import ShimmerDish from "./ShimmerDish";
import { MdStars } from "react-icons/md";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restInfo = useRestaurantMenu(resId);

  if (restInfo === null) {
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
  } = restInfo.cards[2].card.card.info;

  const itemCards =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories?.flatMap(
      (category) => category.itemCards
    ) ||
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards ||
    [];
  return (
    <div className="menu-container">
      <h1>{name}</h1>
      <div className="menu-details">
        <div className="restaurant-details">
          <MdStars size="24px" color="green" />
          <p className="price">
            <strong>
              {avgRatingString} ({totalRatingsString}) • {costForTwoMessage}
            </strong>
          </p>
        </div>
        <div className="cuisines">
          <strong>{cuisines.join(", ")}</strong>
        </div>
        <div>
          {areaName} • {sla.slaString}
        </div>
      </div>
      <div>
        {itemCards.map((dish) => (
          <DishCard key={dish.card.info.id} dishData={dish.card.info} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
