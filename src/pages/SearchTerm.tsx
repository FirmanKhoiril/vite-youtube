import { useParams } from "react-router-dom";
import { Card, Error, Loading } from "../components";
import { TContent } from "../types/Types";
import useGetSearch from "../hooks/useGetSearch";

const SearchTerm = () => {
  const { search } = useParams();

  const { isLoading, isFetching, fetchNextPage, hasNextPage, isError, isFetchingNextPage, isSuccess, data } = useGetSearch(search);

  if (isLoading && isFetching) return <Loading />;

  if (isError) return <Error />;

  return (
    <div>
      {isSuccess && (
        <div className="flex flex-wrap gap-10 items-center  flex-col justify-center mt-10">
          <h1 className=" font-poppins tracking-tighter transition_all text-4xl lg:text-[56px]  ">Searching For {search}</h1>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {data?.pages.map((page) =>
              page.contents.map((content: TContent, idx: number) => (
                <div key={idx} className="flex">
                  <Card content={content} />
                </div>
              ))
            )}
          </div>
          {isFetchingNextPage && <Loading />}
          {hasNextPage && (
            <button type="button" onClick={() => fetchNextPage()} name="buttonNext" aria-label="buttonNext" className="gradient hover:text-white px-3 py-2 mb-10 pt-2 rounded-md tracking-wide">
              Load More...
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchTerm;
