import { Link } from "react-router-dom";

export const Navigator = () => {
  return (
    <nav>
      <Link className="navigator" to="/articles">
        {" "}
        All Articles{" "}
      </Link>
    </nav>
  );
};
