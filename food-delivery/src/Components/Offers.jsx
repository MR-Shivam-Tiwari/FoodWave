import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import FoodCard from "./FoodCard";
import offerImage from "./Images/OffersImg.png";
import offervater from "./Images/offervater.png";
import { Button } from "@mui/joy";
const getRandomItems = (items, count) => {
  const shuffled = items.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
function Offers() {
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

  return (
    <div className="container rounded-4 p-3">
      <div className="row">
        <div className="col">
          <div className="p-5 mt-5 ">
            <h1 className="" style={{ width: "80%" }}>
              Delicious Dishes & Fast Foods with <br></br>{" "}
              <span style={{ color: "#186944" }}>50% 0ff</span>
            </h1>
            <p className="  mt-4 mb-4">Lorem ipsum dolor sit ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam atque quae!</p>
            <Button size="lg" style={{background:"#186944"}}>Get Started</Button>
          </div>
        </div>
        <div className="col">
          <img src={offerImage} alt="" style={{  }} />
        </div>
      </div>
      <div className="mb-5">
        <div className="text-center mb-5 mt-5">
          <h1>Popular Items</h1>
        </div>
        {fooditem.length !== 0 && (
          <>
            <Slider
              ref={sliderRef}
              infinite={true}
              speed={500}
              slidesToShow={3}
              slidesToScroll={3}
            >
              {randomItems.map((filterItems) => (
                <div key={filterItems?._id}>
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
          </>
        )}
      </div>
      <div className="row mb-5 mt-5">
      
        <div className="col ">
          <div className="p-5 mt-5 ">
            <h1 className="" >
              Get Quality & Delicious Foods With Our Worldclass Price 
            </h1>
            <p className="  mt-4 mb-4" style={{color:"gray"}}>Lorem ipsum dolor sit ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam atque quae!</p>
            <Button size="lg" className="text-black fw-bold" style={{background:"Yellow"}}>Get Started</Button>
          </div>
        </div>
        <div className="col mt-4">
          <img src={offervater} alt="" style={{width:"100%" }} />
        </div>
      </div>
    </div>
  );
}

export default Offers;
