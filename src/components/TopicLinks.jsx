import { Link } from "react-router-dom";

export const TopicList = ({ topic }) => {
  return (
    
    <Link className="navigator--link" to={`topics/${topic}`}>
      {topic.charAt(0).toUpperCase() + topic.slice(1)}
    </Link>
  );
};
