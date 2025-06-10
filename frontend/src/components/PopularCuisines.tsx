import { useGetPopularCuisines } from "@/api/RestaurantApi";
import type { PopularCuisines } from "@/types";

import burgerPic from "../assets/burger.jpg";
import { Soup } from "lucide-react";
import { Key } from "react";
import { allCuisinesImage, cuisineImageMap } from "@/config/cuisines-images-config";

const PopularCuisines = () => {
  const { popularCuisines, isLoading } = useGetPopularCuisines();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4  gap-6 mt-4">
      {popularCuisines
        ?.slice(0, 4)
        .map((cuisine: PopularCuisines, index: number) => (
          <div key={index} className="w-full">
            <img
              src={cuisineImageMap[cuisine._id] || allCuisinesImage}
              alt="cuisine pic"
              className="w-full h-[200px] object-cover rounded-2xl"
            />
            <div className="flex justify-between items-center mt-2">
              <p className="text-left text-[0.95rem] font-semibold ml-2 text-gray-700">
                {cuisine._id}
              </p>
              <span className="flex gap-1 items-center">
                <Soup className="w-4 text-mainOrange" />
                <p className="text-[0.9rem] font-medium mt-0.5">
                  12 Restaurants
                </p>
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PopularCuisines;
