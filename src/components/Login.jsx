import { useState, useEffect } from "react";
import * as api from "../api";
import { useNavigate } from "react-router-dom";

export const Login = ({ setLoggedInUser }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    api.getUsers().then((users) => {
      setUsers(users);
    });
  }, []);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Please select user from below:</h2>
      <ul>
        {users.map(({ username }) => {
          return (
            <li
              className="user"
              onClick={() => {
                setLoggedInUser(username);
                navigate("/");
              }}
              key={username}
            >
              {username}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
