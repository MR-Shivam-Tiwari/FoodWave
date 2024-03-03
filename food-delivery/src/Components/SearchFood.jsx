import React, { useEffect, useState } from "react";
import SearchImg from "./Search.png";
import { Input } from "@mui/joy";
function SearchFood({ search, onChange }) {
  return (
    <div className="container-fluid ">
      <div
        className="d-flex p-2 rounded-4  mb-4"
        style={{ backgroundColor: "#e6e8dd" }}
      >
        <div className="p-5">
          <div className=" mb-3 " style={{ marginTop: "55px" }}>
            <h1 style={{ fontSize: "60px", fontWeight: "1000" }}>
              Savor the flavor,the true king of food search!
            </h1>
          </div>
          <div>
            <p className="mb-5" style={{ color: "gray" }}>
              Explore a world of culinary delights on our food search platform,
              where diverse cuisines and trending options await, catering to
              every taste preference.
            </p>
          </div>
          <div>
            <div className="d-flex justify-content-center ">
              <input
                size="lg"
                className=" px-3 py-1 rounded-5 border-0 shadow-sm w-100"
                fullWidth
                placeholder="Search Food"
                value={search}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
        <div className="p-2 me-3">
          <img src={SearchImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SearchFood;
