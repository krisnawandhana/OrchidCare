import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Line, SelectBox, Text } from "components";

const numberOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HasilKlasifikasiPage = () => {
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
                marginTop: "10px",
                gap: "16px",
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
            className="flex flex-col font-inter items-center justify-start mb-[437px] mt-[47px] sm:pl-5 pl-[31px] pr-[11px] py-0.5 w-[85%]"
          >
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
            <SubMenu
              icon={
                <Img
                  className="h-6 w-6"
                  src="images/img_megaphone_white_a700_01.svg"
                  alt="megaphone"
                />
              }
              label={<Text>Hasil Klasifikasi</Text>}
            >
              <MenuItem>Submenu Item</MenuItem>
            </SubMenu>
            <MenuItem
              icon={
                <Img
                  className="h-5 w-5"
                  src="images/img_inbox.svg"
                  alt="inbox"
                />
              }
              active={window.location.pathname === "/aboutus"}
              href="/aboutus"
            >
              <Text>About Us</Text>
            </MenuItem>
          </Menu>
        </Sidebar>
        <div className="bg-white-A700_01 flex flex-col font-generalsans items-center justify-start ml-[undefinedpx] mr-[50px] my-auto md:px-5 py-6 rounded-[16px] w-[76%] z-[1]">
          <div className="flex flex-col justify-start w-full">
            <div className="flex flex-col items-start justify-start ml-6 md:ml-[0] w-auto">
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <div className="flex flex-col h-12 md:h-auto items-center justify-center p-2 w-auto">
                  <Text
                    className="text-base text-deep_purple-400 tracking-[0.30px] w-auto"
                    size="txtGeneralSansBold16"
                  >
                    Hasil Klasifikasi
                  </Text>
                </div>
                <Line className="bg-deep_purple-400 h-0.5 w-full" />
              </div>
            </div>
            <Line className="bg-blue_gray-50 h-px w-full" />
          </div>
          <Img
            className="h-[467px] md:h-auto mt-[19px] object-cover w-[73%]"
            src="images/img_image1.png"
            alt="imageOne"
          />
          <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1040px] mb-1.5 mt-[193px] w-full">
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
              <Text
                className="text-gray-600 text-sm w-auto"
                size="txtGeneralSansMedium14Bluegray400"
              >
                Show result:
              </Text>
              <SelectBox
                className="font-bold text-center text-sm tracking-[0.20px] w-[42%] sm:w-full"
                placeholderClassName="text-gray-900_01"
                indicator={
                  <Img
                    className="h-4 w-4"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="number"
                options={numberOptionsList}
                isSearchable={false}
                placeholder="1"
                shape="round"
                color="blue_gray_50"
                variant="outline"
              />
            </div>
            <div className="flex flex-row items-start justify-start w-auto">
              <div className="flex flex-col h-10 md:h-auto items-center justify-center p-2 w-10">
                <Img
                  className="h-5 w-5"
                  src="images/img_arrowdown.svg"
                  alt="arrowleft"
                />
              </div>
              <Button
                className="cursor-pointer font-bold h-10 text-center text-sm w-10"
                shape="round"
                color="deep_purple_50"
                size="sm"
              >
                1
              </Button>
              <div className="flex flex-col h-10 md:h-auto items-center justify-center p-2 w-10">
                <Img
                  className="h-5 w-5"
                  src="images/img_arrowright.svg"
                  alt="arrowright_One"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700_01 h-24 ml-[-15px] md:px-5 w-[83%] z-[1]"></div>
      </div>
    </>
  );
};

export default HasilKlasifikasiPage;
