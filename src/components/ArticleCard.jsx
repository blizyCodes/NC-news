export const ArticleCard = ({
  article: { title, author, topic, comment_count, created_at, votes },
}) => {
  const date = new Date(created_at);
  return (
    <li className="articleCard">
      <h2>{title}</h2>
      <h3>Topic: {topic}</h3>
      <h3>by {author}</h3>
      <p>Comments: {comment_count}</p>
      <p>Posted: {date.toUTCString()}</p>
      <p>Votes: {votes}</p>
    </li>
  );
};
