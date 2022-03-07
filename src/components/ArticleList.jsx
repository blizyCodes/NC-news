import { useEffect, useState } from "react";
import * as api from "../api";
import { ArticleCard } from "./ArticleCard";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.getArticles().then((articles) => {
      setIsLoading(false);
      setArticles(articles);
    });
  }, []);

  return isLoading ? (
    <h2>Just getting that for you ...</h2>
  ) : (
    <ul className="articleList">
      {articles.map((article) => {
        return <ArticleCard key={article.title} article={article} />;
      })}
    </ul>
  );
};
