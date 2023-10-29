import { useQuery } from "react-query";
import { FetchYoutube } from "../api/fetchYoutube";
import { TDetail } from "../types/Types";
import { toast } from "sonner";

const useGetDetailVideo = (id: string | any) => {
  const getDataYoutube = async (): Promise<TDetail | any> => {
    try {
      const res = await FetchYoutube(`video/details/?id=${id}&hl=id`);

      return res;
    } catch (error) {
      toast.error("Error");
    }
  };

  const { data, isSuccess, isError, isLoading, isFetching } = useQuery(["dataYoutube", id], getDataYoutube, {
    refetchInterval: 60 * (60 * 1000),
    staleTime: 60 * (60 * 1000),
    refetchOnWindowFocus: false,
  });

  return {
    data,
    isError,
    isSuccess,
    isFetching,
    isLoading,
  };
};

export default useGetDetailVideo;
