import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { useGlobalState } from "../hooks/StateProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const SearchBar = () => {
  const navigate = useNavigate();
  const { setSearchTerm, searchTerm } = useGlobalState();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchTerm.length > 0) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    } else {
      toast.error("Input has to be required");
    }
  };

  const handleEraseSearchTerm = () => setSearchTerm("");
  return (
    <form onSubmit={handleSubmit} className="items-center relative flex">
      <input
        type="text"
        className="py-[10px] px-3 rounded-l-md  bg-black/10 min-w-[300px]  relative outline-none dark:bg-white/20  dark:placeholder:text-white/60  "
        placeholder="Search Something"
        value={searchTerm}
        required
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm.length > 0 && (
        <button onClick={handleEraseSearchTerm} type="button" name="ClearButton" aria-label="buttonClear" className="p-3  absolute hover:text-pink-500 right-12  cursor-pointer">
          <AiOutlineClose size={24} />
        </button>
      )}
      <button type="submit" className="py-[10px] px-3 bg-primary transition_all" aria-label="submitSearch" name="searchButton">
        <AiOutlineSearch size={24} />
      </button>
    </form>
  );
};

export default SearchBar;
