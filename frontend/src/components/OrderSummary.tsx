import { CartItem } from "@/pages/DetailPage";
import { Restaurant } from "@/types";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Trash } from "lucide-react";

type Props = {
  restaurant: Restaurant;
  cartItems: CartItem[];
  removeFromCart: (cartItem: CartItem) => void;
};

const OrderSummary = ({ restaurant, cartItems, removeFromCart }: Props) => {
  const getTotalCost = () => {
    const totalInPence = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );

    const totalWithDelivery = totalInPence + restaurant.deliveryPrice;

    return (totalWithDelivery / 100).toFixed(2);
  };
  return (
    <>
      <CardHeader>
        <CardTitle className="text-xl text-gray-700 font-bold tracking-tight flex justify-between">
          <span>Your Order</span>
          <span className="text-gray-900">${getTotalCost()}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {cartItems.map((item) => (
          <div className="flex justify-between">
            <span className="flex items-center">
              <Badge variant="outline" className="mr-2 w-5 h-5 flex flex-row justify-center bg-gray-500 text-white font-medium text-xs rounded-full border-none">
                {item.quantity}
              </Badge>
              {item.name}
            </span>
            <span className="flex items-center gap-2">
             
              ${((item.price * item.quantity) / 100).toFixed(2)}
              <span className="bg-[#fdd1c8] p-1.5 rounded-full">
              <Trash className="cursor-pointer" color="red" size={18} onClick={() => removeFromCart(item)}/>
                </span>
            </span>
          </div>
        ))}
        <Separator />
        <div className="flex justify-between">
          <span className="font-medium text-gray-800">Delivery</span>
          <span className="font-medium">${(restaurant.deliveryPrice / 100).toFixed(2)}</span>
        </div>
        <Separator />
      </CardContent>
    </>
  );
};

export default OrderSummary;
