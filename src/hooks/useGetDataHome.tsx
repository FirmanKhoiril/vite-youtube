import { useInfiniteQuery } from "react-query";
import { TDataYoutube } from "../types/Types";
import { FetchYoutube } from "../api/fetchYoutube";

const useGetDataHome = (categories: string) => {
  const getDataYoutube = async (pageParam: string): Promise<TDataYoutube | any> => {
    const res = await FetchYoutube(`search/?q=${categories}&hl=id&cursor=${pageParam}`);

    return res;
  };

  const { data, isSuccess, isError, isLoading, isFetching, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(["dataYoutube", categories], ({ pageParam = "" }) => getDataYoutube(pageParam), {
    refetchInterval: 60 * (60 * 1000),
    getNextPageParam: (lastpage) => {
      return lastpage.cursorNext;
    },
    staleTime: 60 * (60 * 1000),
    refetchOnWindowFocus: false,
  });
  return {
    data,
    isSuccess,
    isLoading,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    isError,
    fetchNextPage,
  };
};

export default useGetDataHome;
