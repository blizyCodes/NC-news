import { Link } from "react-router-dom";

export const Header = ({ loggedInUser }) => {
  return (
    <header className="header">
      <div>
        <h3>
          <Link to="/" className="header--logo">
            NC News
          </Link>
        </h3>
        <p>
          <Link to="/" className="header--logo">
            ...for news addicts by news addicts.
          </Link>
        </p>
      </div>
      <div id="headerImg">
        <img
          className="header--img"
          src="https://cdn.pixabay.com/photo/2016/05/13/13/33/newspaper-1389980_1280.png"
          alt=""
        ></img>
      </div>
      <div className="header--username">
        <p>
          <Link id="usernameLink" to="/users">
            {loggedInUser === null ? "Log In" : loggedInUser}
          </Link>
        </p>
      </div>
    </header>
  );
};
