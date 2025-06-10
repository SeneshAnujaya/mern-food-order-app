import type { MenuItem as MenuItemType } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CirclePlus, Salad } from "lucide-react";

type Props = {
  menuItem: MenuItemType;
  addToCart: () => void;
};

const MenuItem = ({ menuItem, addToCart }: Props) => {
  return (
    <Card className="cursor-pointer border-none bg-[#fff1ee] hover:bg-[#fddfda] shadow-none" onClick={addToCart}>
        <CardHeader className="flex flex-row gap-2">
          <span><Salad className="w-6 text-mainOrange" strokeWidth={2}/></span>
            <CardTitle className="font-semibold text-gray-800">{menuItem.name}</CardTitle>
        </CardHeader>
        <CardContent className="font-semibold flex justify-between">
           <p className="text-gray-700">${(menuItem.price / 100).toFixed(2)} </p> 
           <span>
            <CirclePlus className="w-6 text-mainOrange" strokeWidth={2}/>
           </span>
        </CardContent>
    </Card>
  );
};

export default MenuItem;
