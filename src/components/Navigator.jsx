import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as api from "../api";
import { TopicList } from "./TopicLinks";

export const Navigator = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    api.getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <nav className="navigator">
      {topics.map(({ slug }) => {
        return <TopicList key={slug} topic={slug} />;
      })}
      <Link className="navigator--link--allArticles" to="/articles">
        See All Articles
      </Link>
    </nav>
  );
};
