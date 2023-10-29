import { LazyLoadImage } from "react-lazy-load-image-component";
import { TChannel, TLinks } from "../../types/Types";
import { MdOutlineVerified } from "react-icons/md";

const ChannelThumbnail = (data: TChannel) => {
  return (
    <>
      <LazyLoadImage alt={data?.username} effect="blur" loading="lazy" src={data?.banner.desktop[0].url} className="w-full  h-[250px] lg:h-[300px]" />
      <div className="px-2 flex justify-around gap-2 md:my-10 space-y-4 items-center flex-wrap">
        <div className="my-2 flex items-center gap-4 ">
          <LazyLoadImage alt={data?.username} src={data?.avatar[0].url} width={90} height={90} className=" rounded-full " />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h2 className="font-play text-4xl">{data?.title}</h2>
              {data?.badges[0]?.text === "Terverifikasi" && <MdOutlineVerified className=" text-[20px] text-blue-500" />}
            </div>
            <div className="flex items-center flex-wrap dark:text-slate-400 text-slate-700 gap-2">
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
          <div className="flex items-start mb-4 gap-4 flex-wrap">
            {data?.links.map((link: TLinks, idx: number) => (
              <a rel="noopener" key={idx} className="flex items-center gap-1" target="_blank" href={link.targetUrl}>
                <LazyLoadImage alt={link.title} height={20} loading="lazy" width={20} src={link.icon} />
                <h2 className="font-poppins">{link.title}</h2>
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="px-2 lg:px-10 font-poppins mb-10">{data?.description}</p>
    </>
  );
};

export default ChannelThumbnail;
