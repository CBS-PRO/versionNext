import React from "react";
import Logout from "./Logout";
import { Outlet, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className="container bg-info p-5 ">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              CBS PRO
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a
                  className="nav-item nav-link active"
                  href=""
                  onClick={() => navigate("/")}
                >
                  Home <span className="sr-only"></span>
                </a>
              </div>
            </div>
            <Logout />
          </nav>
        </div>
      </header>
      <div className="relative z-0 flex flex-1 overflow-hidden">
        <Outlet />
      </div>
    </>
  );
};

export default Header;
