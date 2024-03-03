import React, { useEffect, useRef, useState } from "react";
import FoodCard from "./FoodCard";
import { Button } from "@mui/joy";
import Slider from "react-slick";
const getRandomItems = (items, count) => {
    const shuffled = items.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
function SpecialDishes() {
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
  const [randomItems, setRandomItems] = useState([]);
  const sliderRef = useRef();

  useEffect(() => {
    // Set random items on initial load
    setRandomItems(getRandomItems(fooditem, 4));
  }, [fooditem]);

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

 

 
  return (
    <div className="container" style={{marginTop:"100px"}}>
      <div className="text-center mb-5">
        <h1 className="mb-4">Our Special Dishes</h1>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ width: "75%", margin: "auto" }}
        >
          <p style={{ color: "gray " }}>
            Explore culinary delights with Easy to Order Food – savor our
            special dishes, expertly crafted to add a touch of uniqueness to
            your dining experience.
          </p>
        </div>
      </div>

      <div>
      <div className="mb-4">
      {fooditem.length !== 0 && (
        <>
          <Slider
            ref={sliderRef}
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={3}
          >
            {randomItems.map((filterItems) => (
              <div  key={filterItems?._id}>
                <FoodCard
                  foodName={filterItems?.name}
                  options={filterItems?.options[0]}
                  Img={filterItems?.img}
                  description={filterItems?.description}
                  className=""
                />
              </div>
            ))}
          </Slider>
          {/* <div className="text-center mt-2 d-flex align-items-center justify-content-center gap-3">
            <Button
              style={{ backgroundColor: "#4f7b6c", width: "100px" }}
              variant="solid"
              color="warning"
              className="ms-2 btn btn-outline-warning rounded-3"
              type="submit"
              onClick={handlePrevious}
            >
              Previous
            </Button>
            <Button
              style={{ backgroundColor: "#4f7b6c", width: "100px" }}
              variant="solid"
              color="warning"
              className="ms-2 btn btn-outline-warning rounded-3"
              type="submit"
              onClick={handleNext}
            >
              Next
            </Button>
          </div> */}
        </>
      )}
    </div>
      </div>
    </div>
  );
}

export default SpecialDishes;
