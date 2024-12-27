import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

/*
Header
     Logo
     Nav-Items
Body
    Search-Bar
    Restaurant-Container
        Restaurant-Card
            Restaurant-Card-Image
            Restaurant-Card-Title
Footer

*/

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <img
                    className="logo"
                    src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"
                    alt="logo"
                />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Categories</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = ({ resName, resCategory }) => {

    return (
        <div className="restaurant-card">
            <div className="restaurant-card-image">
                <img
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/26/78517964-20dc-4e37-92ce-8990deb14ab6_898041.jpg"
                    alt="restaurant-card-image"
                />
            </div>
            <div className="restaurant-card-title">
                <h3>{resName}</h3>
                <p className="star-rating">4.2 Star</p>
                <p>{resCategory}</p>
            </div>
        </div>
    );
};

const ResObj = {
    type: 'restaurant',
    data: {
        type: 'F',
        id: '229',
        name: 'Meghana Foods',
        uuid: '4fdd19e2-5d0f-4bde-9c7f-dc3e8d36021f',
        city: '1',
        area: 'Koramangala',
        totalRatingsString: '10000+ ratings',
        cloudinaryImageId: 'xqwpuhgnsaf18te7zvtv',
        cuisines: [
            'Biryani',
            'Andhra',
            'South Indian',
            'North Indian',
            'Chinese',
            'Seafood',
        ],
        tags: [],
        costForTwo: 50000,
        costForTwoString: '₹500 FOR TWO',
        deliveryTime: 16,
        minDeliveryTime: 16,
        maxDeliveryTime: 16,
        slaString: '16 MINS',
        lastMileTravel: 1.399999976158142,
        slugs: {
            restaurant: 'meghana-foods-5th-block-koramangala',
            city: 'bangalore',
        },
        cityState: '1',
        address:
            '124, Near Jyothi Nivas College, 1st Cross, KHB Colony, Koramangala 5th Block, Bangalore',
        locality: '5th Block',
        parentId: 635,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        chain: [],
        feeDetails: {
            fees: [
                {
                    name: 'distance',
                    fee: 2900,
                    message: '',
                },
                {
                    name: 'time',
                    fee: 0,
                    message: '',
                },
                {
                    name: 'special',
                    fee: 0,
                    message: '',
                },
            ],
            totalFees: 2900,
            message: '',
            title: 'Delivery Charge',
            amount: '2900',
            icon: '',
        },
        availability: {
            opened: true,
            nextOpenMessage: '',
            nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: '',
        badges: {
            imageBased: [],
            textBased: [],
            textExtendedBadges: [],
        },
        lastMileTravelString: '1.3 kms',
        hasSurge: false,
        sla: {
            restaurantId: '229',
            deliveryTime: 16,
            minDeliveryTime: 16,
            maxDeliveryTime: 16,
            lastMileTravel: 1.399999976158142,
            lastMileDistance: 0,
            serviceability: 'SERVICEABLE',
            rainMode: 'NONE',
            longDistance: 'NOT_LONG_DISTANCE',
            preferentialService: false,
            iconType: 'EMPTY',
        },
        promoted: false,
        avgRating: '4.4',
        totalRatings: 10000,
        new: false,
    },
    subtype: 'basic',
}

const Body = () => {
    return (
        <div className="body">

            <div className="search-container">
                <div className="search-bar">
                    <input type="text" placeholder="Search for restaurants and food" />
                    <i className="ri-search-line"></i>
                </div>
            </div>

            <div className="restaurant-container">
                <RestaurantCard resName="Thikana" resCategory="Indian, Chinese" />
                <RestaurantCard resName="Desi Dhaba" resCategory="Punjabi" />
                <RestaurantCard
                    resName="Mirchi Masala"
                    resCategory="South Indian, North Indian"
                />
                <RestaurantCard
                    resName="Sandeep Foods"
                    resCategory="Indian, Chinese, South Indian"
                />
                <RestaurantCard resName="Pizza Hut" resCategory="Italian" />
                {/* <RestaurantCard resObj={ResObj} /> */}
            </div>

        </div>
    );
};

const AppLAyout = () => {
    return (
        <div>
            <Header />
            <Body />
        </div>
    );
};

root.render(<AppLAyout />);
