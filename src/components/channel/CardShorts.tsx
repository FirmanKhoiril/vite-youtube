import { Link } from "react-router-dom";
import { IContent } from "../../types/Types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import millify from "millify";
import undefinedImage from "../../images/not_found_2.svg";

const CardShorts = ({ content }: IContent) => {
  return (
    <Link to={`/video-detail/${content?.short?.videoId}`} className="hover:scale-[1.01] flex flex-col items-center w-[280px] min-h-[500px] relative">
      <LazyLoadImage
        effect="blur"
        loading="lazy"
        height={180}
        width={280}
        placeholderSrc={content?.short?.thumbnails[0].url}
        alt={content?.short?.title}
        className="rounded-t-lg h-[500px] w-[280px]"
        src={content?.short?.thumbnails[0]?.url || undefinedImage}
      />
      <h4 className=" text-[13px] font-poppins">{content?.short?.title}</h4>
      <p className={`absolute bottom-5 text-white  flex text-xs px-2 items-center justify-between w-full`}>
        <span>{millify(content?.short?.stats?.viewsText) || "Don't have "} Views</span>
        <span>{content?.short?.publishedTimeText || "There is no data"}</span>
      </p>
    </Link>
  );
};

export default CardShorts;
