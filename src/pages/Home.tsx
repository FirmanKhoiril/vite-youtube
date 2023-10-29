import { Card, Categories, Error, Loading } from "../components";
import { useGlobalState } from "../hooks/StateProvider";
import { TContent } from "../types/Types";
import useGetDataHome from "../hooks/useGetDataHome";

const Home = () => {
  const { categories } = useGlobalState();

  const { isError, isFetching, isFetchingNextPage, isLoading, isSuccess, data, hasNextPage, fetchNextPage } = useGetDataHome(categories);
  if (isError) return <Error />;

  return (
    <div>
      <Categories />
      {isLoading && isFetching && <Loading />}

      {isSuccess && (
        <div className="flex items-center justify-center flex-col gap-10">
          <div className="flex mt-10 flex-wrap items-center justify-center gap-4">{data?.pages.map((page) => page.contents.map((content: TContent, idx: number) => <Card content={content} key={idx} />))}</div>
          {isFetchingNextPage && <Loading />}
          {hasNextPage && (
            <button type="button" onClick={() => fetchNextPage()} className="gradient rounded-md hover:text-white py-2 px-4">
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
