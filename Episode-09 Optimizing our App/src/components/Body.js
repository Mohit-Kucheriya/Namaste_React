import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { BODY_DATA_URL } from "../utils/constants";
import useBody from "../utils/useBody";

const Body = () => {
    // originalList for search or filters.
    const [restaurantList, setRestaurantList] = useState([]);

    // filter restaurant list based on search text or top rated
    const [filterRestaurant, setFilterRestaurant] = useState([]);

    // search text
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(BODY_DATA_URL);
        const json = await data.json();

        // This is the original list of restaurants which i.e. restaurantList is always the original source of truth.
        setRestaurantList(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        // filterRestaurant is dynamically updated to reflect the current view.
        setFilterRestaurant(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    };


    if (!useOnlineStatus()) return <h2>You're offline. Please connect to the internet to view the app.</h2>

    return restaurantList.length === 0 ? (
        <div>Loading...</div>
    ) : (
        <div className="body">
            <div className="search-container">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search for restaurants and food"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />

                    {/* Search icon */}
                    <i
                        onClick={() => {
                            setFilterRestaurant(
                                restaurantList.filter((res) =>
                                    res.info.name
                                        .toLowerCase()
                                        .includes(searchText.toLowerCase())
                                )
                            );
                            setSearchText("");
                        }}
                        className="ri-search-line"
                    ></i>
                </div>

                {/* Top Rated Restaurants button */}
                <button
                    onClick={() => {
                        const topRestaurants = restaurantList.filter(
                            (res) => res.info.avgRating > 4.5
                        );
                        setFilterRestaurant(topRestaurants);
                    }}
                >
                    Top Restaurants
                </button>

                {/* Reset button */}
                <button
                    onClick={() => {
                        setFilterRestaurant(restaurantList);
                        setSearchText("");
                    }}
                >
                    Reset
                </button>
            </div>

            <div className="restaurant-container">
                {filterRestaurant.map((res, i) => (
                    // Passing the restaurant data to the RestaurantCard component
                    <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
                        <RestaurantCard ResData={res} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
