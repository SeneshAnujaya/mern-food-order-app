import { Order } from "@/types";
import { Progress } from "./ui/progress";
import { ORDER_STATUS } from "@/config/order-status-config";
import { Clock, Package } from "lucide-react";

type Props = {
  order: Order;
};

const OrderStatusHeader = ({ order }: Props) => {
  const getExpectedDelivery = () => {
    const created = new Date(order.createdAt);

    created.setMinutes(
      created.getMinutes() + order.restaurant.estimatedDeliveryTime
    );

    const hours = created.getHours();
    const minutes = created.getMinutes();

    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${paddedMinutes}`;
  };

  const getOrderStatusInfo = () => {
    return ORDER_STATUS.find((o) => o.value === order.status) || ORDER_STATUS[0];
  }

  return (
    <>
    <div className="flex flex-col gap-5 md:flex-row md:justify-between">
       <div className=" flex  gap-2 items-center md:flex-row md:justify-between">
        <Package className="w-6 text-mainOrange"/>
        <span className="text-gray-800 font-semibold tracking-tighter text-[1.1rem]">Order Status :<span className="text-mainOrange"> {getOrderStatusInfo().label}</span></span>
      </div>

      <div className=" flex  gap-2 items-center md:flex-row md:justify-between">
        <Clock className="w-6 text-mainOrange"/>
        <span className="text-gray-800 font-semibold tracking-tighter text-[1.1rem]">Expected by : <span className="text-mainOrange">{getExpectedDelivery()}</span></span>
    
      </div>
      
    </div>
  
      <Progress className="animate-pulse" value={getOrderStatusInfo().progressValue} />
    </>
  );
};

export default OrderStatusHeader;
