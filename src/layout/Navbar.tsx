import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { SearchBar, SearchMobile } from "../components";
import { useGlobalState } from "../hooks/StateProvider";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { setToogleSidebar, searchToogle, setSearchToogle } = useGlobalState();
  return (
    <div className="p-[10px] md:p-3 w-full bg-primary z-10 sticky top-0 flex items-center justify-between md:justify-around overflow-hidden">
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
      <div className="">
        <div className="md:flex hidden">
          <SearchBar />
        </div>
        <button onClick={() => setSearchToogle((prev: boolean) => !prev)} aria-label="SearchMobile" name="buttonSearchMobile" className="md:hidden flex button_icon rounded-full">
          <AiOutlineSearch className="text-2xl" />
        </button>
      </div>
      {!searchToogle && <SearchMobile />}
    </div>
  );
};

export default Navbar;
