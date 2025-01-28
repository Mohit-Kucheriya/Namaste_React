import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [resMenu, setResMenu] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(RESTAURANT_MENU_URL + resId);
        const json = await data.json();
        setResMenu(json.data);
    };

    return resMenu;
};

export default useRestaurantMenu;
