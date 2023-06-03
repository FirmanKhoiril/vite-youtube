import { Link } from "react-router-dom";
import { IContent } from "../types/Types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import millify from "millify";
import undefinedImage from "../images/not_found_2.svg";
import { useGlobalState } from "../hooks/StateProvider";

const Card = ({ content }: IContent) => {
  const { filterVideoByLatest } = useGlobalState();
  return (
    <Link to={`/video-detail/${content?.video?.videoId || content?.short?.videoId}`} className="hover:scale-[1.01] flex flex-col items-center w-[280px] min-h-[300px] relative">
      <LazyLoadImage
        effect="blur"
        loading="lazy"
        height={180}
        width={280}
        placeholderSrc={content?.video?.thumbnails[0].url || content?.short?.thumbnails[0].url}
        alt={content?.video?.title || content?.short?.title}
        className=" rounded-t-lg"
        src={content?.video?.thumbnails[0]?.url || content?.short?.thumbnails[0]?.url || undefinedImage}
      />
      <h4 className=" text-[13px] font-poppins">{content?.video?.title || content?.short?.title}</h4>
      <p className={`absolute bottom-5 ${filterVideoByLatest === "shorts_latest" ? "text-white" : " text-slate-700 "} flex text-xs px-2 items-center justify-between w-full`}>
        <span>{millify(content?.video?.stats?.views || content?.short?.stats?.viewsText) || "Don't have "} Views</span>
        <span>{content?.video?.publishedTimeText || content?.short?.publishedTimeText || "There is no data"}</span>
      </p>
    </Link>
  );
};

export default Card;
