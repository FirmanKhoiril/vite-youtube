import { useInfiniteQuery } from "react-query";
import { IId, TComments, TCommentsDetail } from "../types/Types";
import { FetchYoutube } from "../api/fetchYoutube";
import { Error, Loading } from ".";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Comments = ({ id }: IId) => {
  const getRelatedComments = async (pageParam: string): Promise<TComments> => {
    const res = await FetchYoutube(`video/comments/?id=${id}&hl=id&cursor=${pageParam}`);
    return res;
  };

  const { data, isFetching, isError, fetchNextPage, hasNextPage, isLoading, isSuccess } = useInfiniteQuery(["videoComments", id], ({ pageParam = "" }) => getRelatedComments(pageParam), {
    refetchOnWindowFocus: false,
    refetchInterval: 60 * (60 * 1000),
    staleTime: 60 * (60 * 1000),
    getNextPageParam: (lastPage) => {
      return lastPage.cursorNext;
    },
  });

  console.log(data);

  return (
    <div>
      {isFetching && isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <div>
            {data.pages.map((page) =>
              page.comments.map((comment: TCommentsDetail, idx: number) => (
                <Link key={idx} to={`/channel/${comment.author.channelId}`} className="w-full my-8 gap-2 flex items-center">
                  <div className="flex gap-2 space-x-4 items-center">
                    <LazyLoadImage effect="blur" loading="lazy" src={comment.author.avatar[0].url} alt={comment.author.title} width={37} height={37} className=" rounded-full min-h-[37px] min-w-[37px]" />
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-2 items-center">
                        <h2 className="font-play ">{comment.author.title}</h2>
                        <p className="text-sm text-slate-600">{comment.publishedTimeText}</p>
                      </div>
                      <p className="text-sm font-poppins tracking-wide">{comment.content}</p>
                    </div>
                  </div>
                </Link>
              ))
            )}
            {hasNextPage && (
              <button
                type="button"
                name="nextComment"
                aria-label="nextComment"
                className="px-3 py-2 my-4 gradient hover:text-white rounded-md"
                onClick={() => {
                  fetchNextPage();
                }}
              >
                Next Comments
              </button>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Comments;
