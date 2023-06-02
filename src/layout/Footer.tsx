import { Link } from "react-router-dom";
import { dummyLinks } from "../types/DummyData";

const Footer = () => {
  return (
    <div className="min-h-[270px] border-t border-t-pink-500/20 flex items-center justify-around px-2 md:flex-row flex-col mt-10 w-full bg-white">
      <h1 className=" font-mono">
        @Copyright By & Created with ❤️ <br className="sm:hidden block" />
        <a target="_blank" href="https://api.whatsapp.com/send?phone=62085290502392&text=Hi Firman :)" className=" bg-clip-text text-lg text-transparent gradient hover:font-bold  ">
          Firman Khoiril Rohmatullah
        </a>
      </h1>
      <div className="flex gap-2 md:flex-wrap flex-col">
        {dummyLinks.map((link) => (
          <Link key={link.name} className="flex gap-2 text-lg font-poppins hover:text-pink-500 transition_all items-center w-full" to={link.to}>
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
