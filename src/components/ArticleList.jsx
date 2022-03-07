import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api";
import { ArticleCard } from "./ArticleCard";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();
  
  useEffect(() => {
    if (!topic) {
      api.getArticles().then((articles) => {
        setIsLoading(false);
        setArticles(articles);
      });
    } else {
      api.getArticlesByTopic(topic).then((articles) => {
        setIsLoading(false);
        setArticles(articles);
      });
    }
  }, [topic]);

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
