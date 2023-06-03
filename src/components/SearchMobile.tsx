import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { useGlobalState } from "../hooks/StateProvider";
import { useNavigate } from "react-router-dom";

const SearchMobile = () => {
  const navigate = useNavigate();
  const { setSearchToogle, setSearchTermMobile, searchTermMobile } = useGlobalState();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTermMobile.length > 0) {
      navigate(`/search/${searchTermMobile}`);
      setSearchTermMobile("");
      setSearchToogle((prev: boolean) => !prev);
    }
  };

  const handleEraseSearchTerm = () => setSearchTermMobile("");

  return (
    <form onSubmit={handleSubmit} className="absolute z-20 w-full pr-5 py-1 items-center  bg-primary justify-between flex-grow md:hidden  flex">
      <button type="button" onClick={() => setSearchToogle((prev: boolean) => !prev)} className="p-2 hover:bg-white/20 transition_all" aria-label="buttonBack" name="backButton">
        <BiArrowBack className="text-2xl" />
      </button>
      <input type="text" className="p-3 mx-4 rounded-md bg-white min-w-[150px] flex-grow relative outline-none font-poppins" placeholder="Search Something" value={searchTermMobile} onChange={(e) => setSearchTermMobile(e.target.value)} />
      {searchTermMobile.length > 0 && (
        <button onClick={handleEraseSearchTerm} type="button" name="ClearButton" aria-label="buttonClear" className="p-3 absolute hover:text-pink-500 right-16 cursor-pointer">
          <AiOutlineClose className="text-2xl" />
        </button>
      )}
      <button type="submit" className="p-2 hover:bg-white/20 rounded-full transition_all" aria-label="submitSearch" name="searchButton">
        <AiOutlineSearch className="text-2xl" />
      </button>
    </form>
  );
};

export default SearchMobile;
