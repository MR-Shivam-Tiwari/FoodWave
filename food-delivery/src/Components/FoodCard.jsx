import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";

function FoodCard() {
  return (
    <div>
      <div className="p-4 ">
        <Card sx={{ width: 320 }}>
          <div>
            <Typography level="title-lg">Yosemite National Park</Typography>
            <Typography level="body-sm">April 24 to May 02, 2021</Typography>
            <IconButton
              aria-label="bookmark Bahamas Islands"
              variant="plain"
              color="neutral"
              size="sm"
              sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
            ></IconButton>
          </div>
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img
              src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
              srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
              loading="lazy"
              alt=""
            />
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
                <option value={"half"}>Half</option>
                <option value={"full"}>Full</option>
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
