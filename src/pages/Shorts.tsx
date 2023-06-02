import { FetchYoutube } from "../api/fetchYoutube";
import { Card, Categories, Error, Loading } from "../components";
import { HeroSection } from "../layout";
import { useInfiniteQuery } from "react-query";
import { TContent, TDataYoutube } from "../types/Types";

const Shorts = () => {
  const getDataYoutube = async (pageParam: string): Promise<TDataYoutube> => {
    const res = await FetchYoutube(`search/?q=shortPopuler2023&hl=id&cursor=${pageParam}`);

    return res;
  };

  const { data, isSuccess, isError, isLoading, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery(["dataYoutube"], ({ pageParam = "" }) => getDataYoutube(pageParam), {
    refetchInterval: 60 * (60 * 1000),
    getNextPageParam: (lastpage) => {
      return lastpage.cursorNext;
    },
    staleTime: 60 * (60 * 1000),
    refetchOnWindowFocus: false,
  });

  return (
    <div>
      <HeroSection />
      <Categories />
      {isFetching && isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <div className="flex items-center justify-center flex-col gap-10">
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

export default Shorts;
