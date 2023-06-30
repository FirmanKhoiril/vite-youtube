import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { SearchBar, SearchMobile } from "../components";
import { useGlobalState } from "../hooks/StateProvider";
import { Link } from "react-router-dom";
import { CiSun, CiDark } from "react-icons/ci";

const Navbar = () => {
  const { setToogleSidebar, setSearchToogle, dark, setDark } = useGlobalState();
  return (
    <div className="p-[10px] md:p-3 w-full bg-primary dark:bg-zinc-900 z-10 sticky top-0 flex items-center justify-between md:justify-around overflow-hidden">
      <div className="flex items-center gap-3">
        <button type="button" aria-label="MenuSidebar" name="menuSidebar" className="button_icon rounded-md" onClick={() => setToogleSidebar((prev: boolean) => !prev)}>
          <AiOutlineMenu className="text-xl" />
        </button>
        <Link to="/">
          <h1 className="text-3xl">
            Pink
            <span className="text-white dark:text-pink-500">Tube</span>
          </h1>
        </Link>
      </div>
      <div>
        <div className="md:flex items-center gap-2 hidden">
          <SearchBar />
          <button type="button" onClick={() => setDark((prev: boolean) => !prev)} aria-label="darkToogle" name="darkToogle" className="p-2 button_icon rounded-full">
            {dark ? <CiDark className="text-2xl" /> : <CiSun className="text-2xl" />}
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setSearchToogle((prev: boolean) => !prev)} aria-label="SearchMobile" name="buttonSearchMobile" className="md:hidden flex button_icon rounded-full">
            <AiOutlineSearch className="text-2xl" />
          </button>
          <button type="button" onClick={() => setDark((prev: boolean) => !prev)} aria-label="darkToogle" name="darkToogle" className="p-2 md:hidden inline-block button_icon rounded-full">
            {dark ? <CiDark className="text-2xl" /> : <CiSun className="text-2xl" />}
          </button>
        </div>
      </div>
      <SearchMobile />
    </div>
  );
};

export default Navbar;
