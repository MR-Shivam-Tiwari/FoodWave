import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/joy/Button";
import { DialogTitle, Drawer, ModalClose } from "@mui/joy";
import { useState } from "react";
function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  const [open, setOpen] = React.useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Check the window width and update the isHidden state accordingly
      setIsHidden(window.innerWidth < 400);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [hoveredLinks, setHoveredLinks] = useState([
    false,
    false,
    false,
    false,
  ]);

  const linkStyles = {
    color: "black",
    textDecoration: "none",
    fontWeight:"500",
    transition:
      "color 0.3s, text-decoration 0.3s, font-size 0.3s, background-color 0.3s",
    fontSize: "16px", // Set your initial font size
    backgroundColor: "transparent", // Set your initial background color
  };

  const hoverStyles = {
    textDecoration: "underline",
    color: "black",
    
    fontSize: "18px", // Set your enlarged font size on hover
    // backgroundColor: "rgba(0, 0, 0, 0.1)", // Set your background color on hover
    // backdropFilter: "blur(0.5px)", // Add blur effect to background on hover
    fontWeight:"bold"
  };

  const handleMouseEnter = (index) => {
    const newHoveredLinks = [...hoveredLinks];
    newHoveredLinks[index] = true;
    setHoveredLinks(newHoveredLinks);
  };

  const handleMouseLeave = (index) => {
    const newHoveredLinks = [...hoveredLinks];
    newHoveredLinks[index] = false;
    setHoveredLinks(newHoveredLinks);
  };
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(
    window.innerWidth <= 767
  );
  return (
    <div className="text-warning ">
      {/* <nav className="navbar navbar-expand-lg bg-white border-bottom border-body">
        <div
          className="container-fluid "
          style={{ height: "50px", width: "100%" }}
        >
          <div className=" d-flex align-items-center justify-content-between">
            <div>
              <Link className="navbar-brand fs-1 fw-bold " to="/">
                <img
                  className="mb-2"
                  src="/Logo.png"
                  alt="FoodWave"
                  style={{ width: "100%", height: "150px" }}
                />
              </Link>
            </div>

           
          </div>
        </div>
      </nav> */}

      <nav className="navbar navbar-expand-lg">
        <div
          className="container-fluid d-flex align-items-center justify-content-between"
          style={{ height: "50px", width: "100%" }}
        >
          <div className="d-flex align-items-center gap-2">
            <div>
              <Button
                variant="soft"
                color="none"
                className=" px-0 d-lg-none "
                type="button"
                onClick={() => setOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                  style={{
                    fillRule: "evenodd",
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              </Button>
            </div>
            <div>
              <Link className=" " to="/">
                <img
                  className=""
                  src="/Logo.png"
                  alt="FoodWave"
                  style={{ width: "100%", height: "30px" }}
                />
              </Link>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2 d-none d-lg-block  ">
            <Link
              variant="plain "
              className="me-4"
              style={
                hoveredLinks[0] ? { ...linkStyles, ...hoverStyles } : linkStyles
              }
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave(0)}
            >
              Home
            </Link>
            <Link
            className="me-4"
              style={
                hoveredLinks[1] ? { ...linkStyles, ...hoverStyles } : linkStyles
              }
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave(1)}
            >
              Offers
            </Link>
            <Link
            className="me-4"
              style={
                hoveredLinks[2] ? { ...linkStyles, ...hoverStyles } : linkStyles
              }
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => handleMouseLeave(2)}
            >
              Food
            </Link>
            <Link
            className="me-4"
              style={
                hoveredLinks[3] ? { ...linkStyles, ...hoverStyles } : linkStyles
              }
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={() => handleMouseLeave(3)}
            >
              Services
            </Link>

            {localStorage.getItem("authToken") ? (
              <Link
              className="me-3"
                style={
                  hoveredLinks[4]
                    ? { ...linkStyles, ...hoverStyles }
                    : linkStyles
                }
                onMouseEnter={() => handleMouseEnter(4)}
                onMouseLeave={() => handleMouseLeave(4)}
              >
                My Orders
              </Link>
            ) : (
              ""
            )}
          </div>

          <Drawer
            style={{ width: "100%", backgroundColor: "black" }}
            open={open}
            onClose={() => setOpen(false)}
          >
            <ModalClose />
            <DialogTitle>
              <div className="text-center m-auto py-5">
                <div className="mb-4" onClick={() => setOpen(false)}>
                  <Link
                  // Set text color to black
                  >
                    HOME
                  </Link>
                </div>
                <div onClick={() => setOpen(false)}>
                  <Link
                    style={{ color: "black" }} // Set text color to black
                    to="/about"
                  >
                    About Us
                  </Link>
                </div>
              </div>
            </DialogTitle>
          </Drawer>

          <div className="me-4 d-none d-lg-block ">
            {!localStorage.getItem("authToken") ? (
              <form className="d-flex" role="search">
                <Link className="" to="/login">
                  <Button
                    style={{ backgroundColor: "#4f7b6c" }}
                    variant="solid"
                    color="warning"
                    className="btn btn-outline-warning rounded-5"
                    type="submit"
                  >
                    Login
                  </Button>
                </Link>
                <Link className="" to="/register">
                  <Button
                    style={{ backgroundColor: "#4f7b6c" }}
                    variant="solid"
                    color="warning"
                    className=" ms-2 btn btn-outline-warning rounded-5"
                    type="submit"
                  >
                    Register
                  </Button>
                </Link>
              </form>
            ) : (
              <div className=" d-flex align-items-center gap-3 me-4">
                <button
                  className=" border-0 p-2 d-flex align-items-center  "
                  style={{
                    borderRadius: "150px",
                    backgroundColor: "#538775",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    color="white"
                    fill="currentColor"
                    class="bi bi-suit-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                  </svg>
                </button>
                <button
                  className=" border-0 p-2 d-flex align-items-center  "
                  style={{
                    borderRadius: "150px",
                    backgroundColor: "#538775",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    color="white"
                    fill="currentColor"
                    class="bi bi-handbag"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2m3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6z" />
                  </svg>
                </button>
                <button
                  className=" border-0 p-2 d-flex align-items-center  "
                  style={{
                    borderRadius: "150px",
                    backgroundColor: "#538775",
                  }}
                  onClick={handleLogout}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    color="white"
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
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
