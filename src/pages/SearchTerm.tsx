import { useParams } from "react-router-dom";

const SearchTerm = () => {
  const { search } = useParams();
  return <div>SearchTerm {search}</div>;
};

export default SearchTerm;
