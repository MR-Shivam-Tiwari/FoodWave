import React from "react";
import Health from "./Images/Health.png";
import { Button } from "@mui/joy";
function HealthyFood() {
  return (
    <div className="container mb-5" style={{ marginTop: "70px" }}>
      <div className="d-flex p-4">
        <div>
          <img
            src={Health}
            alt=""
            style={{ width: "400px", height: "450px" }}
          />
        </div>
        <div className="p-5 " style={{ marginTop: "45px" }}>
          <h1>Health Food To Live A Healthier Life In The Future</h1>
          <p className="mt-4" style={{fontSize:"15px", color:"gray"}}>
            Explore our menu of wholesome options, featuring nourishing
            ingredients that promote well-being. Indulge in flavors that not only satisfy
            your taste buds but also contribute to your overall vitality.
          </p>
          <Button className="rounded-5 px-5 mt-4" size="lg" style={{background:"#548776", fontSize:"14px"}}>Explore More</Button>
        </div>
      </div>
    </div>
  );
}

export default HealthyFood;
