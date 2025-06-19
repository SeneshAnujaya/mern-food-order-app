import SearchBar, { SearchForm } from "@/components/SearchBar";
import { Link, useNavigate } from "react-router-dom";
import HowItWorks from "@/components/HowItWorks";
import bannerBg from "../assets/banner-bg.png";
import burgerPic from "../assets/burger-pic.png";
import { Button } from "@/components/ui/button";
import PopularCuisines from "@/components/PopularCuisines";
import TopRestaurants from "@/components/TopRestaurants";

const HomePage = () => {
  const navigate = useNavigate();
  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };
  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-[#fff1ee] rounded-2xl py-8 flex flex-col gap-5 text-center pb-12" style={{
          backgroundImage: `url(${bannerBg})`,
          backgroundSize: "contain",
        }}>
        <h1 className="text-[2.5rem] font-bold font-outfit tracking-tight text-gray-800">
          Tasty Spots Near You
        </h1>
        <SearchBar
          placeholder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
      </div>

      {/* Top cuisines */}
      <div className="px-4 md:px-8 bg-[#fff1ee] rounded-2xl py-8 flex flex-col gap-5 text-center">
        <h1 className="text-[2rem] sm:text-[2.4rem] font-bold font-outfit tracking-tight text-gray-800">
         Popular Cuisines
        </h1>
       <PopularCuisines />
      </div>

       {/* Top Restaurants */}
      <div className="px-4 md:px-8 bg-[#fff1ee] rounded-2xl py-8 flex flex-col gap-5 text-center">
        <h1 className="text-[2rem] sm:text-[2.4rem] font-bold font-outfit tracking-tight text-gray-800">
         Trending Restaurants
        </h1>
        <TopRestaurants />
      </div>

      <HowItWorks />
      <div
        className="grid md:grid-cols-2 gap-5  rounded-3xl bg-[#fff1ee] p-8 mb-8"
        style={{
          backgroundImage: `url(${bannerBg})`,
          backgroundSize: "contain",
        }}
      >
        <div className="flex items-center justify-center">
          <img
            src={burgerPic}
            alt="landing-image"
            className="w-full max-w-[450px] -rotate-6"
          />
        </div>
        <div className="flex flex-col gap-4 text-left p-4">
          <h2 className="font-bold font-outfit text-left text-[2.5rem] text-gray-800 leading-[1.2]">
            Hungry? Your Favorites Are Just a Click Away.
          </h2>
          <p className="mt-4 text-left text-sm sm:text-base text-gray-600 font-medium">
            Whether you're at home, at work, or on the go — your next delicious
            meal is just a few taps away. Explore top-rated restaurants, browse
            through curated menus, and enjoy fast, fresh, and flavorful dishes
            delivered straight to your door. Skip the line, skip the hassle —
            start eating smarter today.
          </p>
          <Button
            variant="ghost"
            className="mt-6 font-semibold bg-mainOrange py-6 px-8 text-base  text-white hover:text-white hover:bg-slate-700 w-fit  rounded-full transition-all"
          >
            <Link to="/search">Order Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
