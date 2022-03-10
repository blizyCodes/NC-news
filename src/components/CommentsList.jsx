import { CommentCard } from "./CommentCard";

export const CommentList = ({ isLoading, comments }) => {
  return isLoading ? (
    <h2>Fetching comments..</h2>
  ) : (
    <ol>
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
      <a id="goToTop" href="#top">
        Go to Top
      </a>
    </ol>
  );
};
