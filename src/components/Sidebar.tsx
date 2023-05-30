import { AiOutlineClose } from "react-icons/ai";
import { useGlobalState } from "../hooks/StateProvider";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { dummyLinks } from "../types/DummyData";
const Sidebar = () => {
  const { setToogleSidebar } = useGlobalState();
  return (
    <motion.div whileInView={{ x: [-300, 0] }} transition={{ duration: 0.6 }} className="absolute z-20 w-[300px] px-2 py-3 top-0 border-r border-slate-800 min-h-screen bg-white">
      <div className="flex items-center mt-10 gap-3">
        <button type="button" onClick={() => setToogleSidebar((prev: boolean) => !prev)} className="p-2 ml-4 bg-black/20 rounded-full hover:bg-black/40 transition_all" name="buttonCloseSidebar" aria-label="CloseSidebar">
          <AiOutlineClose className="text-xl" />
        </button>
        <Link to="/">
          <h1 className="text-3xl">
            Pink
            <span className="text-pink-500">Tube</span>
          </h1>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-4 mt-16 ">
        {dummyLinks.map((link) => (
          <Link key={link.name} className="flex gap-2 text-xl font-poppins items-center w-full bg-primary hover:bg-white border border-transparent py-2 px-4 text-white hover:text-black transition_all hover:border-pink-500" to={link.to}>
            <span>{link.icon}</span>
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-10">
        <h1 className=" font-mono">
          @Copyright By <br />
          <span className=" bg-clip-text text-lg text-transparent bg-gradient-to-r from-pink-500 via-red-300 ml-3 to-pink-400 hover:font-bold hover:text-pink-500 "> Firman Khoiril Rohmatullah</span>
        </h1>
      </div>
    </motion.div>
  );
};

export default Sidebar;
