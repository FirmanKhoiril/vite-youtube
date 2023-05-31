import { Link } from "react-router-dom";
import { IContent } from "../types/Types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Card = ({ content }: IContent) => {
  return (
    <Link to={`/video-detail/${content?.video?.videoId}`} className="hover:scale-[1.01] flex flex-col items-center w-[280px] h-">
      <LazyLoadImage effect="blur" loading="lazy" height={180} width={280} placeholderSrc={content?.video?.thumbnails[0].url} alt={content?.video?.title} className=" rounded-t-lg" src={content?.video?.thumbnails[0].url} />
      <h4 className=" text-sm font-poppins">{content?.video?.title}</h4>
    </Link>
  );
};

export default Card;
