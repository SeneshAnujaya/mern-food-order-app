import { Link } from "react-router-dom";

type Props = {
  total: number;
  city: string;
};

const SearchResultInfo = ({total, city}: Props) => {
  return (<div className="text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
    <span className="text-[1.1rem]">
        <span className="text-mainOrange font-bold text-[1.15rem]">{total}</span> Restaurants found in <span className="text-mainOrange font-bold text-[1.15rem]">{city}</span>
        <Link to="/" className="ml-2 text-sm font-semibold underline cursor-pointer text-gray-600">Change Location</Link>
    </span>
  
  </div>);
};

export default SearchResultInfo;
