import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndex, index }) => {
    console.log(showItem, setShowIndex);

    console.log(data);

    // Here each category has its own state to show/hide the items
    /*
    const [showItem, setShowItem] = useState(false)
    const handleClick = () => {
        setShowItem(!accordianOpen);
    };
    */

    const handleClick = () => {
        setShowIndex(index)
    }

    return (
        <div className="mx-auto my-8 w-6/12 rounded-lg p-8 shadow-lg">
            {/* Header */}
            <div
                onClick={() => handleClick()}
                className="flex cursor-pointer items-center justify-between"
            >
                <p className="text-xl font-semibold select-none">
                    {data.title} ({data.itemCards.length})
                </p>
                <p>&darr; </p>
            </div>

            {/* Accordian Body */}
            <div>{showItem && <ItemList item={data.itemCards} />}</div>
        </div>
    );
};

export default RestaurantCategory;
