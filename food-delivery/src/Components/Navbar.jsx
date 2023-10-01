import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/joy/Button";
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid " style={{ height: "40px" }}>
        <Link className="navbar-brand fs-1 fw-bold " to="/">
          <img
            className="mb-2"
            src="/FoodWave_Logo.png"
            alt="FoodWave"
            style={{ width: "100%", height: "60px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Link
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Another action
                  </Link>
                </li>
                {/* <li><hr className="dropdown-divider"></li> */}
                <li>
                  <Link className="dropdown-item" to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <Link className="" to="/login">
              <Button
                style={{ backgroundColor: "#f3693a" }}
                variant="solid"
                color="warning"
                className="btn btn-outline-warning"
                type="submit"
              >
                Login
              </Button>
            </Link>
            <Link className="" to="/register">
              <Button
                style={{ backgroundColor: "#f3693a" }}
                variant="solid"
                color="warning"
                className=" ms-2 btn btn-outline-warning"
                type="submit"
              >
                Register
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
