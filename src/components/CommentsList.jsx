import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api";
import { CommentCard } from "./CommentCard";
import { CommentPoster } from "./CommentPoster";

export const CommentList = ({ article, setArticle, setErr, err }) => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [posted, setPosted] = useState(false);

  useEffect(() => {
    api.getCommentsByArticleId(article_id).then((comments) => {
      setIsLoading(false);
      setComments(comments);
    });
  }, [article_id, posted]);

  return isLoading ? (
    <h2>Fetching comments..</h2>
  ) : (
    <div>
      <CommentPoster
        articleId={article_id}
        setPosted={setPosted}
        article={article}
        setArticle={setArticle}
        setErr={setErr}
        err={err}
      />
      <ol>
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
        <a id="goToTop" href="#top">
          Go to Top
        </a>
      </ol>
    </div>
  );
};
