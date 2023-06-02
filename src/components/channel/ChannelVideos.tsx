import { useInfiniteQuery } from "react-query";
import { TContent, TDataYoutube, TId } from "../../types/Types";
import { FetchYoutube } from "../../api/fetchYoutube";
import { Card, Error, Loading } from "..";

const ChannelVideos = ({ id, title }: TId) => {
  const getDataYoutube = async (pageParam: string): Promise<TDataYoutube> => {
    const res = FetchYoutube(`channel/videos/?id=${id}&hl=id&cursor=${pageParam}`);
    return res;
  };
  const { data, isSuccess, isFetching, isLoading, isError, hasNextPage, fetchNextPage } = useInfiniteQuery(["channelVideo", id], ({ pageParam = "" }) => getDataYoutube(pageParam), {
    refetchOnWindowFocus: false,
    refetchInterval: 60 * (60 * 1000),
    getNextPageParam: (lastpage) => {
      return lastpage.cursorNext;
    },
    staleTime: 60 * (60 * 1000),
  });

  return (
    <div>
      {isFetching && isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <div className="flex items-center justify-center flex-col gap-10">
            <h1 className="text-center text-xl md:text-3xl font-inter">Latest Videos by {title}</h1>
            <div className="flex mt-10 flex-wrap items-center justify-center gap-4">{data?.pages.map((page) => page.contents.map((content: TContent, idx: number) => <Card content={content} key={idx} />))}</div>
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
