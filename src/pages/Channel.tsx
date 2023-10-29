import "react-lazy-load-image-component/src/effects/blur.css";
import { ChannelThumbnail, ChannelVideos, Error, Loading } from "../components";
import { toast } from "sonner";
import useGetChannell from "../hooks/useGetChannell";
import { useParams } from "react-router-dom";

const Channel = () => {
  const { id } = useParams();

  const { isError, data, isFetching, isLoading, isSuccess } = useGetChannell(id);

  if (isError) {
    toast.error(`${data?.username} don't have an Channel`);
    return <Error />;
  }

  if (isLoading && isFetching) return <Loading />;

  return (
    <div>
      {isSuccess && (
        <>
          <ChannelThumbnail {...data} />
          <div className="flex items-center flex-col gap-10  justify-center">
            <ChannelVideos id={data?.channelId} title={data?.title} />
          </div>
        </>
      )}
    </div>
  );
};

export default Channel;
