import * as api from "../api";
import { UserContext } from "../contexts/User";
import { useContext, useState } from "react";

export const CommentDeletion = ({
  setArticle,
  setErr,
  commentId,
  author,
  setDeleted,
}) => {
  const [deletedStatus, setDeletedStatus] = useState("");
  const { loggedInUser } = useContext(UserContext);

  const handleClick = (e) => {
    e.preventDefault();
    setDeleted(false);
    setDeletedStatus("pending");
    if (loggedInUser === author) {
      setArticle((currArticle) => {
        const updatedArticle = {
          ...currArticle,
        };
        updatedArticle.comment_count--;
        return updatedArticle;
      });
      api
        .deleteCommentByCommentId(commentId)
        .then(() => {
          setDeletedStatus("");
          setDeleted(true);
        })
        .catch((err) => {
          setArticle((currArticle) => {
            const updatedArticle = {
              ...currArticle,
            };
            updatedArticle.comment_count++;
            return updatedArticle;
          });
          setErr(
            "Something went wrong, please try again. Please also ensure you are logged on."
          );
        });
    }
  };
  return (
    <>
      <button
        hidden={loggedInUser !== author}
        onClick={handleClick}
        className="deleteBtn"
        disabled={deletedStatus === "pending"}
      >
        {" "}
        Delete Comment{" "}
      </button>
      <span> {deletedStatus === "pending" ? "Deleting..." : " "}</span>
    </>
  );
};
