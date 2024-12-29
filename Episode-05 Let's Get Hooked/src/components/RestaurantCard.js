import { RES_CARD_URL } from "../utils/constants"
const RestaurantCard = ({ ResData }) => {
    // console.log(ResData);
    const { cloudinaryImageId, name, avgRating, cuisines, locality } = ResData?.info;


    return (
        <div className="restaurant-card">
            <div className="restaurant-card-image">
                <img
                    src={RES_CARD_URL + cloudinaryImageId}
                    alt="restaurant-card-image"
                />
            </div>
            <div className="restaurant-card-title">
                <h3>{name}</h3>
                <p className="star-rating">{avgRating} Star</p>
                <p>{cuisines.join(", ")}</p>
                <p>{locality}</p>
            </div>
        </div>
    );
};

export default RestaurantCard;