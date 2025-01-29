import RestaurantCard, { withVegetarian } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { BODY_DATA_URL } from "../utils/constants";
import useBody from "../utils/useBody";
import UserContext from "../utils/UserContext";

const Body = () => {
    // originalList for search or filters.
    const [restaurantList, setRestaurantList] = useState([]);
    console.log(restaurantList);

    // filter restaurant list based on search text or top rated
    const [filterRestaurant, setFilterRestaurant] = useState([]);

    // search text
    const [searchText, setSearchText] = useState("");

    // vegetarian restaurants
    const VegRestaurants = withVegetarian(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(BODY_DATA_URL);
        const json = await data.json();

        // This is the original list of restaurants which i.e. restaurantList is always the original source of truth.
        setRestaurantList(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants,
        );

        // filterRestaurant is dynamically updated to reflect the current view.
        setFilterRestaurant(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants,
        );
    };

    if (!useOnlineStatus())
        return (
            <h2>You're offline. Please connect to the internet to view the app.</h2>
        );

    const { loggedInUser, setUserName } = useContext(UserContext);

    return restaurantList.length === 0 ? (
        <div>Loading...</div>
    ) : (
        <div className="mt-8 flex flex-col items-center px-8 font-Poppins">
            <div className="flex w-full items-center justify-center space-x-8">
                <div className="flex w-[500px] items-center justify-between rounded-md bg-gray-200 px-4 py-3 text-xl text-black">
                    <input
                        className="w-full border-none bg-gray-200 font-medium text-black outline-none"
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
                                        .includes(searchText.toLowerCase()),
                                ),
                            );
                            setSearchText("");
                        }}
                        className="ri-search-line cursor-pointer font-semibold"
                    ></i>
                </div>

                {/* Top Rated Restaurants button */}
                <button
                    className="rounded-md border-none bg-gray-200 px-8 py-3 text-xl font-medium text-black outline-none"
                    onClick={() => {
                        const topRestaurants = restaurantList.filter(
                            (res) => res.info.avgRating > 4.5,
                        );
                        setFilterRestaurant(topRestaurants);
                    }}
                >
                    Top Restaurants
                </button>

                {/* Reset button */}
                <button
                    className="rounded-md border-none bg-gray-200 px-8 py-3 text-xl font-medium text-black outline-none"
                    onClick={() => {
                        setFilterRestaurant(restaurantList);
                        setSearchText("");
                    }}
                >
                    Reset
                </button>
                <div className="flex w-[250px] items-center justify-between rounded-md bg-gray-200 px-4 py-3 text-xl text-black">
                    <input
                        className="w-full border-none bg-gray-200 font-medium text-black outline-none"
                        type="text"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />


                </div>
            </div>

            <div className="restaurant-container mt-10 flex w-full flex-wrap justify-center gap-8 py-8">
                {filterRestaurant.map((res, i) => (
                    // Passing the restaurant data to the RestaurantCard component
                    <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
                        {res.info.veg ? (
                            <VegRestaurants ResData={res} />
                        ) : (
                            <RestaurantCard ResData={res} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
