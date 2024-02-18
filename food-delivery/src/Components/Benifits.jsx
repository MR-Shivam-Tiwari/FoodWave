import React from "react";
import order from "./Images/phone_order.png";
import best from "./Images/Best_Quality.png";
import Delever from "./Images/Bike_Delevery.png";
function Benifits() {
  return (
    <div className="container p-4 px-5 mb-5 " style={{marginTop:"100px"}}>
      <div className="d-flex align-items-center justify-content-between gap-5">
        <div className="">
          <div className="d-flex align-items-center justify-content-center ">
            <img
              src={order}
              alt=""
              className="p-3"
              style={{
                width: "70px",
                height: "70px",
                objectFit: "cover",
                backgroundColor: "#f5f7ec",
                borderRadius: "50%",
              }}
            />
          </div>
          <div className="mt-4 text-center">
            <h2>Easy To Order</h2>
            <p style={{ color: "gray", fontSize: "13px" }}>
            Experience the Order Your Food offers a seamless experience with your intuitive
              navigation and secure transactions.
            </p>
          </div>
        </div>
        <div>
          {" "}
          <div className=" d-flex align-items-center justify-content-center  ">
            <img
              src={Delever}
              className="p-3"
              alt=""
              style={{
                width: "70px",
                height: "70px",
                backgroundColor: "#f5f7ec",
                borderRadius: "50%",
              }}
            />
          </div>
          <div className="text-center mt-4">
            <h2>Fastest Delivery</h2>
            <p style={{ color: "gray", fontSize: "13px" }}>
              Experience the convenience of your seamless  – browsing, secure
              transactions,lightning-fast delivery, all at your fingertips.
            </p>
          </div>
        </div>
        <div>
          {" "}
          <div className=" d-flex align-items-center justify-content-center  ">
            <img
              src={best}
              alt=""
              className="p-3"
              style={{
                width: "70px",
                height: "70px",
                objectFit: "cover",
                backgroundColor: "#f5f7ec",
                borderRadius: "50%",
              }}
            />
          </div>
          <div className="mt-4 text-center">
            <h2>Best Quality</h2>
            <p style={{ color: "gray", fontSize: "13px" }}>
              Discover top dining with Easy to Order Food relish
              delicious,high-quality dishes designed for  ultimate
              satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benifits;
