import { FetchYoutube } from "../api/fetchYoutube";
import { Card, Categories, Error, Loading } from "../components";
import { useGlobalState } from "../hooks/StateProvider";
import { HeroSection } from "../layout";
import { useQuery } from "react-query";
import { TContent, TDataYoutube } from "../types/Types";

const Home = () => {
  const { categories } = useGlobalState();
  const getDataYoutube = async (): Promise<TDataYoutube> => {
    const res = await FetchYoutube(`search/?q=${categories}&hl=id`);

    return res;
  };

  const { data, isSuccess, isError, isLoading, isFetching } = useQuery(["dataYoutube", categories], getDataYoutube, {
    refetchInterval: 60 * (60 * 1000),
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
          <div className="flex mt-10 flex-wrap items-center justify-center gap-3">
            {data.contents.map((content: TContent, idx: number) => (
              <Card content={content} key={idx} />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default Home;
