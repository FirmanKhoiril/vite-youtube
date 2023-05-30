import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { SearchBar } from "../components";
import { useGlobalState } from "../hooks/StateProvider";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { setToogleSidebar } = useGlobalState();
  return (
    <div className="p-2 md:p-3 w-full bg-primary z-10 sticky top-0 flex items-center justify-between md:justify-around">
      <div className="flex items-center gap-3">
        <button type="button" aria-label="MenuSidebar" name="menuSidebar" className="button_icon rounded-md" onClick={() => setToogleSidebar((prev: boolean) => !prev)}>
          <AiOutlineMenu className="text-xl" />
        </button>
        <Link to="/">
          <h1 className="text-3xl">
            Pink
            <span className="text-white">Tube</span>
          </h1>
        </Link>
      </div>
      <div>
        <div className="md:flex hidden">
          <SearchBar />
        </div>
        <button onClick={() => {}} aria-label="SearchMobile" name="buttonSearchMobile" className="md:hidden flex button_icon rounded-full">
          <AiOutlineSearch className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
