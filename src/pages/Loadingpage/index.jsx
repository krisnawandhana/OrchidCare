import React from "react";

import { Img, Text } from "components";

const LoadingpagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex font-inter h-[1024px] justify-end mx-auto p-[189px] md:px-10 sm:px-5 relative w-full">
        <Text
          className="mb-[50px] mt-auto mx-auto sm:text-[36.27px] md:text-[42.27px] text-[50.27px] text-center text-gray-900 tracking-[0.72px]"
          size="txtInterBold5027"
        >
          l o a d i n g . . .{" "}
        </Text>
        <Img
          className="absolute h-[645px] inset-[0] justify-center m-auto object-cover w-[645px]"
          src="images/img_frame140021.png"
          alt="frame140021"
        />
      </div>
    </>
  );
};

export default LoadingpagePage;
