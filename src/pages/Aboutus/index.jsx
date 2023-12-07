import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Img, Text } from "components";

const AboutusPage = () => {
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_icon_blue_gray_300.svg"
          alt="icon"
        />
      ),
      label: "Data Sensor",
    },
    {
      icon: (
        <Img
          className="h-[22px] w-[22px]"
          src="images/img_settings.svg"
          alt="settings"
        />
      ),
      label: "Data Suhu",
      href: "/datasuhu",
      active: window.location.pathname === "/datasuhu",
    },
    {
      icon: (
        <Img className="h-6 w-6" src="images/img_profile.svg" alt="profile" />
      ),
      label: "Kelembaban Tanah ",
      href: "/kelembabantanah",
      active: window.location.pathname === "/kelembabantanah",
    },
    {
      icon: <Img className="h-6 w-6" src="images/img_users.svg" alt="users" />,
      label: "Kelembaban Udara",
      href: "/kelembabanudara",
      active: window.location.pathname === "/kelembabanudara",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_megaphone.svg"
          alt="megaphone"
        />
      ),
      label: "Hasil Klasifikasi",
      href: "/hasilklasifikasi",
      active: window.location.pathname === "/hasilklasifikasi",
    },
  ];

  return (
    <>
      <div className="bg-gray-50 flex font-creteround mx-auto relative w-full">
        <Sidebar className="!sticky !w-[271px] bg-white-A700_01 flex h-screen md:hidden justify-start my-auto overflow-auto md:px-5 top-[0]">
          <div className="h-[108px] md:h-[120px] ml-3.5 md:ml-[0] mr-9 mt-3 relative w-[82%]">
            <div className="absolute flex flex-col items-start justify-start right-[0] top-[24%]">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                size="txtCreteRoundRegular24"
              >
                OrchidCare
              </Text>
              <Text
                className="text-blue_gray-900 text-sm"
                size="txtCreteRoundRegular14"
              >
                Admin Dashboard
              </Text>
            </div>
            <Img
              className="absolute h-[108px] inset-y-[0] left-[0] my-auto object-cover w-[108px]"
              src="images/img_frame140021.png"
              alt="frame140021"
            />
          </div>
          <Menu
            menuItemStyles={{
              button: {
                padding: "15px 15px 15px 16px",
                gap: "16px",
                marginTop: "10px",
                color: "#8f95b2",
                fontWeight: 700,
                fontSize: "16px",
                borderRadius: "12px",
                [`&:hover, &.ps-active`]: {
                  color: "#ffffff",
                  backgroundColor: "#6b5cd2ff !important",
                },
              },
            }}
            renderExpandIcon={() => (
              <Img
                className="h-2 w-1"
                src="images/img_arrowright_white_a700_01.svg"
                alt="arrowright"
              />
            )}
            className="flex flex-col font-inter items-center justify-start mb-[437px] mt-[47px] sm:pl-5 pl-[31px] pr-[11px] pt-0.5 w-[85%]"
          >
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
            <SubMenu
              icon={
                <Img
                  className="h-5 w-5"
                  src="images/img_inbox_white_a700_01.svg"
                  alt="inbox"
                />
              }
              label={<Text className="my-0.5">About Us</Text>}
            >
              <MenuItem>Submenu Item</MenuItem>
            </SubMenu>
            <MenuItem
              icon={
                <Img
                  className="h-5"
                  src="images/img_computer.svg"
                  alt="computer"
                />
              }
            >
              <Text>Device Used</Text>
            </MenuItem>
          </Menu>
        </Sidebar>
        <div className="flex md:flex-col flex-row gap-[35px] items-start justify-center ml-[undefinedpx] mr-[85px] my-auto md:px-5 w-full z-[1]">
          <div className="md:h-[312px] h-[317px] md:mt-0 mt-[152px] relative w-[31%] md:w-full">
            <Text
              className="absolute bottom-[0] inset-x-[0] mx-auto sm:text-[30.259999999999998px] md:text-[36.26px] text-[40.26px] text-blue_gray-900 w-max"
              size="txtCreteRoundRegular4026"
            >
              OrchidCare
            </Text>
            <Img
              className="absolute h-[312px] inset-[0] justify-center m-auto object-cover w-[312px]"
              src="images/img_frame140021.png"
              alt="frame140021_One"
            />
          </div>
          <div className="flex md:flex-1 flex-col items-start justify-start w-[67%] md:w-full">
            <Text
              className="sm:text-[42.52px] md:text-[48.52px] text-[56.52px] text-gray-900_01"
              size="txtGeneralSansBold5652"
            >
              About Us
            </Text>
            <div className="bg-blue_gray-300 h-2.5 mt-[7px] w-[38%]"></div>
            <Text
              className="leading-[150.00%] mt-3.5 text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-full"
              size="txtPoppinsRegular36"
            >
              OrchidCare is your ultimate companion for nurturing and tracking
              the growth of your orchids. Our user-friendly website simplifies
              orchid care, providing personalized insights and tips for
              cultivating healthy and thriving orchids. OrchidCare aims to
              empower orchid enthusiasts, from beginners to experts, in their
              journey of successful orchid cultivation.
            </Text>
          </div>
        </div>
        <div className="bg-white-A700_01 h-24 ml-[-15px] md:px-5 w-[83%] z-[1]"></div>
      </div>
    </>
  );
};

export default AboutusPage;
