import { Request, Response } from "express";
import Restaurant from "../models/restaurants";
import { count } from "console";
import Order from "../models/order";

export const getRestaurant = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const restaurantId = req.params.restaurantId;
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ message: "restaurant not found" });
    }
    res.status(200).json(restaurant);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};

export const searchRestaurants = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const city = req.params.city;

    const searchQuery = (req.query.searchQuery as string) || "";
    const selectedCuisines = (req.query.selectedCuisines as string) || "";
    const sortOption = (req.query.sortOption as string) || "lastUpdated";
    const page = parseInt(req.query.page as string) || 1;

    let query: any = {};

    query["city"] = new RegExp(city, "i");
    const cityCheck = await Restaurant.countDocuments(query);
    if (cityCheck === 0) {
      return res
        .status(404)
        .json({ data: [], pagination: { total: 0, page: 1, pages: 1 } });
    }

    if (selectedCuisines) {
      const cuisinesArray = selectedCuisines
        .split(",")
        .map((cuisine) => new RegExp(cuisine, "i"));
      query["cuisines"] = { $all: cuisinesArray };
    }

    if (searchQuery) {
      const searchRegex = new RegExp(searchQuery, "i");
      query["$or"] = [
        { restaurantName: searchRegex },
        { cuisines: { $in: [searchRegex] } },
      ];
    }

    const pageSize = 10;
    const skip = (page - 1) * pageSize;

    const restaurants = await Restaurant.find(query)
      .sort({ [sortOption]: 1 })
      .skip(skip)
      .limit(pageSize)
      .lean();

    const total = await Restaurant.countDocuments(query);

    const response = {
      data: restaurants,
      pagination: { total, page, pages: Math.ceil(total / pageSize) },
    };

    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getPopularCuisines = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const popularCuisines = await Restaurant.aggregate([
      { $unwind: "$cuisines" },
      { $group: { _id: "$cuisines", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 6 },
    ]);

    res.status(200).json(popularCuisines);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};

export const getTopRestaurants = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const limit = 8;

    const topRestaurants = await Order.aggregate([
      { $group: { _id: "$restaurant", orderCount: { $sum: 1 } } },
      { $sort: { orderCount: -1 } },
      {$limit: limit},
      
    ]);
  } catch (error) {}
};
