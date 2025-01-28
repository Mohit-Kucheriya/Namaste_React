import { RES_CARD_URL } from "../utils/constants";
const RestaurantCard = ({ ResData }) => {
    const { cloudinaryImageId, name, avgRating, cuisines, locality, costForTwo } =
        ResData?.info;

    return (
        <div className="restaurant-card w-[330px] h-[430px] rounded-lg p-4 font-Poppins transition-all duration-300  m-4 relative shadow-lg">
            <div className="restaurant-card-image w-full h-48 rounded-t-lg overflow-hidden relative">
                <img
                    className="w-full object-cover aspect-square 	"
                    src={RES_CARD_URL + cloudinaryImageId}
                    alt="restaurant-card-image"
                />
            </div>
            <div className="restaurant-card-title">
                <h3 className="text-2xl my-2 font-semibold">{name}</h3>
                <h4 className="text-md font-semibold mb-2 text-gray-700">
                    ${costForTwo}
                </h4>
                <p className="star-rating text-md text-gray-700 mb-1">
                    {avgRating} Star
                </p>
                <p className="text-sm text-gray-400 mb-1">{cuisines.join(", ")}</p>
                <p className="text-sm text-gray-400 mb-1">{locality}</p>
            </div>
        </div>
    );
};

export const withVegetarian = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-[#00d26a] text-sm font-medium tracking-wide z-10 text-white p-3 rounded-lg">
                    VEG
                </label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;
