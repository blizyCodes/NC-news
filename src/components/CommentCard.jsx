import { CommentDeletion } from "./CommentDeletion";

export const CommentCard = ({
  comment: { comment_id, body, votes, author, created_at },
  setDeleted,
  setArticle,
  setErr,
}) => {
  const date = new Date(created_at);
  return (
    <li className="commentCard">
      <p>
        <b> {author} </b>
        <br /> {date.toLocaleString()}
      </p>
      <p className="commentCard__body">{body}</p>
      <p>
        Votes: <b>{votes}</b>{" "}
        <CommentDeletion
          commentId={comment_id}
          author={author}
          setDeleted={setDeleted}
          setArticle={setArticle}
          setErr={setErr}
        />
      </p>
    </li>
  );
};
