import { Restaurant } from "@/types"
import { Link } from "react-router-dom";
import { AspectRatio } from "./ui/aspect-ratio";
import { Banknote, Clock, Dot } from "lucide-react";

type Props = {
    restaurant: Restaurant;
}

const SearchResultCard = ({restaurant}: Props) => {
  return (
    <Link to={`/detail/${restaurant._id}`} className="grid lg:grid-cols-[2fr_3fr] gap-5 group mb-4 bg-[#fff1ee] p-4 rounded-lg">
        <AspectRatio ratio={16 / 6}>
            <img src={restaurant.imageUrl} className="rounded-md w-full h-full object-cover"/>
        </AspectRatio>
        <div>
        <h3 className="text-lg sm:text-xl text-gray-800 font-bold tracking-tight mb-2 group-hover:underline group-hover:text-mainOrange">{restaurant.restaurantName}</h3>
        <div id="card-content" className="grid md:grid-cols-2 gap-2">
            <div className="flex flex-row flex-wrap">
                {restaurant.cuisines.map((item, index) => (
                    <span className="flex" key={index}>
                        <span className="text-sm sm:text-[0.9rem] font-medium text-gray-700">{item}</span>
                        {index < restaurant.cuisines.length - 1 && <Dot className="text-mainOrange"/>} 
                    </span>
                ))}
            </div>
            <div className="flex gap-3 flex-col">
                <div className="flex items-center gap-2 text-gray-700 font-medium text-sm sm:text-[0.95rem]">
                    <Clock className="text-mainOrange" width={20}/>
                    {restaurant.estimatedDeliveryTime} mins
                </div>
                <div className="flex items-center gap-2 text-gray-700 font-medium text-sm sm:text-[0.95rem]">
                    <Banknote className="text-mainOrange" width={20}/>
                    Delivery from ${(restaurant.deliveryPrice / 100).toFixed(2)}
                </div>
            </div>
        </div>
        </div>
    </Link>
  )
}

export default SearchResultCard