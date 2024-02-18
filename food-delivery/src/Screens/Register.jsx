import { Button, FormLabel } from "@mui/joy";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import sidebarimg from "./LoginSideImage.png";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

function Register() {
  const navigate = useNavigate();
  const [state, setState] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [details, setdetails] = useState({
    name: "",
    email: "",
    password: "",
    geoloaction: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/newuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: details.name,
        email: details.email,
        password: details.password,
        location: details.geoloaction,
      }),
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Registration was successful, navigate to the login page

      navigate("/login");
    } else {
      alert("Enter Valid Credentials");
    }
  };
  const handleChange = (event) => {
    setdetails({ ...details, [event.target.name]: event.target.value });
  };

  const flippedVerticalImageStyle = {
    transform: "scaleX(-1)",
  };
  return (
    <div>
      <div className="  ">
        <div className="row" hidden={state}>
          <div className="col">
            <div
              className="d-flex align-items-center justify-content-center "
              style={{ marginTop: "8%" }}
            >
              <div className="" style={{}}>
                <h3 className="text-start mb-2 font-weight-bold">
                  Create account
                </h3>
                <p className="text-start mb-3 fs-13 text-dark font-weight-bold ">
                  Start your 30-day free trial. Cancel anytime.
                </p>

                <form onSubmit={handleSubmit}>
                  <FormLabel className="fw-bold">Name*</FormLabel>
                  <input
                    placeholder="Enter your Name"
                    variant="outlined"
                    color="white"
                    style={{
                      width: "350px",
                      border: "1px solid #cf4b3f",
                      borderRadius: "5px",
                    }}
                    name="name"
                    className=" mb-3 p-2"
                    value={details.name}
                    onChange={handleChange}
                    //   {...formik.getFieldProps("email")}
                  />
                  <FormLabel className="fw-bold">Email*</FormLabel>
                  <input
                    placeholder="Enter your email"
                    variant="outlined"
                    color="white"
                    className="p-2 mb-3"
                    name="email"
                    style={{
                      width: "350px",
                      border: "1px solid #cf4b3f",
                      borderRadius: "5px",
                    }}
                    value={details.email}
                    onChange={handleChange}
                    //   {...formik.getFieldProps("email")}
                  />
                  {/* {formik.touched.email && formik.errors.email ? (
                  <div className="error text-danger font-weight-bold mt-1">
                    {formik.errors.email}
                  </div>
                ) : null} */}

                  <FormLabel className="fw-bold">Password*</FormLabel>
                  <input
                    // type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    variant="outlined"
                    color="white"
                    className="p-2 mb-3"
                    name="password"
                    style={{
                      width: "350px",
                      border: "1px solid #cf4b3f",
                      borderRadius: "5px",
                    }}
                    value={details.password}
                    onChange={handleChange}
                    //   {...formik.getFieldProps("password")}
                    endDecorator={
                      <i
                        className={`bi ${
                          showPassword ? "bi-eye-slash" : "bi-eye"
                        }`}
                        onClick={() => setShowPassword(!showPassword)}
                      ></i>
                    }
                  />

                  <FormLabel className="fw-bold">Location*</FormLabel>
                  <input
                    variant="outlined"
                    color="white"
                    className="p-2 mb-3 "
                    placeholder="Enter Your Location"
                    style={{
                      width: "350px",
                      border: "1px solid #cf4b3f",
                      borderRadius: "5px",
                    }}
                    name="geoloaction"
                    value={details.geoloaction}
                    onChange={handleChange}
                    //   {...formik.getFieldProps("email")}
                  />
                </form>
                <div className="d-flex align-items-center justify-content-center">
                  <Button
                    type="submit"
                    className="text-white mb-3 mt-2"
                    color="primary"
                    style={{ backgroundColor: "#cf4b3f" }}
                  >
                    Create Account
                  </Button>
                </div>
                <p className="text-center text-dark ">
                  Already have an account?{" "}
                  <strong style={{ textDecoration: "underline" }}>
                    <Link to="/login">Log in</Link>
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div className="col d-none d-lg-block ">
            <div className="w-100">
              <img
                className="w-100 img-fluid flip-vertical"
                src={sidebarimg}
                alt="logo"
                style={{
                  ...flippedVerticalImageStyle,
                  height: "570px",
                  width: "550px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
