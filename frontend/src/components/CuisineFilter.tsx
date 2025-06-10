import { cuisineList } from "@/config/restaurant-options-config";
import { BadgeCheck, Check, ChevronDown, ChevronUp } from "lucide-react";
import { ChangeEvent } from "react";
import { Button } from "./ui/button";

type Props = {
  onChange: (cuisines: string[]) => void;
  selectedCuisines: string[];
  isExpanded: boolean;
  onExpandedClick: () => void;
};

const CuisineFilter = ({
  onChange,
  selectedCuisines,
  isExpanded,
  onExpandedClick,
}: Props) => {

    const handleCuisinesChange = (event: ChangeEvent<HTMLInputElement>) => {
        const clickedCuisine = event.target.value;
        const isChecked = event.target.checked;

        const newCuisinesList = isChecked ? [...selectedCuisines, clickedCuisine] : selectedCuisines.filter((cuisine) => cuisine !== clickedCuisine);
        onChange(newCuisinesList);
    }
  const handleCuisinesReset = () => onChange([]);
  return (
    <>
      <div className="flex justify-between items-center px-2 mb-3">
        <div className="text-sm sm:text-base font-semibold mb-2">Filter By Cuisine</div>
        <div
          onClick={handleCuisinesReset}
          className="text-sm font-semibold mb-2 underline cursor-pointer text-mainOrange"
        >
          Reset Filters
        </div>
      </div>

      <div className="space-y-2 flex flex-col">
        {cuisineList.slice(0, isExpanded ? cuisineList.length: 7).map((cuisine) => {
          const isSelected = selectedCuisines.includes(cuisine);
          return (
            <div key={cuisine} className="flex">
              <input
                id={`cuisine_${cuisine}`}
                type="checkbox"
                className="hidden"
                value={cuisine}
                checked={isSelected}
                onChange={handleCuisinesChange}
              />
              <label htmlFor={`cuisine_${cuisine}`} className={`flex flex-1 items-center cursor-pointer text-sm rounded-full px-4 py-2 text-gray-800 font-medium ${isSelected ? "border border-mainOrange text-mainOrange gap-1":"border border-slate-400"}`}>
                {isSelected && /*<Check  size={20} strokeWidth={3}/>*/ <BadgeCheck size={20} strokeWidth={2}/>}
                {cuisine}
              </label>
            </div>
          );
        })}
        <Button onClick={onExpandedClick} variant="link" className="mt-4 flex-1">{isExpanded ? (<span className="flex flex-row items-center gap-1">View Less <ChevronUp/></span>):(<span className="flex flex-row items-center gap-1">View More <ChevronDown/></span>)}</Button>
      </div>

    </>
  );
};

export default CuisineFilter;
