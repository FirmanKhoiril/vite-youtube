import { useInfiniteQuery } from "react-query";
import { TContent, TDataYoutube, TId } from "../../types/Types";
import { FetchYoutube } from "../../api/fetchYoutube";
import { Card, Error, Loading } from "..";
import { IoOptionsOutline } from "react-icons/io5";
import { options } from "../../types/DummyData";
import { useGlobalState } from "../../hooks/StateProvider";

const ChannelVideos = ({ id, title }: TId) => {
  const { setFilterVideoByLatest, filterVideoByLatest } = useGlobalState();
  const getDataYoutube = async (pageParam: string): Promise<TDataYoutube> => {
    const res = FetchYoutube(`channel/videos/?id=${id}&hl=id&cursor=${pageParam}&filter=${filterVideoByLatest}`);
    return res;
  };

  const { data, isSuccess, isFetching, isLoading, isError, hasNextPage, fetchNextPage } = useInfiniteQuery(["channelVideo", id, filterVideoByLatest], ({ pageParam = "" }) => getDataYoutube(pageParam), {
    refetchOnWindowFocus: false,
    refetchInterval: 60 * (60 * 1000),
    getNextPageParam: (lastpage) => {
      return lastpage.cursorNext;
    },
    staleTime: 60 * (60 * 1000),
  });

  return (
    <div>
      <div className="flex items-center gap-1 peer button_hover w-[150px] justify-center m-auto  py-2 ">
        <IoOptionsOutline className="text-xl" />
        <select onChange={(e) => setFilterVideoByLatest(e.currentTarget.value)} aria-label="filter" name="filterSelect" className=" bg-transparent">
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      {isFetching && isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <div className="flex items-center justify-center flex-col gap-10">
            <h1 className="text-center text-xl md:text-3xl font-inter mt-10">Latest Videos by {title}</h1>
            <div className="flex mt-10 flex-wrap items-center justify-center gap-4 ">{data?.pages.map((page) => page.contents.map((content: TContent, idx: number) => <Card content={content} key={idx} />))}</div>
            {hasNextPage && (
              <button type="button" onClick={() => fetchNextPage()} className="gradient rounded-md hover:text-white py-2 px-4">
                Load More
              </button>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default ChannelVideos;
