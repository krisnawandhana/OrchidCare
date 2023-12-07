import React from "react";

const sizeClasses = {
  txtCreteRoundRegular24: "font-creteround font-normal",
  txtGeneralSansBold16: "font-bold font-generalsans",
  txtGeneralSansMedium14Bluegray400: "font-generalsans font-normal",
  txtInterBold16: "font-bold font-inter",
  txtPoppinsBold20: "font-bold font-poppins",
  txtPoppinsRegular36: "font-normal font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtInterBold5027: "font-bold font-inter",
  txtCreteRoundRegular14: "font-creteround font-normal",
  txtCreteRoundRegular4026: "font-creteround font-normal",
  txtGeneralSansMedium16: "font-generalsans font-medium",
  txtGeneralSansSemibold16: "font-generalsans font-semibold",
  txtGeneralSansMedium14: "font-generalsans font-medium",
  txtGeneralSansBold5652: "font-bold font-generalsans",
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
