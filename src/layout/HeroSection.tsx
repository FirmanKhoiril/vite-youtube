import Youtube from "../images/youtube.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HeroSection = () => {
  return (
    <div className="min-h-[70vh] my-10 gap-20 md:gap-2 flex md:flex-row flex-col items-center justify-around">
      <LazyLoadImage loading="lazy" src={Youtube} width={380} height={380} alt="HeroBackgroundImage" />
      <div className="flex gap-2 flex-col">
        <h1 className=" text-4xl font-inter md:text-[49px]">
          Welcome to <span className=" hover:text-pink-500 transition_all leading-[70px]">PinkTube</span>.
        </h1>
        <p className="text-lg font-play tracking-wide">Discover and watch millions of videos</p>
        <button className="py-2 w-36 text-white px-4 hover:bg-white bg-primary border hover:border-pink-500 rounded-sm hover:text-black font-poppins border-transparent transition_all">Explore Now</button>
      </div>
    </div>
  );
};

export default HeroSection;
