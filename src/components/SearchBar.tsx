import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { useGlobalState } from "../hooks/StateProvider";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const { setSearchTerm, searchTerm } = useGlobalState();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchTerm.length > 0) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  const handleEraseSearchTerm = () => setSearchTerm("");
  return (
    <form onSubmit={handleSubmit} className="items-center flex">
      <input
        type="text"
        className="py-[10px] px-3 rounded-l-md bg-white min-w-[150px] flex-grow relative outline-none font-poppins peer focus:bg-white/80"
        placeholder="Search Something"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm.length > 0 && (
        <button onClick={handleEraseSearchTerm} type="button" name="ClearButton" aria-label="buttonClear" className="p-3   absolute hover:text-pink-500 right-[330px] cursor-pointer">
          <AiOutlineClose className="text-xl" />
        </button>
      )}
      <button type="submit" className="py-[10px] px-3 hover:bg-white/20 peer-focus:bg-white bg-white/60 transition_all" aria-label="submitSearch" name="searchButton">
        <AiOutlineSearch className="text-2xl" />
      </button>
    </form>
  );
};

export default SearchBar;
