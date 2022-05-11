import { CommentDeletion } from "./CommentDeletion";
import { UserContext } from "../contexts/User";
import { useContext } from "react";

export const CommentCard = ({
  comment: { comment_id, body, votes, author, created_at },
  setComments,
  setArticle,
  setErr,
}) => {
  const { loggedInUser } = useContext(UserContext);
  const date = new Date(created_at);
  return (
    <li className="commentCard">
      <p>
        <b> {author} </b>
        <br /> {date.toLocaleString()}
      </p>
      <p className="commentCard--body">{body}</p>
      <p>
        Votes: <b>{votes}</b>{" "}
        {loggedInUser === author && (
          <CommentDeletion
            commentId={comment_id}
            setComments={setComments}
            setArticle={setArticle}
            setErr={setErr}
          />
        )}
      </p>
    </li>
  );
};
