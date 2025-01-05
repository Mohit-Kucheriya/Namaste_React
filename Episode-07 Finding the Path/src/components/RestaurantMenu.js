import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
    const [resMenu, setResMenu] = useState(null);
    // console.log(resMenu);

    const { resId } = useParams();
    // console.log(resId);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_MENU_URL + resId);

        const json = await data.json();

        setResMenu(json.data);
    };

    if (resMenu === null) return <div>Loading</div>;
    const { id, name, costForTwoMessage, cuisines } =
        resMenu?.cards[2]?.card?.card?.info;

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
