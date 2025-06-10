import { Order } from "@/types";
import { Separator } from "./ui/separator";
import { LucideCircleDollarSign, MapPin, Salad } from "lucide-react";

type Props = {
  order: Order;
};

const OrderStatusDetail = ({order}:Props) => {
  return <div className="space-y-5">
    <div className="flex flex-col">
        <span className="font-semibold flex gap-1 mb-1"><MapPin className="w-5 text-mainOrange"/>Delivering to:</span>
        <span className="ml-5 text-[0.95rem]">{order.deliveryDetails.name}</span>
         <span className="ml-5 text-[0.95rem]">{order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}</span>
    </div>
    <div className="flex flex-col">
        <span className="font-semibold flex gap-1 mb-1"><Salad className="w-5 text-mainOrange"/>Your Order</span>
        <ul>
            {order.cartItems.map((item) => (
                <li className="ml-5 text-[0.95rem]">{item.name} * {item.quantity}</li>
            ))}
        </ul>
    </div>
    <Separator />
    <div className="flex flex-col">
        <span className="font-semibold flex gap-1 mb-1">
          <LucideCircleDollarSign className="w-5 text-mainOrange"/>
          Total</span>
        <span className="font-medium text-sm ml-5">${(order.totalAmount / 100).toFixed(2)}</span>
    </div>
  </div>;
};

export default OrderStatusDetail;
