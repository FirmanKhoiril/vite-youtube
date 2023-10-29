import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { useGlobalState } from "../hooks/StateProvider";
import { useNavigate } from "react-router-dom";
import { BlackScreen } from ".";

const SearchMobile = () => {
  const navigate = useNavigate();
  const { setSearchToogle, searchToogle, setSearchTermMobile, searchTermMobile } = useGlobalState();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTermMobile.length > 0) {
      navigate(`/search/${searchTermMobile}`);
      setSearchTermMobile("");
      setSearchToogle((prev: boolean) => !prev);
    }
  };

  const handleEraseSearchTerm = () => setSearchTermMobile("");

  const handleCloseSearch = () => setSearchToogle((prev: boolean) => !prev);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`fixed top-0 z-30 w-full px-2 py-1 items-center dark:bg-zinc-900 bg-white justify-between flex-grow md:hidden flex transition_all ${!searchToogle ? "translate-y-[0%]" : " translate-y-[-120%]"}`}
      >
        <button type="button" onClick={() => setSearchToogle((prev: boolean) => !prev)} className="p-2 hover:bg-white/20 rounded-full transition_all" aria-label="buttonBack" name="backButton">
          <BiArrowBack size={24} />
        </button>
        <input
          type="text"
          className="p-3 mx-4 rounded-full placeholder:text-black/80 dark:text-white bg-black/20 dark:bg-white/10 dark:placeholder:text-white/80 min-w-[150px] flex-grow relative outline-none font-poppins"
          placeholder="Search Something"
          value={searchTermMobile}
          onChange={(e) => setSearchTermMobile(e.target.value)}
        />
        {searchTermMobile.length > 0 && (
          <button onClick={handleEraseSearchTerm} type="button" name="ClearButton" aria-label="buttonClear" className="p-3 absolute hover:text-pink-500 right-[72px] cursor-pointer">
            <AiOutlineClose size={24} />
          </button>
        )}
        <button type="submit" className="p-2 hover:bg-white/20 rounded-full transition_all" aria-label="submitSearch" name="searchButton">
          <AiOutlineSearch size={24} />
        </button>
      </form>
      {!searchToogle && <BlackScreen onClick={handleCloseSearch} />}
    </>
  );
};

export default SearchMobile;
