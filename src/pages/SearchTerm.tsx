import { useInfiniteQuery } from "react-query";
import { useParams } from "react-router-dom";
import { FetchYoutube } from "../api/fetchYoutube";
import { Card, Error, Loading } from "../components";
import { TContent, TDataYoutube } from "../types/Types";

const SearchTerm = () => {
  const { search } = useParams();

  const getDataYoutube = async (pageParam: string): Promise<TDataYoutube> => {
    const res = await FetchYoutube(`search/?q=${search}&hl=id&cursor=${pageParam}`);
    return res;
  };

  const { data, isFetching, isError, fetchNextPage, hasNextPage, isLoading, isSuccess } = useInfiniteQuery(["searchTerm", search], ({ pageParam = "" }) => getDataYoutube(pageParam), {
    refetchOnWindowFocus: false,
    refetchInterval: 60 * (60 * 1000),
    staleTime: 60 * (60 * 1000),
    getNextPageParam: (lastPage) => {
      return lastPage.cursorNext;
    },
  });

  return (
    <div>
      {isLoading && isFetching ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <div className="flex flex-wrap gap-10 items-center  flex-col justify-center mt-10">
            <h1 className=" font-inter transition_all text-4xl lg:text-[56px] hover:text-pink-500 ">Searching For {search}</h1>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              {data?.pages.map((page) =>
                page.contents.map((content: TContent, idx: number) => (
                  <div className="flex">
                    <Card key={idx} content={content} />
                  </div>
                ))
              )}
            </div>
            {hasNextPage && (
              <button type="button" onClick={() => fetchNextPage()} name="buttonNext" aria-label="buttonNext" className="gradient hover:text-white px-3 py-2 mb-10 pt-2 rounded-md">
                Next Page
              </button>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default SearchTerm;
