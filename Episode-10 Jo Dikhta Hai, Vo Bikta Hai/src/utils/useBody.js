import { useEffect, useState } from "react";
import { BODY_DATA_URL } from "../utils/constants";

const useBody = () => {

    // Fetch data from the API endpoint and store it in the state
    const [restsurantList, setRestaurantList] = useState([]);

    const [filterRestaurant, setFilterRestaurant] = useState("");

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = fetch(BODY_DATA_URL);
        const json = await data.json();

        setRestaurantList(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        setFilterRestaurant(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    }
    return {restsurantList, filterRestaurant}

}

export default useBody