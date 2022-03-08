import { CollapseWrapper } from "./CollapseWrapper";

export const ArticleCard = ({
  article: { title, author, topic, comment_count, created_at, votes },
}) => {
  const date = new Date(created_at);
  return (
    <li className="articleCard">
      <h2>{title}</h2>
      <p>by {author}</p>
      <CollapseWrapper>
        <p>Topic: {topic}</p>
        <p>Comments: {comment_count}</p>
        <p>Posted: {date.toUTCString()}</p>
        <p>Votes: {votes}</p>
      </CollapseWrapper>
    </li>
  );
};
