import RestaurantCard from "./RestaurantCard";
import RestaurantList from "../utils/newMockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        setRestaurantList(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    };

    return restaurantList.length === 0 ? <div>Loading...</div> : (
        <div className="body">
            <div className="search-container">
                <div className="search-bar">
                    <input type="text" placeholder="Search for restaurants and food" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <i onClick={() => {
                        setRestaurantList(restaurantList.filter(res => res.info.name.includes(searchText)))
                    }} className="ri-search-line"></i>
                </div>
                <button
                    onClick={() => {
                        const topRestaurants = restaurantList.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setRestaurantList(topRestaurants);
                    }}
                >
                    Top Restaurants
                </button>
            </div>

            <div className="restaurant-container">
                {/* <RestaurantCard resName="Thikana" resCategory="Indian, Chinese" />
                <RestaurantCard resName="Desi Dhaba" resCategory="Punjabi" />
                <RestaurantCard
                    resName="Mirchi Masala"
                    resCategory="South Indian, North Indian"
                />
                <RestaurantCard
                    resName="Sandeep Foods"
                    resCategory="Indian, Chinese, South Indian"
                />
                <RestaurantCard resName="Pizza Hut" resCategory="Italian" /> */}
                {/* {[1, 2, 3, 4, 5].map(res => <RestaurantCard ResObj={ResObj} />)} */}

                {restaurantList.map((res, i) => (
                    <RestaurantCard ResData={res} key={i} />
                ))}
            </div>
        </div>
    );
};

export default Body;
