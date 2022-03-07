import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
import { useContext } from "react";
export const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <header className="header">
      <Link to="/" id="header__H3">
        <h3>NC News</h3>
        <p id="headerH3">...for news addicts by news addicts.</p>
      </Link>
      <p className="header__user"> User: {loggedInUser} </p>
    </header>
  );
};
