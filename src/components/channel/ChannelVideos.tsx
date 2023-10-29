import { useInfiniteQuery } from "react-query";
import { TContent, TDataYoutube, TId } from "../../types/Types";
import { FetchYoutube } from "../../api/fetchYoutube";
import { Card, CardShorts, Error, Loading } from "..";
import { options } from "../../types/DummyData";
import { useGlobalState } from "../../hooks/StateProvider";

const ChannelVideos = ({ id, title }: TId) => {
  const { setFilterVideoByLatest, filterVideoByLatest } = useGlobalState();
  const getDataYoutube = async (pageParam: string): Promise<TDataYoutube> => {
    const res = FetchYoutube(`channel/videos/?id=${id}&hl=id&cursor=${pageParam}&filter=${filterVideoByLatest}`);
    return res;
  };

  const { data, isSuccess, isFetching, isLoading, isError, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteQuery(["channelVideo", id, filterVideoByLatest], ({ pageParam = "" }) => getDataYoutube(pageParam), {
    refetchOnWindowFocus: false,
    refetchInterval: 60 * (60 * 1000),
    getNextPageParam: (lastpage) => {
      return lastpage.cursorNext;
    },
    staleTime: 60 * (60 * 1000),
  });

  if (isError) return <Error />;

  if (isLoading && isFetching) return <Loading />;

  return (
    <div>
      <div className="flex flex-col items-center  gap-3">
        <p className="font-bold text-lg">Select Video by</p>
        <div className="flex items-center gap-2 justify-center md:text-lg text-sm">
          {options.map((option) => (
            <button
              key={option.value}
              className={` ${option.value === filterVideoByLatest ? "bg-primary hover:opacity-80" : "dark:bg-white/10 bg-black/10"} hover:bg-primary py-2 px-3 `}
              onClick={() => setFilterVideoByLatest(option.value)}
              type="button"
              aria-label="buttonOptions"
              name="buttonOptions"
            >
              {option.name}
            </button>
          ))}
        </div>
      </div>
      {isSuccess && (
        <div className="flex items-center justify-center flex-col gap-10">
          <h1 className="text-center text-xl md:text-3xl font-inter mt-10"> Last Video {title}</h1>
          <div className="flex flex-wrap items-center justify-center gap-4 ">
            {data?.pages.map((page) => page.contents.map((content: TContent, idx: number) => <div key={idx}>{filterVideoByLatest === "shorts_latest" ? <CardShorts content={content} /> : <Card content={content} />}</div>))}
          </div>
          {isFetchingNextPage && <Loading />}
          {hasNextPage && (
            <button type="button" onClick={() => fetchNextPage()} className="gradient rounded-md hover:text-white py-2 px-4">
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ChannelVideos;
