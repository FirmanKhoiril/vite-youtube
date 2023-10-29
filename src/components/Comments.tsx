import { ICommentImage, TCommentsDetail } from "../types/Types";
import { Error, Loading } from ".";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FaRegCommentDots } from "react-icons/fa";
import millify from "millify";
import { AiOutlineLike } from "react-icons/ai";
import useGetComments from "../hooks/useGetComments";

const Comments = ({ id, image, titleImage }: ICommentImage) => {
  const { isError, isFetching, isFetchingNextPage, isLoading, isSuccess, data, fetchNextPage, hasNextPage } = useGetComments(id);

  if (isError) return <Error />;

  if (isLoading && isFetching) return <Loading />;
  return (
    <>
      {isSuccess && (
        <div>
          {data?.pages.map((page) =>
            page.comments.map((comment: TCommentsDetail, idx: number) => (
              <div key={idx} className="w-full my-8 gap-2 flex items-center">
                <div className="flex gap-2 space-x-4 items-center">
                  <Link to={`/channel/${comment.author.channelId}`}>
                    <LazyLoadImage effect="blur" loading="lazy" src={comment.author.avatar[0].url} alt={comment.author.title} width={37} height={37} className=" rounded-full min-h-[37px] min-w-[37px]" />
                  </Link>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-2 items-center">
                      <h2 className="font-play ">{comment.author.title}</h2>
                      <p className="text-sm  text-slate-600 dark:text-slate-300">{comment.publishedTimeText}</p>
                    </div>
                    <p className="text-sm font-poppins tracking-wide">{comment.content}</p>
                    <div className="flex text-slate-600 dark:text-slate-300 items-center gap-1">
                      <p className="flex items-center gap-1 py-1 px-2 ">
                        <AiOutlineLike className="text-lg" />
                        {millify(comment.stats.votes) || "Don't have Like"}
                      </p>
                      <p className="flex items-center gap-1 py-1 px-2 ">
                        <FaRegCommentDots className="text-lg" />
                        {millify(comment.stats.votes) || "Don't have Comment"}
                      </p>
                      {comment.creatorHeart === true && (
                        <p className="flex items-center gap-1 py-1 px-2 ">
                          <LazyLoadImage src={image} width={30} height={30} alt={titleImage} />
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
          {isFetchingNextPage && <Loading />}
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
              Load More Comments
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Comments;
