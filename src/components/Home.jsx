import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to NC news</h1>
      <p className="home--p">
        Please
        <Link id="home--link" to="/articles">
          {" "}
          see all articles
        </Link>{" "}
        or select a topic on the right if you wish to be enlightened.{" "}
      </p>
      <p>
        Made by donblizy - <a href="https://github.com/donblizy">GitHub</a>
      </p>
    </div>
  );
};
