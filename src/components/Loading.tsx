import { LineWave } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <LineWave height="100" width="100" color="#4fa94d" ariaLabel="line-wave" visible={true} firstLineColor="" middleLineColor="" lastLineColor="" />
    </div>
  );
};

export default Loading;
