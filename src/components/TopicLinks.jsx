import { Link } from "react-router-dom";

export const TopicList = ({ topic }) => {
  return <Link className="navigator__link"to={`topics/${topic}`}>{"  "}{topic}{"  "}</Link>;
};
