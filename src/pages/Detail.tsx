import { useParams } from "react-router-dom";
import { DetailData, Error, Loading } from "../components";
import { useQuery } from "react-query";
import { FetchYoutube } from "../api/fetchYoutube";
import { TDetail } from "../types/Types";

const Detail = () => {
  const { id } = useParams();
  const getDataYoutube = async (): Promise<TDetail> => {
    const res = await FetchYoutube(`video/details/?id=${id}&hl=id`);

    return res;
  };

  const { data, isSuccess, isError, isLoading, isFetching } = useQuery(["dataYoutube", id], getDataYoutube, {
    refetchInterval: 60 * (60 * 1000),
    staleTime: 60 * (60 * 1000),
    refetchOnWindowFocus: false,
  });

  return (
    <div>
      {isFetching && isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <div className="">
            <DetailData content={data} />
          </div>
        )
      )}
    </div>
  );
};

export default Detail;
