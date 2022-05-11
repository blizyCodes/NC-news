import { useState } from "react";

import * as api from "../api";

export const CommentPoster = ({
  articleId,
  setComments,
  setArticle,
  setErr,
  loggedInUser,
}) => {
  const [newComment, setNewComment] = useState("");
  const [postedStatus, setPostedStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPostedStatus("pending");
    const toBePosted = { username: loggedInUser, body: newComment };
    api
      .postCommentByArticleId(articleId, toBePosted.username, toBePosted.body)
      .then((comment) => {
        setPostedStatus("done");
        setNewComment("");
        setArticle((currArticle) => {
          const updatedArticle = {
            ...currArticle,
          };
          updatedArticle.comment_count++;
          return updatedArticle;
        });
        setComments((currComments) => {
          const updatedComments = [...currComments];
          updatedComments.push(comment);
          return updatedComments;
        });
      })
      .catch((err) => {
        setArticle((currArticle) => {
          const updatedArticle = {
            ...currArticle,
          };
          updatedArticle.comment_count--;
          return updatedArticle;
        });
        setErr(
          "Something went wrong, please try again. Please also ensure you are logged in."
        );
      });
  };

  return (
    <form className="form--commentToPost" onSubmit={handleSubmit}>
      <label htmlFor="commentToPost">Post Comment </label>
      <input
        id="commentToPost"
        type="text"
        aria-label="comment to post"
        value={newComment}
        onChange={(e) => {
          setNewComment(e.target.value);
          setPostedStatus("");
        }}
      ></input>
      <button
        className="singleArticle--button--submitComment"
        disabled={
          newComment === "" ||
          postedStatus === "pending" ||
          newComment.length > 750 ||
          newComment.length < 2
        }
        type="submit"
      >
        {" "}
        {newComment === "" || newComment.length < 2
          ? "Type to submit"
          : "Submit Comment"}{" "}
      </button>
      {postedStatus === "done" && <p id="postVerification">Comment posted!</p>}
      {postedStatus === "pending" && (
        <p id="postVerificationPending">Comment being posted..</p>
      )}
      <p> Characters: {newComment.length}/750. </p>
    </form>
  );
};
