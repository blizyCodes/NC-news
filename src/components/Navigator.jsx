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
      <Link className="navigator__link" to="/articles">
        {" "}
        All Articles{" "}
      </Link>

      {topics.map(({ slug }) => {
        return <TopicList key={slug} topic={slug} />;
      })}
    </nav>
  );
};
