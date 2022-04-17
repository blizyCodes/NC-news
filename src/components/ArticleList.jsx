import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as api from "../api";
import { ArticleCard } from "./ArticleCard";
import { Order } from "./Order";
import { SortBy } from "./SortBy";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();
  const [previousTopic, setPreviousTopic] = useState(topic);
  const [err, setErr] = useState(null);
  const [errCode, setErrCode] = useState(null);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const [limit, setLimit] = useState(10);
  const [p, setP] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);
  const navigate = useNavigate();

  const increaseLimit = (increase) => {
    setLimit((currLimit) => {
      return currLimit + increase;
    });
  };

  useEffect(() => {
    if (topic && previousTopic !== topic) setLimit(10); //ensures limit is reset every time you change topic.
    if (!topic && previousTopic) setLimit(10); //ensures limit resets when going back to all articles from a topic.
    api
      .getArticles(sortBy, order, topic, limit, p)
      .then(([articles, total_count]) => {
        setIsLoading(false);
        setArticles(articles);
        setTotalArticles(total_count);
        setPreviousTopic(topic);
      })
      .catch((err) => {
        setErr(err.response.data.msg);
        setErrCode(err.response.status);
        setIsLoading(false);
      });
  }, [topic, sortBy, order, limit, p, previousTopic]);

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
      <div className="articlesPage">
        <SortBy setSortBy={setSortBy} />
        <Order setOrder={setOrder} />
        <p className="dropdown-sortBy-order">
          {" "}
          Total Articles: <b>{totalArticles}</b>
        </p>
        <ul className="articleList">
          {articles.map((article) => {
            return <ArticleCard key={article.title} article={article} />;
          })}
        </ul>
        <ul>
          {totalArticles > 0 && (
            <button
              className="articleCard__button"
              onClick={() => {
                increaseLimit(5);
              }}
            >
              {" "}
              Load More Articles{" "}
            </button>
          )}
        </ul>
      </div>
    );
  }
};
