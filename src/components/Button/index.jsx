import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-lg" };
const variants = {
  fill: {
    amber_100: "bg-amber-100 text-lime-700",
    gray_50_01: "bg-gray-50_01 text-gray-600",
    deep_purple_50: "bg-deep_purple-50 text-indigo-300",
    deep_orange_100: "bg-deep_orange-100 text-red-900",
    green_A100: "bg-green-A100 text-green-A700",
  },
};
const sizes = { xs: "p-1.5", sm: "p-2.5", md: "p-4" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "green_A100",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "amber_100",
    "gray_50_01",
    "deep_purple_50",
    "deep_orange_100",
    "green_A100",
  ]),
};

export { Button };
