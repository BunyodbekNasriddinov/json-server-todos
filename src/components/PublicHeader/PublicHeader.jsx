import React from "react";
import { Link } from "react-router-dom";

export const PublicHeader = () => {
  return (
    <header className="bg-dark py-3">
      <div className="container">
        <div className="d-flex align-items-center">
          <Link className="text-white fs-4 text-decoration-none" to="/">
            TODO
          </Link>
          <nav className="ms-auto">
            <ul className="list-unstyled d-flex align-items-center">
              <li>
                <Link
                  className="btn btn-outline-primary text-decoration-none"
                  to="/login"
                >
                  SIGN IN
                </Link>
              </li>
              <li>
                <Link
                  className="btn btn-outline-success ms-3 text-decoration-none"
                  to="/register"
                >
                  SIGN UP
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
