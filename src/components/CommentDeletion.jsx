import * as api from "../api";
import { useState } from "react";

export const CommentDeletion = ({
  setArticle,
  setErr,
  commentId,
  setComments,
}) => {
  const [deletedStatus, setDeletedStatus] = useState("");

  const handleClick = (e) => {
    setDeletedStatus("pending");
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
        setComments((currComments) => {
          return currComments.filter((comment) => {
            return comment.comment_id !== commentId;
          });
        });
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
          "Something went wrong, please try again. Please also ensure you are logged in."
        );
      });
  };
  return (
    <>
      <button
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
