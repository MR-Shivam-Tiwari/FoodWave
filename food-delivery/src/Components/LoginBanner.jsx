import { Button, Card, CardContent, CardCover, Typography } from "@mui/joy";
import React from "react";
import Input from "@mui/joy/Input";
import { useNavigate } from "react-router-dom";

function LoginBanner() {
    const navigate = useNavigate(); 
  const imageStyle = {
    filter: "blur(3px)", // Adjust the blur amount as needed
  };
  const headingStyle = {
    fontFamily: 'Josefin Sans',
    fontSize: '45px',
    color: 'white', // Set your desired text color
    textShadow: '5px 5px 8px rgba(0, 0, 0, 0.5)', // Add a shadow with x-offset, y-offset, blur radius, and color
  };

  const handlClick = ()=>{
    navigate('/login')
  }

  return (
    <div className="container" style={{ fontFamily:'Josefin Sans'}}>
      <div className="p-5">
        <Card
          component="li"
          className=""
          sx={{
            minWidth: 300,
            flexGrow: 1,
            height: "330px",
            borderRadius: "50px",
          }}
        >
          <CardCover>
            <img
              src="https://img.freepik.com/free-photo/flame-grilled-meat-cooking-flames-generative-ai_188544-12355.jpg?w=996&t=st=1707328678~exp=1707329278~hmac=2e91249ddff8988e196ce776675100f0b57b9752251a4f0720db3206a5570dfc"
              srcSet="https://img.freepik.com/free-photo/flame-grilled-meat-cooking-flames-generative-ai_188544-12355.jpg?w=996&t=st=1707328678~exp=1707329278~hmac=2e91249ddff8988e196ce776675100f0b57b9752251a4f0720db3206a5570dfc"
              loading="lazy"
              alt=""
              style={imageStyle}
            />
          </CardCover>
          <CardContent>
            <div className="d-flex align-items-center justify-content-center">
              <Typography
                level="body-lg"
                fontWeight="lg"
                textColor="#fff"
                width="59%"
                mt={{ xs: 8, sm: 8, ms: 20 }}
              >
                <h1
                  className="text-center fw-bold  "
                  style={headingStyle}
                >
                  Join Our Member And Get Discount To 35%
                </h1>
              </Typography>
            </div>
            <Typography
              level="body-lg"
              fontWeight="lg"
              textColor="#fff"
              mt={{ xs: 3, sm: 0 }}
             
            >
              <div className="d-flex align-items-center justify-content-center" style={{ fontFamily:'Josefin Sans'}}>
                <Input size="lg" className="rounded-5 " placeholder="Enter Your Email" style={{width:"50%", height:"50px",fontFamily:'Josefin Sans'}} 
                endDecorator={
                    <Button onClick={handlClick} size="lg" className="rounded-5 " style={{background:"#548776",height:"42px",fontFamily:'Josefin Sans'}} >Sign In</Button>
                }
                />
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default LoginBanner;
