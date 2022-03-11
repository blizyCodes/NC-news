import { Link } from "react-router-dom";

export const Header = ({ loggedInUser }) => {
  return (
    <header className="header">
      <Link to="/" className="header__H3">
        <h3>NC News</h3>
        <p id="headerH3">...for news addicts by news addicts.</p>
      </Link>
      <Link className="header__user" to="/users">
        <p> {loggedInUser === null ? "Log In" : loggedInUser} </p>
      </Link>
    </header>
  );
};
