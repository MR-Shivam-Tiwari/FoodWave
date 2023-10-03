import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";

function FoodCard({ foodName, options, Img, description }) {
  let option = options;
  let priceoptions = Object.keys(option);

  return (
    <div>
      <div className="p-2 me-1 ">
        <Card sx={{ width: 300 }}>
          <div>
            <Typography level="title-lg">{foodName}</Typography>
            <Typography level="body-sm">
              {description.split(" ").slice(0, 10).join(" ")}
            </Typography>

            <IconButton
              aria-label="bookmark Bahamas Islands"
              variant="plain"
              color="neutral"
              size="sm"
              sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
            ></IconButton>
          </div>
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img src={Img} srcSet={Img} loading="lazy" alt="" />
          </AspectRatio>
          <CardContent orientation="horizontal">
            <div>
              <select className="p-2 m-1  bg-light rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>
              <select className="p-2 m-1  bg-light rounded">
                {priceoptions.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <div>
                <Typography level="body-xs">Total price:</Typography>
                <Typography fontSize="lg" fontWeight="lg">
                  $20
                </Typography>
              </div>

              <Button
                variant="solid"
                size="md"
                color="warning"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
              >
                Order
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default FoodCard;
