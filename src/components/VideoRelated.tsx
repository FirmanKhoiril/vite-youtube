import { useInfiniteQuery } from "react-query";
import { IId, TContent, TDataYoutube } from "../types/Types";
import { FetchYoutube } from "../api/fetchYoutube";
import { Card, Error, Loading } from ".";

const VideoRelated = ({ id }: IId) => {
  const getRelatedVideo = async (pageParam: string): Promise<TDataYoutube> => {
    const res = await FetchYoutube(`video/related-contents/?id=${id}&hl=id&cursor=${pageParam}`);
    return res;
  };

  const { data, isFetching, isError, fetchNextPage, hasNextPage, isLoading, isSuccess } = useInfiniteQuery(["RelatedVideo", id], ({ pageParam = "" }) => getRelatedVideo(pageParam), {
    refetchOnWindowFocus: false,
    refetchInterval: 60 * (60 * 1000),
    staleTime: 60 * (60 * 1000),
    getNextPageParam: (lastPage) => {
      return lastPage.cursorNext;
    },
  });

  return (
    <div>
      {isFetching && isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <div className="flex mt-10 flex-col flex-wrap items-center justify-center gap-4">
            <h1 className="text-4xl text-center font-inter tracking-wider mb-2">You might also Like</h1>
            {data.pages.map((page) => page.contents.map((content: TContent, idx: number) => <Card content={content} key={idx} />))}
            {hasNextPage && (
              <button
                type="button"
                name="nextPage"
                aria-label="nextPage"
                className="px-3 py-2 bg-pink-500 hover:bg-white hover:text-pink-500 hover:border-pink-500 transition_all border-transparent border text-white rounded-md"
                onClick={() => {
                  fetchNextPage();
                }}
              >
                Next Card
              </button>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default VideoRelated;
