import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();
    // console.log(resId);

    const resMenu = useRestaurantMenu(resId);
    
    if (resMenu === null) return <div>Loading</div>;
    // to get the restaurant name, costForTwoMessage, cuisines and itemCards
    const { id, name, costForTwoMessage, cuisines } =
        resMenu?.cards[2]?.card?.card?.info;

    // to get the itemCards i.e. MenuItem
    const { itemCards } =
        resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card;

    return (
        <div>
            <h2>Restaurant Menu</h2>
            <h3>{name}</h3>
            <h4>Cuisines: {cuisines.join(", ")}</h4>
            <ul>
                <li>{costForTwoMessage}</li>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name}</li>
                ))}
            </ul>
        </div>
    );
};
export default RestaurantMenu;
