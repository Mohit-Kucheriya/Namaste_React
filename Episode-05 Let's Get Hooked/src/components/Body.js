import RestaurantCard from "./RestaurantCard";
import RestaurantList from "../utils/newMockData";
import { useState } from "react";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState(RestaurantList);

    return (
        <div className="body">
            <div className="search-container">
                <div className="search-bar">
                    <input type="text" placeholder="Search for restaurants and food" />
                    <i className="ri-search-line"></i>
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
