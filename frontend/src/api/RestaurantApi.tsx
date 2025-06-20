import { SearchState } from "@/pages/SearchPage";
import { PopularCuisines, Restaurant, RestaurantSearchResponse, TopRestaurantSearchResponse } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetRestaurant = (restaurantId?: string) => {
  const getRestaurantByIdRequest = async (): Promise<Restaurant> => {
    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/${restaurantId}`
    );
    if (!response.ok) {
      throw new Error("Failed to get restaurant");
    }

    return response.json();
  };

  const { data: restaurant, isLoading } = useQuery(
    "fetchRestaurant",
    getRestaurantByIdRequest,
    { enabled: !!restaurantId }
  );

  return { restaurant, isLoading };
};

export const useSearchRestaurants = (
  searchState: SearchState,
  city?: string
) => {
  const createSearchRequest = async (): Promise<RestaurantSearchResponse> => {
    const params = new URLSearchParams();
    params.set("searchQuery", searchState.searchQuery);
    params.set("page", searchState.page.toString());
    params.set("selectedCuisines", searchState.selectedCuisines.join(","));
    params.set("sortOption", searchState.sortOption);

    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/search/${city || ""}?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error("Failed to get restaurant");
    }

    return response.json();
  };

  const { data: results, isLoading } = useQuery(
    ["searchRestaurants", searchState, city],
    createSearchRequest,
    // { enabled: !!city }
  );

  return { results, isLoading };
};

export const useGetPopularCuisines = () => {
  const getPopularCuisinesRequest = async (): Promise<PopularCuisines[]> => {
    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/popularCuisines`
    );
    if (!response.ok) {
      throw new Error("Failed to get popular cuisines");
    }

    return response.json();
  };

  const { data: popularCuisines, isLoading } = useQuery(
    "fetchPopularCuisines",
    getPopularCuisinesRequest
  );

  return { popularCuisines, isLoading };
};

// Get top popular restaurants
export const useGetTopRestaurants = () => {
  const getTopRestaurantsRequest = async (): Promise<TopRestaurantSearchResponse[]> => {
    const response = await fetch(`${API_BASE_URL}/api/restaurant/top`);
    if (!response.ok) {
      throw new Error("Failed to get top restaurants");
    }
    return response.json();
  };

  const { data: topRestaurants, isLoading } = useQuery(
    "fetchTopRestaurants",
    getTopRestaurantsRequest
  );

  return { topRestaurants, isLoading };
  
};


