import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

type Props = {
  onChange: (value: string) => void;
  sortOption: string;
};

const SORT_OPTIONS = [
  { label: "best match", value: "bestMatch" },
  { label: "Delivery price", value: "deliveryPrice" },
  { label: "Estimated delivery time", value: "estimatedDeliveryTime" },
];

const SortOptionDropdown = ({ onChange, sortOption }: Props) => {

    const selectedSortLabel = SORT_OPTIONS.find((option) => option.value === sortOption)?.label || SORT_OPTIONS[0].label; 
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <Button variant="outline" className="w-full border-none">
                Sort by: {selectedSortLabel}
                <ChevronDown />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            {SORT_OPTIONS.map((option) => (
                <DropdownMenuItem className="cursor-pointer" key={option.value} onClick={() => onChange(option.value)}>
                    {option.label}
                </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortOptionDropdown;
