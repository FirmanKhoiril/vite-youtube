import { LineWave } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className=" min-h-[40vh] flex items-center w-full justify-center">
      <LineWave height="100" width="100" color="#ec4899" ariaLabel="line-wave" visible={true} />
    </div>
  );
};

export default Loading;
