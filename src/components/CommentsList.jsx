import { CommentCard } from "./CommentCard";

export const CommentList = ({ isLoading, comments, setComments, setArticle, setErr }) => {
  return isLoading ? (
    <h2>Fetching comments..</h2>
  ) : (
    <ol className="commentList">
      {comments.map((comment) => {
        return (
          <CommentCard
            key={comment.comment_id}
            comment={comment}
            setComments={setComments}
            setArticle={setArticle}
            setErr={setErr}
          />
        );
      })}
      <a id="goToTop" href="#top">
        Go to Top
      </a>
    </ol>
  );
};
