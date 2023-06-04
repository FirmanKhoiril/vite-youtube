import { Link } from "react-router-dom";
import Youtube from "../images/youtube.svg";

const HeroSection = () => {
  return (
    <div className="min-h-[70vh] my-10 px-2 gap-20 md:gap-2 flex md:flex-row flex-col items-center justify-around">
      <img src={Youtube} width={380} height={380} alt="HeroBackgroundImage" className=" w-[300px] h-[300px] lg:w-[380px] lg:h-[380px]" />
      <div className="flex gap-2 flex-col">
        <h1 className=" text-4xl font-inter md:text-[49px]">
          Welcome to <span className=" hover:text-pink-500 transition_all leading-[70px]">PinkTube</span>.
        </h1>
        <p className="text-lg font-play tracking-wide">Discover and watch millions of videos</p>
        <Link
          to={`search/populer`}
          className="py-2 w-[130px] text-white px-4 hover:bg-white bg-primary border hover:border-pink-500 rounded-sm hover:text-black dark:hover:text-white dark:hover:bg-zinc-800 font-poppins border-transparent transition_all"
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
