import React from "react";
import { Button, Divider, FormLabel } from "@mui/joy";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import sidebarimg from "./LoginSideImage.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("required*"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});
function Login() {
  const navigate = useNavigate();

  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("https://food-wave-chi.vercel.app/api/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: details.email,
          password: details.password,
        }),
      });

      const json = await response.json();

      if (!json.success) {
        alert("Invalid Credentials");
      } else {
        localStorage.setItem("authToken", json.authToken);
        navigate("/");
        alert("Login Successful");
      }
    } catch (error) {
      console.error(error);
    }
  }
  // const handleChange = (event) => {
  //   setdetails({ ...details, [event.target.name]: event.target.value });
  // };

  return (
    <div>
      <div className="  ">
        <div className="row">
          <div className="col d-none d-lg-block ">
            <div className="">
              <img
                className=""
                src={sidebarimg}
                alt="logo"
                style={{
                  height: "570px",
                  width: "550px",
                }}
              />
            </div>
          </div>
          <div className="col ">
            <div
              className="d-flex align-items-center justify-content-center p-3  "
              style={{ marginTop: "120px" }}
            >
              <div className="      ">
                <h3 className="text-start mb-2 font-weight-bold">
                  Welcome Back{" "}
                </h3>
                <p className="text-start mb-3 fs-13 text-dark font-weight-bold w-75 ">
                  The faster you fill up, the faster you get a ticket
                </p>
                <div className="">
                  <form onSubmit={handleSubmit}>
                    <div>
                      <FormLabel className="fw-bold">Email*</FormLabel>
                      <input
                        placeholder="Enter your email"
                        style={{
                          border: "1px solid  #cf4b3f",
                          borderRadius: "5px",
                          width: "350px",
                        }}
                        className="mb-3 p-2"
                        name="email"
                        value={details.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <FormLabel className="fw-bold">Password*</FormLabel>
                      <input
                        type="text"
                        placeholder="Enter your password"
                        variant="outlined"
                        className="p-2"
                        name="password"
                        value={details.password}
                        onChange={handleChange}
                        style={{
                          border: "1px solid  #cf4b3f",
                          borderRadius: "5px",
                          width: "350px",
                        }}
                      />
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                      <Button
                        type="submit"
                        color="primary"
                        variant="solid"
                        className="mb-3 "
                        style={{ backgroundColor: "#cf4b3f" }}
                      >
                        Login
                      </Button>
                    </div>
                  </form>
                </div>
                <p className="text-center text-dark ">
                  Don't have an account?{" "}
                  <strong style={{ textDecoration: "underline" }}>
                    {" "}
                    <Link to="/register">Register</Link>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
