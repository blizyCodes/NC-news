export const CommentCard = ({
  comment: { comment_id, body, votes, author, created_at },
}) => {
  const date = new Date(created_at);
  return (
    <li className="commentCard">
      <p>
        {author} <br /> {date.toLocaleString()}
      </p>
      <p className="commentCard__body">{body}</p>
      <p>Votes: {votes}</p>
    </li>
  );
};
