import { Link } from "react-router-dom";

export const TopicList = ({ topic }) => {
  return <Link className="navigator"to={`articlesfortopic/${topic}`}>{"  "}{topic}{"  "}</Link>;
};
