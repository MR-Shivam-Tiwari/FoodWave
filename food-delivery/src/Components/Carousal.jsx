import React from "react";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";

function Carousal() {
  return (
    <div>
      <div id="carouselExample" className="carousel slide" style={{objectFit:"contain !important", maxHeight:"700px"}}>
        <div className="carousel-inner">
          <div className="carousel-caption mb-5" style={{ zIndex: "10", marginBottom:"55px" }}>
            <form className="d-flex ">
              <Input size="lg" fullWidth placeholder="Search" />
              <Button className="ms-2" variant="soft">
                Search
              </Button>
            </form>
          </div>
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(70%" , marginTop:"-190px" , marginBottom:"-80px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1567337710282-00832b415979?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1930&q=80"
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(70%", marginTop:"-0px" , marginBottom:"-139px"  }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1614277786110-1a64e457c4c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(70%", marginTop:"-150px" , marginBottom:"-120px"  }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?w=996&t=st=1695982560~exp=1695983160~hmac=75629c282724464845532ee083c71928a8cb38a13f8e7c60b173885d0e93c5d8"
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(70%", marginTop:"-0px" , marginBottom:"-150px"  }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousal;
