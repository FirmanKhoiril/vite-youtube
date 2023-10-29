import { useInfiniteQuery } from "react-query";
import { FetchYoutube } from "../api/fetchYoutube";
import { TDataYoutube } from "../types/Types";

const useGetSearch = (search: string | any) => {
  const getDataYoutube = async (pageParam: string): Promise<TDataYoutube | any> => {
    const res = await FetchYoutube(`search/?q=${search}&hl=id&cursor=${pageParam}`);
    return res;
  };

  const { data, isFetching, isError, fetchNextPage, hasNextPage, isLoading, isSuccess, isFetchingNextPage } = useInfiniteQuery(["searchTerm", search], ({ pageParam = "" }) => getDataYoutube(pageParam), {
    refetchOnWindowFocus: false,
    refetchInterval: 60 * (60 * 1000),
    staleTime: 60 * (60 * 1000),
    getNextPageParam: (lastPage: any) => {
      return lastPage.cursorNext;
    },
  });

  return { data, isFetching, isError, fetchNextPage, hasNextPage, isLoading, isSuccess, isFetchingNextPage };
};

export default useGetSearch;
