import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div>
      <h2>Oops, it looks like you're lost. </h2>
      <h3>Head back to Home and try finding your way! :)</h3>
      <Link to="/"> Home </Link>
    </div>
  );
};
