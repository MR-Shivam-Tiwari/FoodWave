import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import FoodCard from "../Components/FoodCard";
import Carousal from "../Components/Carousal";

function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Carousal />
      </div>
      <div className="mt-2 mb-2">
        <FoodCard />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
