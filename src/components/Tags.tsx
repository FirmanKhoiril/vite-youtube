import { Link } from "react-router-dom";
import { ITags } from "../types/Types";

const Tags = ({ tag }: ITags) => {
  return (
    <Link to={`/search/${tag}`} className="text-blue-500 font-poppins tracking-wide">
      #{tag}
    </Link>
  );
};

export default Tags;
