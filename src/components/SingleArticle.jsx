import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as api from "../api";
import { CommentsWrapper } from "./CommentsWrapper";
import { CommentList } from "./CommentsList";
import { ArticleVoting } from "./ArticleVoting";
import { CommentPoster } from "./CommentPoster";
import { UserContext } from "../contexts/User";

export const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [errCode, setErrCode] = useState(null);
  const { article_id } = useParams();
  const navigate = useNavigate();
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    Promise.all([
      api.getArticleById(article_id),
      api.getCommentsByArticleId(article_id),
    ])
      .then(([article, comments]) => {
        setIsLoading(false);
        setArticle(article);
        setComments(comments);
      })
      .catch((err) => {
        setErr(err.response.data.msg);
        setErrCode(err.response.status);
        setIsLoading(false);
      });
  }, [article_id]);

  const date = new Date(article.created_at);

  if (err)
    return (
      <div>
        <p>{err}</p>
        <button
          onClick={
            errCode === 404
              ? () => {
                  navigate("/");
                }
              : () => {
                  setErr(null);
                }
          }
        >
          {" "}
          Back{" "}
        </button>
      </div>
    );
  else {
    return isLoading ? (
      <h2>Just getting that for you ...</h2>
    ) : (
      <article className="singleArticle">
        <h1>{article.title}</h1>
        <dt>
          Topic:{" "}
          {article.topic && (
            <i>
              <b>
                {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
              </b>
            </i>
          )}
        </dt>

        <dt> {date.toLocaleString()}</dt>

        <dt>
          {" "}
          Votes: <b>{article.votes}</b>{" "}
        </dt>
        <ArticleVoting
          loggedInUser={loggedInUser}
          article_id={article_id}
          setArticle={setArticle}
          setErr={setErr}
        />

        <p className="singleArticle--body"> {article.body}</p>
        <dt>
          Author: <b>{article.author}</b>
        </dt>

        {loggedInUser && (
          <CommentPoster
            loggedInUser={loggedInUser}
            articleId={article_id}
            setComments={setComments}
            article={article}
            setArticle={setArticle}
            setErr={setErr}
            err={err}
          />
        )}
        <p className="singleArticle--comments">
          Comments: {article.comment_count}{" "}
        </p>
        <CommentsWrapper>
          <CommentList
            isLoading={isLoading}
            comments={comments}
            setComments={setComments}
            setArticle={setArticle}
            setErr={setErr}
          />
        </CommentsWrapper>
      </article>
    );
  }
};
