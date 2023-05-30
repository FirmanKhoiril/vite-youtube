import { useRouteError } from "react-router-dom";
import Notfound from "../images/not_found.svg";
const Error = () => {
  let error = useRouteError();
  console.log(error);
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <img src={Notfound} width={300} height={300} alt="Page Not Found" />
    </div>
  );
};

export default Error;
