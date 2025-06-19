import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusDetail from "@/components/OrderStatusDetail";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import { AspectRatio } from "@/components/ui/aspect-ratio";


const OrderStatusPage = () => {
    const {orders, isLoading} = useGetMyOrders();

    if(isLoading) {
        return <div>Loading...</div>;
    }

    if(!orders || orders.length === 0) {
        return <div className="mt-[5rem] text-xl">No orders found</div>;
    }
  return (
    <div className="space-y-8 mt-[4rem]">
        <h2 className="font-outfit text-2xl font-medium text-gray-800">My Orders</h2>
        {orders.map((order) => (
            <div className="space-y-6 bg-[#fff1ee] p-10 rounded-lg">
                <OrderStatusHeader order={order}/>
                <div className="grid gap-10 md:grid-cols-2">
                    <OrderStatusDetail order={order}/>
                    <AspectRatio ratio={16/5}>
                    <img src={order.restaurant.imageUrl} className="rounded-md object-cover h-full w-full"/>
                    </AspectRatio>
                </div>
            </div>
        ))}
    </div>
  )
}

export default OrderStatusPage