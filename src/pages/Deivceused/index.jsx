import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Img, Text } from "components";

const DeivceusedPage = () => {
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
    {
      icon: <Img className="h-5 w-5" src="images/img_inbox.svg" alt="inbox" />,
      label: "About Us",
      href: "/aboutus",
      active: window.location.pathname === "/aboutus",
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
                padding: "15px 15px 15px 17px",
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
                className="h-6 mt-0.5 w-6"
                src="images/img_arrowright_white_a700_01.svg"
                alt="arrowright"
              />
            )}
            className="flex flex-col font-inter items-center justify-start mb-[405px] mt-[47px] sm:pl-5 pl-[29px] pr-[19px] pt-0.5 w-[83%]"
          >
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
            <SubMenu
              icon={
                <Img
                  className="h-5"
                  src="images/img_computer_white_a700_01.svg"
                  alt="computer"
                />
              }
              label={<Text>Device Used</Text>}
            >
              <MenuItem>Submenu Item</MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
        <div className="bg-white-A700_01 h-24 ml-[-15px] md:px-5 w-[83%] z-[1]"></div>
        <div className="font-poppins gap-[13px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-center ml-[undefinedpx] mr-[104px] my-auto md:px-5 w-full z-[1]">
          <div className="border border-black-900 border-solid flex flex-1 flex-col gap-6 h-[667px] md:h-auto items-center justify-start px-5 py-12 rounded-lg shadow-bs w-full">
            <div className="bg-gray-50_02 flex flex-col h-[132px] items-center justify-start p-[11px] rounded-[50%] w-[132px]">
              <Img
                className="h-[108px] md:h-auto object-cover w-[108px]"
                src="images/img_image3removebgpreview.png"
                alt="image3removebgp"
              />
            </div>
            <div className="flex flex-col gap-2 items-center justify-start w-auto">
              <Text
                className="text-black-900 text-center text-xl w-auto"
                size="txtPoppinsBold20"
              >
                Soil Moisture Sensor
              </Text>
              <Text
                className="leading-[22.00px] max-w-[277px] md:max-w-full text-base text-black-900 text-justify"
                size="txtPoppinsRegular16"
              >
                The Arduino soil moisture sensor measures soil moisture levels
                by detecting changes in resistance between two probes inserted
                into the soil. This analog or digital output is read by an
                Arduino board, enabling monitoring of soil moisture in various
                applications such as gardening and agriculture. It helps
                automate irrigation systems and ensures proper plant hydration.
                Typically connected via analog pins, it includes a dedicated
                library for easy integration into Arduino projects.
              </Text>
            </div>
          </div>
          <div className="border border-black-900 border-solid flex flex-1 flex-col gap-6 h-[667px] md:h-auto items-center justify-start px-5 py-12 rounded-lg shadow-bs w-full">
            <div className="bg-gray-50_02 flex flex-col h-[132px] items-end justify-start pl-[9px] py-[9px] rounded-[50%] w-[132px]">
              <Img
                className="h-[73px] md:h-auto my-[19px] object-cover w-full"
                src="images/img_image2removebgpreview.png"
                alt="image2removebgp"
              />
            </div>
            <div className="flex flex-col gap-2 items-center justify-start w-auto">
              <Text
                className="text-black-900 text-center text-xl w-auto"
                size="txtPoppinsBold20"
              >
                DHT22 Sensor
              </Text>
              <Text
                className="leading-[22.00px] max-w-[277px] md:max-w-full text-base text-black-900 text-justify"
                size="txtPoppinsRegular16"
              >
                The Arduino DHT22 sensor is a digital temperature and humidity
                sensor that provides accurate readings. DHT22 sensor offers high
                precision and reliability, making it suitable for various
                applications such as weather stations, environmental monitoring,
                and home automation systems. It requires a single digital pin
                connection to the Arduino board and utilizes a specific library
                for easy integration into Arduino sketches.
              </Text>
            </div>
          </div>
          <div className="border border-black-900 border-solid flex flex-1 flex-col gap-6 items-center justify-start px-5 py-12 rounded-lg shadow-bs w-full">
            <div className="bg-gray-50_02 flex flex-col h-[132px] items-center justify-start p-[7px] rounded-[50%] w-[132px]">
              <Img
                className="h-[74px] md:h-auto mb-7 mt-3.5 object-cover w-full"
                src="images/img_image1_74x117.png"
                alt="imageOne"
              />
            </div>
            <div className="flex flex-col gap-2 items-center justify-start w-auto">
              <Text
                className="text-black-900 text-center text-xl w-auto"
                size="txtPoppinsBold20"
              >
                Components
              </Text>
              <Text
                className="leading-[22.00px] max-w-[277px] md:max-w-full text-base text-black-900 text-justify"
                size="txtPoppinsRegular16"
              >
                <>
                  DHT22 measuring both parameters and easily integrating with
                  Arduino. Additionally, a capacitive soil moisture sensor
                  offers precise soil moisture measurements compatible with
                  Arduino. The project&#39;s core is an Arduino Uno, suitable
                  for most IoT projects, with Nano or Mega options for
                  larger-scale endeavors. Essential jumper wires connect sensors
                  to the Arduino, while a breadboard aids in organization
                  (optional). Powering the setup requires USB cables, battery
                  packs, or power adapters for the Arduino board.
                </>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeivceusedPage;
