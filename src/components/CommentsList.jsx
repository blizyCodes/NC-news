import { CommentCard } from "./CommentCard";

export const CommentList = ({ isLoading, comments, setDeleted, setArticle, setErr }) => {
  return isLoading ? (
    <h2>Fetching comments..</h2>
  ) : (
    <ol>
      {comments.map((comment) => {
        return (
          <CommentCard
            key={comment.comment_id}
            comment={comment}
            setDeleted={setDeleted}
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
