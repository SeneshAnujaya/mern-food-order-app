import { Order, OrderStatus } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ORDER_STATUS } from "@/config/order-status-config";
import { useUpdateMyRestaurantOrder } from "@/api/MyRestaurantApi";
import { useEffect, useState } from "react";
import { Clock, Coins, MapPinCheckInside, User } from "lucide-react";

type Props = {
  order: Order;
};

const OrderItemCard = ({ order }: Props) => {
  const { updateRestaurantStatus, isLoading } = useUpdateMyRestaurantOrder();
  const [status, setStatus] = useState<OrderStatus>(order.status);

  useEffect(() => {
    setStatus(order.status);
  }, [order.status]);

  const handleStatusChange = async (newStatus: OrderStatus) => {
    await updateRestaurantStatus({
      orderId: order._id as string,
      status: newStatus,
    });
    setStatus(newStatus);
  };

  const getTIme = () => {
    const orderDateTime = new Date(order.createdAt);

    const hours = orderDateTime.getHours();
    const minutes = orderDateTime.getMinutes();

    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${paddedMinutes}`;
  };
  return (
    <Card className="border-none shadow-none ">
      <CardHeader>
        <CardTitle className="grid md:[grid-template-columns:3fr_3fr_1fr_1fr] gap-4  mb-3">
          <div className="text-gray-800 text-sm md:text-[0.95rem] flex items-center  gap-2 flex-wrap">
            <User width={20} className="text-mainOrange w-6" />
            <p>Customer Name: </p>
            <span className="ml-1 font-normal">
              {order.deliveryDetails.name}
            </span>
          </div>
          <div className="text-gray-800 text-sm md:text-[0.95rem] flex items-center gap-2">
            <MapPinCheckInside width={20} className="text-mainOrange" />
            <p> Delivery address: </p>
            <span className="ml-1 font-normal">
              {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
            </span>
          </div>
          <div className="text-gray-800 text-sm md:text-[0.95rem] flex items-center  gap-2">
            <Clock width={20} className="text-mainOrange" />
            Time: <span className="ml-1 font-normal">{getTIme()}</span>
          </div>
          <div className="text-gray-800 text-sm md:text-[0.95rem] flex items-center  gap-2">
            <Coins width={20} className="text-mainOrange" />
            Total Cost:{" "}
            <span className="ml-2 font-normal">
              ${(order.totalAmount / 100).toFixed(2)}
            </span>
          </div>
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          {order.cartItems.map((cartItem) => (
            <span className="flex gap-1 items-center">
              <Badge
                variant="outline"
                className="mr-2 bg-mainOrange text-white font-bold border-none w-5 h-5 flex items-center justify-center rounded-full"
              >
                {cartItem.quantity}
              </Badge>
              <p className="text-sm md:text-[0.95rem]">{cartItem.name}</p>
            </span>
          ))}
          <div className="flex flex-col space-y-1.5 mt-2">
            <label htmlFor="status" className="font-semibold text-gray-800 mb-2 text-[0.95rem]">
              what is the status of the order
            </label>     
            <Select
              disabled={isLoading}
              onValueChange={(value) =>
                handleStatusChange(value as OrderStatus)
              }
              value={status}
            >
              <SelectTrigger id="status">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent position="popper">
                {ORDER_STATUS.map((status) => (
                  <SelectItem value={status.value}>{status.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderItemCard;
