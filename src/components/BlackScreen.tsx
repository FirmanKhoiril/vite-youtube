import { useGlobalState } from "../hooks/StateProvider";

const BlackScreen = () => {
  const { setToogleSidebar } = useGlobalState();
  return <div onClick={() => setToogleSidebar((prev: boolean) => !prev)} className="absolute h-screen w-full bg-black/60 top-0 z-10" />;
};

export default BlackScreen;
