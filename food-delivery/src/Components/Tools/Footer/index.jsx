import React from "react";

import { Button, Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[67px] items-center justify-center mb-[76px] mt-[70px] mx-auto w-[78%]">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start mb-2 w-[38%] md:w-full">
              <div className="flex flex-row gap-2 items-center justify-start w-[30%] md:w-full">
                <Text
                  className="bg-red-400 flex h-[51px] items-center justify-center rounded-[50%] sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 w-[51px]"
                  size="txtPoppinsSemiBold25WhiteA700"
                >
                  F
                </Text>
                <Text
                  className="text-lg text-white-A700"
                  size="txtPoppinsSemiBold18WhiteA700"
                >
                  <span className="text-white-A700 font-poppins text-left font-semibold">
                    Foodio
                  </span>
                  <span className="text-red-400 font-poppins text-left font-semibold">
                    .
                  </span>
                </Text>
              </div>
              <Text
                className="leading-[200.00%] mt-14 text-gray-300 text-xl w-[72%] sm:w-full"
                size="txtPoppinsRegular20Gray300"
              >
                Viverra gravida morbi egestas facilisis tortor netus non duis
                tempor.{" "}
              </Text>
              <div className="flex flex-row gap-[30px] items-center justify-start md:ml-[0] ml-[3px] mt-[47px] w-[58%] md:w-full">
                <Button
                  className="flex h-[60px] items-center justify-center rounded-[50%] w-[60px]"
                  shape="circle"
                  color="gray_301"
                  size="sm"
                  variant="fill"
                >
                  <Img
                    className="h-[30px]"
                    src="images/img_twitter.png"
                    alt="twitter"
                  />
                </Button>
                <Button
                  className="flex h-[60px] items-center justify-center rounded-[50%] w-[60px]"
                  shape="circle"
                  color="bluegray_100"
                  size="sm"
                  variant="fill"
                >
                  <Img
                    className="h-[30px]"
                    src="images/img_instagram.png"
                    alt="Instagram"
                  />
                </Button>
                <Button
                  className="flex h-[60px] items-center justify-center rounded-[50%] w-[60px]"
                  shape="circle"
                  color="bluegray_100"
                  size="sm"
                  variant="fill"
                >
                  <Img
                    className="h-[30px]"
                    src="images/img_facebook.png"
                    alt="Facebook"
                  />
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start md:mt-0 mt-4">
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-red-400"
                size="txtPoppinsSemiBold25Red400"
              >
                Page
              </Text>
              <Text
                className="mt-[43px] text-gray-300 text-xl"
                size="txtPoppinsRegular20Gray300"
              >
                Home
              </Text>
              <Text
                className="mt-[35px] text-gray-300 text-xl"
                size="txtPoppinsRegular20Gray300"
              >
                Menu
              </Text>
              <Text
                className="mt-[34px] text-gray-300 text-xl"
                size="txtPoppinsRegular20Gray300"
              >
                Order online
              </Text>
              <Text
                className="mt-[37px] text-gray-300 text-xl"
                size="txtPoppinsRegular20Gray300"
              >
                Catering
              </Text>
              <Text
                className="mt-8 text-gray-300 text-xl"
                size="txtPoppinsRegular20Gray300"
              >
                Reservation
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start md:mt-0 mt-[11px]">
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-red-400"
                size="txtPoppinsSemiBold25Red400"
              >
                Information
              </Text>
              <Text
                className="mt-[47px] text-gray-300 text-xl"
                size="txtPoppinsRegular20Gray300"
              >
                About us
              </Text>
              <Text
                className="mt-[34px] text-gray-300 text-xl"
                size="txtPoppinsRegular20Gray300"
              >
                Testimonial
              </Text>
              <Text
                className="mt-[35px] text-gray-300 text-xl"
                size="txtPoppinsRegular20Gray300"
              >
                Event
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start md:mt-0 mt-[11px]">
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-red-400"
                size="txtPoppinsSemiBold25Red400"
              >
                Get in touch
              </Text>
              <Text
                className="leading-[153.00%] mt-[46px] text-gray-300 text-xl w-full"
                size="txtPoppinsRegular20Gray300"
              >
                3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat
              </Text>
              <Text
                className="mt-[31px] text-gray-300 text-xl"
                size="txtPoppinsRegular20Gray300"
              >
                delizioso@gmail.com
              </Text>
              <Text
                className="mt-8 text-gray-300 text-xl"
                size="txtPoppinsRegular20Gray300"
              >
                +123 4567 8901
              </Text>
            </div>
          </div>
          <div className="flex flex-row items-start justify-center w-[23%] md:w-full">
            <Text
              className="mt-1 text-gray-301 text-xl"
              size="txtPoppinsRegular20Gray301"
            >
              Copyright
            </Text>
            <Text
              className="border-[1.5px] border-gray-301 border-solid flex h-[19px] items-center justify-center ml-[5px] mt-1 rounded-[50%] text-center text-gray-301 text-sm w-[19px]"
              size="txtPoppinsRegular14Gray301"
            >
              c
            </Text>
            <Text
              className="ml-[5px] text-gray-301 text-xl"
              size="txtPoppinsRegular20Gray301"
            >
              2022 Foodio
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
