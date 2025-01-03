# Restaurant Filtering and Search Logic Explained

This document explains the logic and workflow behind the filtering and searching functionality in the restaurant listing application. It details how states are managed, how filters are applied, and how the UI updates dynamically. The implementation is clean, efficient, and highly maintainable.

---

## **States Used**

### 1. **`restaurantList`**

- **Purpose**: Holds the full, original list of restaurants fetched from the API.
- **Behavior**: This state remains untouched and acts as the source of truth for all filtering and searching operations.

### 2. **`filterRestaurant`**

- **Purpose**: Holds the currently filtered or searched list of restaurants.
- **Behavior**: Dynamically updated based on user actions (e.g., search, filtering).
- **Role**: Drives what is displayed in the UI.

### 3. **`searchText`**

- **Purpose**: Stores the current input in the search bar.
- **Behavior**: Used to filter restaurants based on their names.

---

## **How the Logic Works**

### **Flow Overview**

1. The app fetches data from the API and populates `restaurantList` and `filterRestaurant` with the full list of restaurants.
2. User actions (search or filtering) update `filterRestaurant` by applying logic to `restaurantList`.
3. The UI renders based on the current state of `filterRestaurant`.

### **Filtering Logic**

- All filters (e.g., search, top-rated) are applied to `restaurantList`.
- The filtered results are stored in `filterRestaurant`.
- This ensures that `restaurantList` remains unchanged and can be reused for subsequent filters.

### **Rendering Logic**

- The component renders the list of restaurants using `filterRestaurant`.
- React's state management ensures that updates to `filterRestaurant` trigger a re-render of the UI.

---

## **Code Implementation**

```jsx
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.0076578&lng=75.5626039&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

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

          <i
            onClick={() => {
              setFilterRestaurant(
                restaurantList.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
            className="ri-search-line"
          ></i>
        </div>
        <button
          onClick={() => {
            const topRestaurants = restaurantList.filter(
              (res) => res.info.avgRating > 4
            );
            setFilterRestaurant(topRestaurants);
          }}
        >
          Top Restaurants
        </button>
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
          <RestaurantCard ResData={res} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Body;
```

---

## **How the Components Work**

### **1. `useEffect`**

- Fetches restaurant data from the API on the component's initial render.
- Populates both `restaurantList` and `filterRestaurant` with the full list of restaurants.

### **2. Search Functionality**

- Filters `restaurantList` based on the `searchText` value.
- Updates `filterRestaurant` with the search results.
- Triggers a UI re-render to show the filtered list.

### **3. Top-Rated Restaurants**

- Filters `restaurantList` to include only restaurants with an average rating above 4.
- Updates `filterRestaurant` with the top-rated list.
- Ensures subsequent searches work on the entire `restaurantList`, not just top-rated ones.

### **4. Reset Functionality**

- Resets `filterRestaurant` to match `restaurantList`.
- Clears the search input by setting `searchText` to an empty string.

---

## **Benefits of This Approach**

1. **Separation of Concerns**:

   - `restaurantList` remains the source of truth.
   - `filterRestaurant` dynamically controls the UI.

2. **Efficiency**:

   - No redundant state variables.
   - Filters and searches always start from the full list, ensuring consistency.

3. **Flexibility**:

   - Easy to add new filters or modify existing ones.

4. **Maintainability**:
   - Clean and organized logic with minimal state management.

---

## **Conclusion**

This implementation is an example of how to build a robust, scalable, and maintainable filtering and searching system in React. By using a single source of truth (`restaurantList`) and dynamically updating the filtered list (`filterRestaurant`), the application remains consistent and efficient while providing a seamless user experience.
