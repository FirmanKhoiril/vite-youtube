import ReactPlayer from "react-player";
import { IDetail } from "../types/Types";
import { VideoRelated } from ".";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { MdOutlineVerified } from "react-icons/md";
import moment from "moment";
import { AiOutlineLike, AiOutlineEye, AiOutlineComment } from "react-icons/ai";
import millify from "millify";
import Tags from "./Tags";

const DetailData = ({ content }: IDetail) => {
  return (
    <div className="w-full min-h-screen lg:flex-row flex-col my-4 px-2 flex lg:justify-around">
      <div className="box">
        <ReactPlayer url={`https://www.youtube.com/watch?v=${content.videoId}`} className="react-player" />
        <div className="w-full my-2">
          <h1 className="font-poppins text-lg">{content.title}</h1>
          <Link to={`/channel/${content.author.channelId}`} className="w-full my-2 gap-2 flex items-center">
            <div className=" w-10 h-full ">
              <LazyLoadImage src={content.author.avatar[0].url} alt={content.author.title} width={37} height={37} className="rounded-full" />
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <h2 className="font-play flex items-center gap-1">
                  {content.author.title}
                  {content.author.badges[0].text === "Terverifikasi" && <MdOutlineVerified className=" text-[17px] text-blue-500" />}
                </h2>
                <p className="text-sm">{moment(content.publishedDate).fromNow()}</p>
              </div>
              <p className="font-poppins text-xs text-slate-600">{content.author.stats.subscribersText}</p>
            </div>
          </Link>
          <div className="my-5 flex overflow-x-auto items-center gap-2">
            <span className="flex items-center gap-2 py-2 px-3  border-transparent bg-pink-500 text-white rounded-full hover:text-black peer hover:bg-white transition_all cursor-default hover:border-pink-500 border">
              <AiOutlineLike className="text-lg " />
              <span className="border-l pl-2 peer-hover:border-slate-800 border-slate-400"> {millify(content.stats.likes)}</span>
            </span>
            <span className="flex items-center gap-2 py-2 px-3  border-transparent bg-pink-500 text-white rounded-full hover:text-black peer hover:bg-white transition_all cursor-default hover:border-pink-500 border">
              <AiOutlineEye className="text-lg " />
              <span className="border-l pl-2 peer-hover:border-slate-800 border-slate-400"> {millify(content.stats.views)}</span>
            </span>
            <span className="flex items-center gap-2 py-2 px-3  border-transparent bg-pink-500 text-white rounded-full hover:text-black peer hover:bg-white transition_all cursor-default hover:border-pink-500 border">
              <AiOutlineComment className="text-lg " />
              <span className="border-l pl-2 peer-hover:border-slate-800 border-slate-400"> {millify(content.stats.comments)}</span>
            </span>
          </div>
          <div className="">
            {/* Description and Tags */}
            {content.keywords.map((tag: string) => (
              <Tags tag={tag} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-[400px]">
        <VideoRelated id={content.videoId} />
      </div>
    </div>
  );
};

export default DetailData;
