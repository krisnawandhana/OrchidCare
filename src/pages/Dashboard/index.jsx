import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  Img,
  Input,
  Line,
  ReactTable,
  SelectBox,
  Text,
} from "components";

const numberOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardPage = () => {
  const tableData = React.useRef([
    {
      rowcell: "#ID-HY93SG",
      labelOne: "Minggu, 28 Mei 2023",
      labelTwo: "Sehat",
    },
    {
      rowcell: "#ID-HE6KE7",
      labelOne: "Senin, 29 Mei 2023",
      labelTwo: "Kurang Sehat",
    },
    {
      rowcell: "#ID-03LCB6",
      labelOne: "Senin, 29 Mei 2023",
      labelTwo: "Sehat",
    },
    {
      rowcell: "#ID-ZFKPAJ",
      labelOne: "Senin, 29 Mei 2023",
      labelTwo: "Kurang Sehat",
    },
    {
      rowcell: "#ID-5P0DR4",
      labelOne: "Senin, 29 Mei 2023",
      labelTwo: "Tidak Sehat",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("rowcell", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-start pr-3">
            <Img
              className="h-20 w-[72px]"
              src="images/img_cell.svg"
              alt="cell_One"
            />
            <div className="flex flex-col gap-1 items-start justify-start w-full">
              <Text
                className="text-base text-gray-900_01 tracking-[0.30px] w-full"
                size="txtGeneralSansSemibold16"
              >
                Orchid-1
              </Text>
              <Text
                className="text-gray-600 text-sm w-full"
                size="txtGeneralSansMedium14"
              >
                {info?.getValue()}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-start min-w-[314px] md:pr-10 sm:pr-5 pr-[190px]">
            <Img
              className="h-[72px] w-[72px]"
              src="images/img_cell.svg"
              alt="cell"
            />
            <Text
              className="text-base text-gray-600 tracking-[0.20px] w-auto"
              size="txtGeneralSansMedium16"
            >
              ID
            </Text>
            <Img className="h-4 w-4" src="images/img_share.svg" alt="share" />
          </div>
        ),
      }),
      tableColumnHelper.accessor("labelOne", {
        cell: (info) => (
          <Text
            className="flex-1 pb-[27px] pt-[30px] text-base text-gray-900_01 tracking-[0.30px]"
            size="txtGeneralSansSemibold16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[224px] pb-[23px] pt-[26px] text-base text-gray-600 tracking-[0.20px]"
            size="txtGeneralSansMedium16"
          >
            Hari & Tanggal
          </Text>
        ),
      }),
      tableColumnHelper.accessor("labelTwo", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-start p-[7px]">
            <Button
              className="cursor-pointer font-medium h-8 min-w-[71px] my-[17px] text-center text-sm"
              shape="round"
            >
              {info?.getValue()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[550px] py-6 text-base text-gray-600 tracking-[0.20px]"
            size="txtGeneralSansMedium16"
          >
            Kondisi
          </Text>
        ),
      }),
    ];
  }, []);

  const sideBarMenu = [
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
    {
      icon: (
        <Img className="h-5" src="images/img_computer.svg" alt="computer" />
      ),
      label: "Device Used",
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
                padding: "16px 16px 16px 19px",
                marginTop: "10px",
                gap: "18px",
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
                className="h-6 my-[-15px] w-6"
                src="images/img_arrowright_white_a700_01.svg"
                alt="arrowright_One"
              />
            )}
            className="flex flex-col font-inter items-center justify-start mb-[437px] mt-[47px] pl-[27px] pr-[21px] pt-0.5 sm:px-5 w-[83%]"
          >
            <SubMenu
              icon={
                <Img className="h-6 w-6" src="images/img_icon.svg" alt="icon" />
              }
              label={<Text>Data Sensor</Text>}
            >
              <MenuItem>Submenu Item</MenuItem>
            </SubMenu>
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </Menu>
        </Sidebar>
        <div className="bg-white-A700_01 h-24 ml-[-15px] md:px-5 w-[83%] z-[1]"></div>
        <div className="bg-white-A700_01 flex flex-col font-generalsans items-start justify-start ml-[undefinedpx] mr-[50px] my-auto md:px-5 py-6 rounded-[16px] w-[76%] z-[1]">
          <div className="flex flex-col justify-start w-full">
            <div className="flex flex-col items-start justify-start ml-6 md:ml-[0] w-auto">
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <div className="flex flex-col h-12 md:h-auto items-center justify-center p-2 w-auto">
                  <Text
                    className="text-base text-deep_purple-400 tracking-[0.30px] w-auto"
                    size="txtGeneralSansBold16"
                  >
                    Data Sensor
                  </Text>
                </div>
                <Line className="bg-deep_purple-400 h-0.5 w-full" />
              </div>
            </div>
            <Line className="bg-blue_gray-50 h-px w-full" />
          </div>
          <div className="flex flex-col items-center justify-start ml-6 md:ml-[0] mt-[23px] w-auto md:w-full">
            <Input
              name="input"
              placeholder="Search by ID, or others..."
              className="font-medium md:h-auto p-0 placeholder:text-gray-500 sm:h-auto text-base text-left tracking-[0.20px] w-full"
              wrapClassName="flex w-full"
              prefix={
                <Img
                  className="mt-auto mb-px h-6 mr-3"
                  src="images/img_rewind.svg"
                  alt="rewind"
                />
              }
            ></Input>
          </div>
          <div className="flex flex-col items-start justify-start max-w-[1088px] mt-6 w-full">
            <div className="overflow-auto w-full">
              <ReactTable
                columns={tableColumns}
                data={tableData.current}
                rowClass={""}
                headerClass="border-b border-blue_gray-50"
              />
            </div>
            <div className="h-px w-full"></div>
          </div>
          <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1040px] mb-1.5 ml-6 md:ml-[0] mt-[104px] w-full">
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
              <Text
                className="text-gray-600 text-sm w-auto"
                size="txtGeneralSansMedium14"
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
                  alt="arrowright_Two"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
