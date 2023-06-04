const Footer = () => (
  <div className="min-h-[200px] border-t border-t-pink-500/20 flex items-center justify-around px-2 md:flex-row flex-col mt-10 w-full bg-white dark:bg-zinc-800">
    <h1 className=" font-inter">
      @Copyright By{" "}
      <a target="_blank" className="font-poppins dark:hover:text-slate-400 hover:text-slate-700" href="https://www.instagram.com/firman.khoiril/">
        @firman.khoiril &nbsp;
      </a>
      & Created with ❤️
      <br className="sm:hidden block" />
      <a target="_blank" href="https://api.whatsapp.com/send?phone=62085290502392&text=Hi Firman :)" className=" bg-clip-text text-lg text-transparent gradient  ">
        Firman Khoiril Rohmatullah
      </a>
    </h1>
  </div>
);

export default Footer;
