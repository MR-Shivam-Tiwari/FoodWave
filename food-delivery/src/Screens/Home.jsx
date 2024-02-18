import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import FoodCard from "../Components/FoodCard";
import Button from "@mui/joy/Button";
import SearchFood from "../Components/SearchFood";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Benifits from "../Components/Benifits";
import SpecialDishes from "../Components/SpecialDishes";
import HealthyFood from "../Components/HealthyFood";
import Rating from "../Components/CustomerRating";
import CustomerRating from "../Components/CustomerRating";
import LoginBanner from "../Components/LoginBanner";
function Home() {
  const [foodCat, setfoodCat] = useState([]);
  const [fooditem, setfooditem] = useState([]);
  const [search, setsearch] = useState("");
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
  const handleSearchChange = (e) => {
    setsearch(e.target.value);
  };
  const sliderRef = useRef();

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div>
      <Navbar />
      <SearchFood search={search} onChange={handleSearchChange} />
      <div className="mb-4 container">
        {search.length !== 0 && fooditem.length !== 0 ? (
          <>
            <Slider
              ref={sliderRef}
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={3}
              slidesToScroll={3}
            >
              {fooditem
                .filter((item) =>
                  item.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((filterItems) => (
                  <div key={filterItems?._id}>
                    <FoodCard
                      foodName={filterItems?.name}
                      options={filterItems?.options[0]}
                      Img={filterItems?.img}
                      description={filterItems?.description}
                    />
                  </div>
                ))}
            </Slider>
            <div className="text-center mt-5  d-flex align-items-center justify-content-center gap-3">
              <Button
                style={{ backgroundColor: "#4f7b6c", width: "100px" }}
                variant="solid"
                color="warning"
                className=" ms-2 btn btn-outline-warning rounded-3"
                type="submit"
                onClick={handlePrevious}
              >
                Previous
              </Button>
              <Button
                style={{ backgroundColor: "#4f7b6c", width: "100px" }}
                variant="solid"
                color="warning"
                className=" ms-2 btn btn-outline-warning rounded-3"
                type="submit"
                onClick={handleNext}
              >
                Next
              </Button>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <Benifits />
      {/* <div className=" container-fluid ">
        {foodCat.length !== 0
          ? foodCat
              .filter((data) =>
                fooditem.some(
                  (item) =>
                    item?.CategoryName === data?.Categories &&
                    item.name.toLowerCase().includes(search.toLowerCase())
                )
              )
              .map((data) => {
                return (
                  <div className="row mb-3 justify-content-center align-items-center text-center rounded-3  border ">
                    <div className="fw-bold fs-3" key={data._id}>
                      {data.Categories}
                    </div>
                    {fooditem && fooditem.length !== 0 ? (
                      fooditem
                        .filter(
                          (item) =>
                            item?.CategoryName === data?.Categories &&
                            item.name
                              .toLowerCase()
                              .includes(search.toLowerCase())
                        )
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
      </div> */}
      <SpecialDishes />

      <HealthyFood />
      <CustomerRating />
      <LoginBanner />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
