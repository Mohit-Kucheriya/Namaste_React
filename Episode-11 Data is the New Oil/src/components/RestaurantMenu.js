import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(null)

    const { resId } = useParams();

    const resMenu = useRestaurantMenu(resId);

    if (resMenu === null) return <div>Loading</div>;
    // to get the restaurant name, costForTwoMessage, cuisines and itemCards
    const { id, name } = resMenu?.cards[2]?.card?.card?.info;

    // to get the categories of all MenuItems
    const categories =
        resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (item) =>
                item?.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
        );

    return (
        <div className="mt-4 text-center font-Poppins">
            <h2 className="text-4xl font-semibold">Restaurant Menu</h2>
            <h3 className="my-2 text-2xl font-semibold">{name}</h3>
            {categories.map((category, index) => (
                <RestaurantCategory
                    data={category?.card?.card}
                    key={category?.card?.card.title}
                    showItem={index === showIndex ? true : false}

                    // setShowIndex(index) is to set the state of showIndex
                    setShowIndex={()=>setShowIndex(index)}
                    index= {index}
                />
            ))}
        </div>
    );
};
export default RestaurantMenu;
