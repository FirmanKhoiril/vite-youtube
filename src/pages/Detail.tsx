import { useParams } from "react-router-dom";
import { DetailData, Error, Loading } from "../components";
import useGetDetailVideo from "../hooks/useGetDetailVideo";

const Detail = () => {
  const { id } = useParams();
  const { isError, isFetching, isLoading, data, isSuccess } = useGetDetailVideo(id);

  if (isLoading && isFetching) return <Loading />;

  if (isError) return <Error />;
  return <>{isSuccess && <DetailData content={data} />}</>;
};

export default Detail;
