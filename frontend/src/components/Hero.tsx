import { Link } from "react-router-dom";
import hero from "../assets/quick-bite-hero.png";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div
      className="container mx-auto mt-24 h-auto md:h-[500px] lg:h-[700px]  rounded-3xl  flex items-center p-8 sm:p-12"
      style={{ backgroundImage: `url(${hero})`, backgroundSize: "cover" }}
    >
      <div className="w-full lg:w-3/4 py-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-outfit leading-[1.1] text-gray-800">
          Your Favorite <span className="text-mainOrange">Meals</span>
          <br /> One Tap Away.
        </h1>
        <p className="text-base  font-semibold text-gray-700 w-full sm:w-3/4 md:text-lg mt-8">
          <b>Craving something delicious? </b>
          Order from top restaurants near you and get your meal delivered fast
          and fresh — anytime, anywhere.
        </p>

        <Button
          variant="ghost"
          className="mt-10 font-semibold bg-mainOrange py-6 px-8 text-base  text-white hover:text-white hover:bg-slate-700  rounded-full transition-all"
        >
          <Link to="/search">Find Restaurants</Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
