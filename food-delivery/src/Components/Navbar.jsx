import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/joy/Button";
function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
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
            {/*  */}
            {localStorage.getItem("authToken") ? (
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  My Orders
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
          {!localStorage.getItem("authToken") ? (
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
          ) : (
            <div className="">
              <Button variant="plain" className="me-2">
                My Cart &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart fw-bold"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </Button>
              <Button
                variant="plain"
                className="me-2 "
                // style={{ backgroundColor: "#f3693a" }}
                onClick={handleLogout}
              >
                Logout &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />
                </svg>
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
