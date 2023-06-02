import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { FetchYoutube } from "../api/fetchYoutube";
import { TChannel, TLinks } from "../types/Types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { MdOutlineVerified } from "react-icons/md";
import { ChannelVideos, Error, Loading } from "../components";

const Channel = () => {
  const { id } = useParams();

  const getDetailChannel = async (): Promise<TChannel> => {
    const res = await FetchYoutube(`channel/details/?id=${id}&hl=id`);
    return res;
  };
  const { data, isSuccess, isLoading, isFetching, isError } = useQuery(["getDetailChannel", id], getDetailChannel, {
    refetchOnWindowFocus: false,
    staleTime: 60 * (60 * 1000),
    refetchInterval: 60 * (60 * 1000),
  });

  return (
    <div>
      {isLoading && isFetching ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <>
            <LazyLoadImage alt={data?.username} effect="blur" loading="lazy" src={data?.banner.desktop[0].url} className="w-full h-[300px]" height={300} />
            <div className="px-2 flex justify-around gap-2 my-10 space-y-10 items-center flex-wrap">
              <div className="my-2 flex items-center gap-4 ">
                <LazyLoadImage alt={data?.username} src={data?.avatar[0].url} width={100} height={100} className=" rounded-full " />
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h2 className="font-play text-4xl">{data?.title}</h2>
                    {data?.badges[0]?.text === "Terverifikasi" && <MdOutlineVerified className=" text-[20px] text-blue-500" />}
                  </div>
                  <div className="flex items-center text-slate-700 gap-2">
                    <h2>{data?.username}</h2>
                    <p>{data?.stats.subscribersText}</p>
                    <p>{data?.stats.videosText}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-between">
                <div>
                  <p className=" text-right">{data?.joinedDateText}</p>
                </div>
                <div className="flex items-start gap-4">
                  {data?.links.map((link: TLinks, idx: number) => (
                    <a rel="noopener" key={idx} className="flex items-center gap-1" target="_blank" href={link.targetUrl}>
                      <LazyLoadImage alt={link.title} height={20} width={20} src={link.icon} />
                      <h2>{link.title}</h2>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <p className="px-2 lg:px-10 font-poppins mb-10">{data?.description}</p>
            <div className="flex items-center flex-col gap-10  justify-center">
              <ChannelVideos id={data?.channelId} title={data?.title} />
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Channel;
