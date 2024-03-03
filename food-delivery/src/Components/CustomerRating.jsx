import React, { useState } from "react";
import Ratings from "./Images/Customer.png";
import { Button } from "@mui/joy";
import Rating from "@mui/material/Rating";
const ratingData = [
  {
    message:
      "I must commend this shop for its exceptional service and high-quality products. The attention to detail and commitment to customer satisfaction are truly commendable.Highly recommended for a delightful experience.",
    name: "Riya Sen",
    location: "Rajasthan, India",
    image: Ratings,
  },
  {
    message:
      "From start to finish, this shop has nailed it. The premium quality of products and the unmatched service make it a standout choice. Without a doubt, a resounding 5-star rating.",
    name: "Shivam Tiwari",
    location: "Mumbai, India",
    image:
      "https://images.unsplash.com/photo-1490960968467-52940deff488?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVuJTIwd2l0aCUyMHBob25lJTIwYW5kJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    message:
      "I can't express how satisfied I am with my shopping experience. This shop defines excellence in every aspect, earning it a well-deserved 5-star rating. Highly recommended for a premium shopping venture.",
    name: "Ayushi Modan",
    location: "Delhi, India",
    image:
      "https://plus.unsplash.com/premium_photo-1663011138650-3953b5f9acb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29tZW4lMjB3aXRoJTIwcGhvbmUlMjBhbmQlMjBmb29kfGVufDB8fDB8fHww",
  },
  {
    message:
      "An outstanding shopping destination! The products are of impeccable quality, and the service is second to none. Awarding a solid 5-star rating for an exceptional experience.",
    name: "Arohi Singh",
    location: "Agra, India",
    image:
      "https://images.unsplash.com/photo-1600209142000-aa256622e64a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjB3aXRoJTIwcGhvbmUlMjBhbmQlMjBmb29kfGVufDB8fDB8fHww",
  },
  // Add more rating data as needed
];
function CustomerRating() {
  const [value, setValue] = React.useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? ratingData.length - 1 : prevIndex - 1
      );
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) =>
        prevIndex === ratingData.length - 1 ? 0 : prevIndex + 1
      );
    }
  };
  return (
    <div className="container mb-5" style={{ marginTop: "70px" }}>
      <div className="d-flex p-4">
        <div className="p-5" style={{ marginTop: "30px" }}>
          <h1>Our Lovely Customer Loves Our Food</h1>
          <p className="mt-4" style={{ fontSize: "15px", color: "gray" }}>
            {ratingData[currentIndex].message}
          </p>
          <div>
            <Rating name="read-only" value={value} readOnly />
            <h6 className="mt-2 px-1 mb-0">{ratingData[currentIndex].name}</h6>
            <p className="px-1" style={{ fontSize: "12px", color: "gray" }}>
              {ratingData[currentIndex].location}
            </p>
          </div>
          <div className="d-flex gap-3">
            <Button
              className="  mt-2"
              style={{
                background: "white",
                borderRadius: "50%",
                height: "50px",
                border: "1px solid #548776",
              }}
              onClick={() => handleArrowClick("left")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                color="#548776"
                fill="currentColor"
                class="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                />
              </svg>
            </Button>
            <Button
              className=" shadow  mt-2"
              style={{
                background: "white",
                borderRadius: "50%",
                height: "50px",
              }}
              onClick={() => handleArrowClick("right")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                color="#548776"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </Button>
          </div>
        </div>
        <div>
          <img
            src={ratingData[currentIndex].image}
            alt=""
            style={{ width: "400px", height: "450px", borderRadius:"30px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default CustomerRating;
