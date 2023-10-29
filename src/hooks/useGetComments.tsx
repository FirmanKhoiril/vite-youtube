import { useInfiniteQuery } from "react-query";
import { FetchYoutube } from "../api/fetchYoutube";
import { TComments } from "../types/Types";

const useGetComments = (id: string | any) => {
  const getRelatedComments = async (pageParam: string): Promise<TComments | any> => {
    const res = await FetchYoutube(`video/comments/?id=${id}&hl=id&cursor=${pageParam}`);
    return res;
  };

  const { data, isFetching, isError, fetchNextPage, hasNextPage, isLoading, isSuccess, isFetchingNextPage } = useInfiniteQuery(["videoComments", id], ({ pageParam = "" }) => getRelatedComments(pageParam), {
    refetchOnWindowFocus: false,
    refetchInterval: 60 * (60 * 1000),
    staleTime: 60 * (60 * 1000),
    getNextPageParam: (lastPage) => {
      return lastPage.cursorNext;
    },
  });
  return {
    data,
    isFetching,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isSuccess,
    isFetchingNextPage,
  };
};

export default useGetComments;
