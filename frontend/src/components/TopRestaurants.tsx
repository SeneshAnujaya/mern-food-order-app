import { useGetTopRestaurants } from "@/api/RestaurantApi";
import type { TopRestaurantSearchResponse } from "@/types";
import restaurantPlaceHolderImg from "../assets/restaurants-placeholder.jpg";

import { Building } from "lucide-react";
import { Link } from "react-router-dom";

const TopRestaurants = () => {
  const { topRestaurants, isLoading } = useGetTopRestaurants();
  

  if (isLoading) {
    return <div>Loading Top Restaurants...</div>;
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4  gap-6 mt-4">
      {topRestaurants
        ?.slice(0,8)
        .map((restaurant: TopRestaurantSearchResponse, index: number) => (
          <Link to={`/detail/${restaurant._id}`}>
          <div key={index} className="w-full group">
            <div className="overflow-hidden rounded-2xl">
            <img
              src={restaurant.imageUrl || restaurantPlaceHolderImg}
              alt="cuisine pic"
              className="w-full h-[200px] object-cover rounded-2xl group-hover:scale-110 transition-transform"
            />
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="text-left text-[0.95rem] font-semibold ml-2 text-gray-700 group-hover:text-mainOrange transition-colors">
                {restaurant.restaurantName}
              </p>
              <span className="flex gap-1 items-center">
                <Building className="w-4 text-mainOrange" />
                <p className="text-[0.9rem] font-medium mt-0.5">
                  {restaurant.city}
                </p>
              </span>
            </div>
          </div>
          </Link>
        ))}
    </div>
  );
};

export default TopRestaurants;
