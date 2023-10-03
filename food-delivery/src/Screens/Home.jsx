import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import FoodCard from "../Components/FoodCard";
import Carousal from "../Components/Carousal";

function Home() {
  const [foodCat, setfoodCat] = useState([]);
  const [fooditem, setfooditem] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/fooddata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();

      const { dishes, Categories } = responseData;

      setfoodCat(Categories);
      setfooditem(dishes);

      console.log("Dishes:", dishes);
      console.log("Categories:", Categories);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <Carousal />
      </div>
      <div className="p-2">
        {foodCat.length !== 0
          ? foodCat.map((data) => {
              return (
                <div className="row mb-3 justify-content-center align-items-center text-center">
                  <div className="fw-bold fs-3" key={data._id}>
                    {data.Categories}
                  </div>
                  <hr />
                  {fooditem && fooditem.length !== 0 ? (
                    fooditem
                      .filter((item) => item?.CategoryName === data?.Categories)
                      .map((filterItems) => {
                        return (
                          <div
                            className="col-12 col-md-6 col-lg-3"
                            key={filterItems?._id}
                          >
                            <FoodCard
                              foodName={filterItems?.name}
                              options={filterItems?.options[0]}
                              Img={filterItems?.img}
                              description={filterItems?.description}
                            />
                          </div>
                        );
                      })
                  ) : (
                    <p>No food items found</p>
                  )}
                </div>
              );
            })
          : ""}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
