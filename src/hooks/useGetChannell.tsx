import { useQuery } from "react-query";
import { TChannel } from "../types/Types";
import { FetchYoutube } from "../api/fetchYoutube";

const useGetChannell = (id: string | any) => {
  const getDetailChannel = async (): Promise<TChannel | any> => {
    const res = await FetchYoutube(`channel/details/?id=${id}&hl=id`);
    return res;
  };
  const { data, isSuccess, isLoading, isFetching, isError } = useQuery(["getDetailChannel", id], getDetailChannel, {
    refetchOnWindowFocus: false,
    staleTime: 60 * (60 * 1000),
    refetchInterval: 60 * (60 * 1000),
  });
  return {
    data,
    isLoading,
    isError,
    isFetching,
    isSuccess,
  };
};

export default useGetChannell;
