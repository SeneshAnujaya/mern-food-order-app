import { Restaurant } from "@/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Dot } from "lucide-react"

type Props = {
    restaurant: Restaurant
}

const RestaurantInfo = ({restaurant} : Props) => {
  return (
    <Card className=" bg-[#fff1ee] border-none shadow-none">
        <CardHeader>
            <CardTitle className="text-2xl font-outfit font-medium tracking-tight text-gray-800">
                {restaurant.restaurantName}
            </CardTitle>
            <CardDescription className="text-mainOrange font-medium text-sm sm:text-[0.95rem]">
                {restaurant.city}, {restaurant.country}
            </CardDescription>
        </CardHeader>
        <CardContent className="flex">
            {restaurant.cuisines.map((item, index) => (
                <span className="flex">
                    <span className="font-medium text-gray-700">
                        {item}
                    </span>
                    {index < restaurant.cuisines.length - 1 ? <Dot className="text-mainOrange"/> : null}
                </span>
            ))}
        </CardContent>
    </Card>
  )
}

export default RestaurantInfo