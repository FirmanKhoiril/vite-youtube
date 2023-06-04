import Notfound from "../images/not_found.svg";
const Error = () => {
  return (
    <div className="min-h-[40vh] w-full flex items-center justify-center">
      <img loading="lazy" src={Notfound} width={300} height={300} alt="Page Not Found" />
    </div>
  );
};

export default Error;
