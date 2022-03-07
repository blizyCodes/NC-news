import { Link } from "react-router-dom";
export const Header = () => {
  return (
   <header className="header">
     <Link to="/" id="headerH3">
        <h3>NC News</h3>
        <p id="headerH3">...for news addicts by news addicts.</p>
      </Link>
   </header>
  );
};
