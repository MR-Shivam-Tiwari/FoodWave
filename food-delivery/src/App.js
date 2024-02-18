import "bootstrap/dist/css/bootstrap.css";
import Home from "./Screens/Home";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import GlobalStyle  from "./GlobalStyle.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Offers from "./Components/Offers.jsx";
import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";
import Food from "./Components/Food.jsx";
function App() {
  return (
    <Router>
       <Navbar />
      <div>
      <GlobalStyle /> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/offers" element={<Offers />} />
          <Route exact path="/foods" element={<Food />} />

        </Routes>
        <div>
        <Footer />
      </div>
      </div>
      <style>
            {`
          /* Hide the scrollbar for Chrome, Safari, and Edge */
          ::-webkit-scrollbar {
            width: 0px;
            background: transparent;
          }
        `}
          </style>
    </Router>
  );
}

export default App;
