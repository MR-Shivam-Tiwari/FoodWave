import React from "react";

const sizeClasses = {
  txtOpenSansRomanBold70: "font-bold font-opensans",
  txtPoppinsSemiBold30: "font-poppins font-semibold",
  txtPoppinsRegular25: "font-normal font-poppins",
  txtPoppinsRegular1662: "font-normal font-poppins",
  txtPoppinsSemiBold18WhiteA700: "font-poppins font-semibold",
  txtOpenSansRomanRegular16Gray900cc: "font-normal font-opensans",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtTinosBold52: "font-bold font-tinos",
  txtOpenSansRomanBold52: "font-bold font-opensans",
  txtPoppinsLightItalic30: "font-light font-poppins italic",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtOpenSansRomanBold80: "font-bold font-opensans",
  txtOpenSansRomanRegular16Red400: "font-normal font-opensans",
  txtPoppinsSemiBold25Black900: "font-poppins font-semibold",
  txtTinosBold52Gray900: "font-bold font-tinos",
  txtOpenSansRomanRegular16: "font-normal font-opensans",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular20Gray300: "font-normal font-poppins",
  txtPoppinsSemiBold25: "font-poppins font-semibold",
  txtPoppinsMedium25: "font-medium font-poppins",
  txtTinosBold80: "font-bold font-tinos",
  txtPoppinsRegular20Gray301: "font-normal font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsRegular14Gray301: "font-normal font-poppins",
  txtPoppinsRegular40: "font-normal font-poppins",
  txtPoppinsSemiBold25Red400: "font-poppins font-semibold",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtPoppinsRegular25Gray501: "font-normal font-poppins",
  txtPoppinsRegular20Gray802: "font-normal font-poppins",
  txtPoppinsSemiBold25WhiteA700: "font-poppins font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
