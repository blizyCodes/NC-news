import { Link } from "react-router-dom";
import { CollapseWrapper } from "./CollapseWrapper";

export const ArticleCard = ({
  article: {
    article_id,
    title,
    author,
    topic,
    comment_count,
    created_at,
    votes,
  },
}) => {
  const date = new Date(created_at);
  return (
    <li className="articleCard">
      <h2>
        <Link className="articleCard--link" to={`/articles/${article_id}`}>
          {title}
        </Link>
      </h2>
      <p>
        by{" "}
        <b>
          <i>{author}</i>
        </b>
      </p>
      <CollapseWrapper>
        <p>Topic: {topic.charAt(0).toUpperCase() + topic.slice(1)}</p>
        <p>Comments: {comment_count}</p>
        <p>Posted: {date.toLocaleString()}</p>
        <p>Votes: {votes}</p>
      </CollapseWrapper>
    </li>
  );
};
