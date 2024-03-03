import React, { useEffect, useState } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import { Avatar } from "@mui/joy";

function FoodCard({ foodName, options, Img, description }) {
  let priceOptions = Object.keys(options);
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [totalPrice, setTotalPrice] = useState(20);

  useEffect(() => {
    // Set the default selected option based on the first option received from the backend
    if (options?.length > 0) {
      const defaultOption = options[0];
      setSelectedOption(defaultOption);
      updateTotalPrice(quantity, defaultOption.value);
    }
  }, [options, quantity]);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);

    if (selectedOption) {
      // Ensure selectedOption is not null before accessing its value property
      updateTotalPrice(newQuantity, selectedOption.value);
    }
  };

  const handleOptionChange = (event) => {
    const selectedOptionName = event.target.value;

    // Define a mapping of option names to their corresponding values
    const optionValueMapping = {
      half: 20,
      full: 40,
      small: 20,
      large: 60,
      regular: 20,
      medium: 40,
      single: 20,
      double: 40,
      // Add more options as needed
    };

    // Check if the selected option name exists in the mapping
    const optionValue = optionValueMapping[selectedOptionName];

    if (typeof optionValue !== "undefined") {
      // If the option exists, set its value and update the total price
      const newOption = { name: selectedOptionName, value: optionValue };
      setSelectedOption(newOption);
      updateTotalPrice(quantity, newOption.value);
    } else {
      // If no valid option is found, set default values or handle it as needed
      const defaultOption = { name: "Default", value: 20 }; // Adjust the default values
      setSelectedOption(defaultOption);
      updateTotalPrice(quantity, defaultOption.value);
    }
  };

  // Rest of your component remains the same

  const updateTotalPrice = (newQuantity, newOptionValue) => {
    const newTotalPrice = newQuantity * newOptionValue;
    setTotalPrice(newTotalPrice);
  };

  const handleAddButtonClick = () => {
    // Implement logic for adding to cart or any other action
  };

  const handleOrderButtonClick = () => {
    // Implement logic for placing an order
  };

  return (
    <div>
      <div className="p-2 me-1 ">
        <div
          className="border p-3 rounded-4"
          style={{
            width: 340,
            fontFamily: "Josefin Sans",
            backgroundColor: "#f6f7f2",
          }}
        >
          <div className="d-flex align-items-lg-start gap-3 justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <button
                className=" border-0 p-2 d-flex align-items-center shadow-sm "
                style={{
                  borderRadius: "150px",
                  backgroundColor: "white",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  color="#548776"
                  fill="currentColor"
                  class="bi bi-suit-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                </svg>
              </button>
              <div className="star p-2">
                {" "}
                <span style={{ color: "#ffc009" }}>&#9733;</span> 4.5{" "}
              </div>
            </div>
            <Avatar
              className="shadow"
              style={{
                borderRadius: "50%",
                width: "150px",
                height: "150px",
                border: "4px solid #808b53",
              }}
            >
              <img src={Img} srcSet={Img} loading="lazy" alt="" />
            </Avatar>
          </div>

          <h5 className=" mt-3">{foodName}</h5>
          <p
            style={{
              fontSize: "13px",
              marginTop: "-7px",
              fontFamily: "Nunito",
            }}
          >
            {description.split(" ").slice(0, 10).join(" ")}
          </p>
          <div className="d-flex justify-content-between">
            <div className="col">
              <div>
                <select
                  className="p-1 m-1 rounded"
                  style={{ backgroundColor: "#808b53", width: "90px" }}
                  onChange={handleOptionChange}
                  value={selectedOption ? selectedOption.name : ""}
                >
                  <option
                    style={{ backgroundColor: "#808b53" }}
                    value="" // Empty value for the default "Select" option
                    disabled // Disable the default option so it can't be selected
                  >
                    Select
                  </option>
                  {Array.isArray(priceOptions) &&
                    priceOptions.map((data) => (
                      <option
                        style={{ backgroundColor: "#808b53" }}
                        key={data}
                        value={data}
                      >
                        {data}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <select
                  className="p-1 m-1 rounded"
                  style={{ backgroundColor: "#808b53", width: "90px" }}
                  onChange={handleQuantityChange}
                  value={quantity}
                >
                  {Array.from(Array(6), (e, i) => (
                    <option
                      style={{ backgroundColor: "#808b53" }}
                      key={i + 1}
                      value={i + 1}
                    >
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="d-flex gap-1">
              <Button
                variant="outlined"
                size="md"
                className="rounded-5"
                aria-label="Add to Cart"
                onClick={handleAddButtonClick}
                sx={{
                  ml: "auto",
                  alignSelf: "center",
                  fontWeight: 600,
                  color: "#808b53",
                  border: "1.5px solid #808b53",
                  width: "80px",
                }}
              >
                Add
              </Button>
              <Button
                variant="outlined"
                size="md"
                className="rounded-5"
                aria-label="Place Order"
                onClick={handleOrderButtonClick}
                sx={{
                  ml: "auto",
                  alignSelf: "center",
                  fontWeight: 600,
                  color: "#548776",
                  border: "1.5px solid #548776",
                  width: "80px",
                }}
              >
                Order
              </Button>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2 mt-3">
            <h6 fontSize="sm" fontWeight="lg">
              Total Price:
            </h6>
            <h6 fontSize="lg" fontWeight="lg">
              ₹{totalPrice}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
