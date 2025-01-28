import { RES_CARD_URL } from "../utils/constants";

const ItemList = ({ item }) => {
    // console.log(item);
    return (
        <div>
            {item.map((item) => (
                <div
                    key={item.card.info.id}
                    className="flex items-center justify-between space-x-4 border-b-2"
                >
                    <div className="my-8 flex w-8/12 flex-col items-start py-4">
                        <p className="mb-1 text-2xl font-medium">{item.card.info.name}</p>

                        <p className="text-md mb-4 font-semibold">
                            {" "}
                            ₹ {item.card.info.price / 100}
                        </p>

                        <p className="text-left text-[16px] text-gray-400">
                            {item.card.info.description}
                        </p>
                    </div>

                    <div className="relative w-3/12 bg-red-400">
                        <img
                            src={RES_CARD_URL + item.card.info.imageId}
                            className="aspect-video w-full object-cover"
                            alt={item.card.info.name}
                        />
                        <button className="absolute -bottom-5 right-1/2 translate-x-1/2 rounded-lg border border-green-400 bg-white px-3 py-2">
                            Add +
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
