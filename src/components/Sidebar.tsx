import { AiOutlineClose } from "react-icons/ai";
import { useGlobalState } from "../hooks/StateProvider";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const { setToogleSidebar } = useGlobalState();
  return (
    <motion.div whileInView={{ x: [-300, 0] }} transition={{ duration: 0.6 }} className="absolute z-20 w-[300px] px-2 py-3 top-0 border-r border-slate-800 min-h-screen bg-white">
      <div className="flex items-center gap-3">
        <button type="button" onClick={() => setToogleSidebar((prev: boolean) => !prev)} className="p-2 bg-black/20 rounded-full hover:bg-black/40 transition_all" name="buttonCloseSidebar" aria-label="CloseSidebar">
          <AiOutlineClose className="text-xl" />
        </button>
        <Link to="/">
          <h1 className="text-3xl">
            Pink
            <span className="text-pink-500">Tube</span>
          </h1>
        </Link>
      </div>
      <div className="">
        {/* Home */}
        {/* Shorts */}
      </div>
      <div className="">{/* Copyright */}</div>
    </motion.div>
  );
};

export default Sidebar;
