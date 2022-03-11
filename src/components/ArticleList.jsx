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
  const [err, setErr] = useState(null);
  const [errCode, setErrCode] = useState(null);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const navigate = useNavigate();

  useEffect(() => {
    api
      .getArticles(sortBy, order, topic)
      .then((articles) => {
        setIsLoading(false);
        setArticles(articles);
      })
      .catch((err) => {
        setErr(err.response.data.msg);
        setErrCode(err.response.status);
        setIsLoading(false);
      });
  }, [topic, sortBy, order]);

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
              : () => {setErr(null)}
          }
        >
          {" "}
          Back{" "}
        </button>
      </div>
    ); else {
  return isLoading ? (
    <h2>Just getting that for you ...</h2>
  ) : (
    <div className="articlesPage">
      <SortBy setSortBy={setSortBy} />
      <Order setOrder={setOrder} />

      <ul className="articleList">
        {articles.map((article) => {
          return <ArticleCard key={article.title} article={article} />;
        })}
      </ul>
    </div>
  );
}};
