import  express  from "express";
import { param } from "express-validator";
import { getRestaurant, searchRestaurants } from "../controllers/RestaurantController";

const router = express.Router();

router.get("/:restaurantId", param("restaurantId").isString().trim().notEmpty().withMessage('RestaurantId parameter must be a valid string'), getRestaurant);
router.get("/search/:city", param("city").isString().trim().notEmpty().withMessage('City parameter must be a valid strign'), searchRestaurants);

export default router;