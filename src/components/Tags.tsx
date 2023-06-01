import { ITags } from "../types/Types";

const Tags = ({ tag }: ITags) => {
  return <p className="text-blue-500 font-poppins tracking-wide">#{tag}</p>;
};

export default Tags;
