import { AiOutlineClose } from "react-icons/ai";
import { useGlobalState } from "../hooks/StateProvider";
import { Link } from "react-router-dom";
import { dummyLinks } from "../types/DummyData";
import { BlackScreen } from ".";

const Sidebar = () => {
  const { setToogleSidebar, toogleSidebar } = useGlobalState();

  const handleCloseSidebar = () => setToogleSidebar((prev: boolean) => !prev);
  return (
    <>
      <div className={`fixed ${toogleSidebar ? "translate-x-[0%]" : " translate-x-[-120%]"} z-20 w-[300px] transition_all px-2 py-3 top-0 border-r border-slate-800 min-h-screen dark:bg-zinc-900 bg-white`}>
        <div className="flex items-center mt-4 gap-3">
          <button
            type="button"
            onClick={() => setToogleSidebar((prev: boolean) => !prev)}
            className="p-2 ml-4 bg-black/20 rounded-full hover:bg-black/40 dark:bg-white/20 dark:hover:bg-white/40 transition_all"
            name="buttonCloseSidebar"
            aria-label="CloseSidebar"
          >
            <AiOutlineClose className="text-xl" />
          </button>
          <Link to="/">
            <h1 className="text-3xl">
              Pink
              <span className="text-pink-500">Tube</span>
            </h1>
          </Link>
        </div>
        <div className="flex flex-col px-3 items-center gap-4 mt-10 ">
          {dummyLinks.map((link) => (
            <Link key={link.name} className="flex gap-2 text-xl font-poppins items-center w-full  py-2 px-4 button_hover" to={link.to}>
              <span className=" text-[16px] sm:text-base">{link.icon}</span>
              <span className="text-[16px] sm:text-base">{link.name}</span>
            </Link>
          ))}
        </div>
        <div className="absolute bottom-10">
          <h1 className=" font-mono">
            @Copyright By <br />
            <a target="_blank" href="https://api.whatsapp.com/send?phone=62085290502392&text=Hi Firman :)" className="hover:text-pink-500">
              Firman Khoiril Rohmatullah
            </a>
          </h1>
        </div>
      </div>
      {toogleSidebar && <BlackScreen onClick={handleCloseSidebar} />}
    </>
  );
};

export default Sidebar;
