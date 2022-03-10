import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api";
import { ArticleCard } from "./ArticleCard";
import { Order } from "./Order";
import { SortBy } from "./SortBy";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    api.getArticles(sortBy, order, topic).then((articles) => {
      setIsLoading(false);
      setArticles(articles);
    });
  }, [topic, sortBy, order]);

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
};
