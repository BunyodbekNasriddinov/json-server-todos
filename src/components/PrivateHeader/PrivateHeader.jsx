import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { TokenContext } from "../../context/TokenContext";
import { UserContext } from "../../context/UserContext";

export const PrivateHeader = () => {
  const { user, setUser } = useContext(UserContext);
  const { setToken } = useContext(TokenContext);
  return (
    <header className="bg-dark py-3">
      <div className="container">
        <div className="d-flex align-items-center">
          <Link className="text-white fs-4 text-decoration-none" to="/">
            LOGO
          </Link>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white ms-3"
                : "text-white ms-3 text-decoration-none"
            }
            to="/todos"
          >
            Todos
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white ms-3"
                : "text-white ms-3 text-decoration-none"
            }
            to="/users"
          >
            Users
          </NavLink>
          <button
            onClick={() => {
              setUser("");
              setToken("");
            }}
            className="btn btn-warning ms-auto rounded-circle px-2 py-2"
          >
            {user.first_name.at(0).toUpperCase() +
              "." +
              user.last_name.at(0).toUpperCase()}
          </button>
        </div>
      </div>
    </header>
  );
};
