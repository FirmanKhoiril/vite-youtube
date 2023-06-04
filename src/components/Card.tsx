import { Link } from "react-router-dom";
import { IContent } from "../types/Types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import millify from "millify";
import undefinedImage from "../images/not_found_2.svg";

const Card = ({ content }: IContent) => {
  return (
    <Link to={`/video-detail/${content?.video?.videoId}`} className="hover:scale-[1.01] flex flex-col items-center w-[280px] min-h-[300px] relative">
      <LazyLoadImage
        effect="opacity"
        loading="lazy"
        height={180}
        width={280}
        placeholderSrc={content?.video?.thumbnails[0].url}
        alt={content?.video?.title}
        className="rounded-t-lg"
        src={content?.video?.thumbnails[0]?.url || undefinedImage}
      />
      <h4 className=" text-[13px] font-poppins">{content?.video?.title}</h4>
      <p className={`absolute bottom-5 text-slate-700 dark:text-slate-300  flex text-xs px-2 items-center justify-between w-full`}>
        <span>{millify(content?.video?.stats?.views) || "Don't have "} Views</span>
        <span>{content?.video?.publishedTimeText || "There is no data"}</span>
      </p>
    </Link>
  );
};

export default Card;
