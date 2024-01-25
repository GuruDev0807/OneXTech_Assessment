"use client";
import { useState } from "react";
import Layout from "@/app/layout/layout";
import Image from "next/image";
import { MdStar } from "react-icons/md";
import { Separator } from "@/components/ui/separator";

import { dataColorSelectList } from "./data/dataColor";
import { dataSpecificationsList } from "./data/dataSpecification";
import { dataCollapseDetailsList } from "./data/dataCollapseList";
import { dataAboutCar } from "./data/dataAbout";
import { dataCarsList } from "./data/dataCar";

import TextSpecificationList from "./components/TextList/TextSpecificationList";
import CollapseDetail from "./components/Collapse/CollapseDetail";
import SlideCarSelect from "./components/Slide/SlideCarSelect";

const Home = () => {
  const [flagSelectedColor, setFlagSelectedColor] = useState(0);

  return (
    <Layout>
      <div className="flex w-full">
        <div className="flex-1 flex-col w-full bg-[#FBFCFE]">
          <div className="flex w-full  mt-[80px]"></div>
          <div className="flex w-full justify-center mt-[60px]">
            <SlideCarSelect data={dataCarsList} />
          </div>
        </div>
        <div className="flex flex-col w-[500px] p-[70px_50px] box-border">
          <div className="flex flex-col w-full">
            <div className="flex w-[50px] h-[24px] justify-center items-center rounded-[64px] bg-[#00F3B920]  text-[#0036C3] body_overline cursor-pointer">
              NEW
            </div>
            <div className="flex heading_h4 text-[rgba(0,0,0,0.87)] mt-[9px]">
              2021 Tesla Model 3
            </div>
            <div className="flex items-center mt-[8px]">
              <div className="flex body_body2 text-[rgba(0,0,0,0.38)] mr-[16px]">
                VIN
              </div>
              <div className="flex body_body2 text-[rgba(0,0,0,0.87)]">
                JN1AZ0CPOBT009448
              </div>
            </div>
            <div className="flex items-center mt-[16px]">
              {new Array(5).fill(0).map((_, index) => (
                <MdStar
                  key={index}
                  color="#FFB400"
                  fontSize="25px"
                  style={{ marginRight: "6px" }}
                />
              ))}
            </div>
            <div className="flex text-[rgba(0,0,0,0.87)] heading_h5 mt-[24px]">
              $41,103
            </div>
          </div>
          <Separator className="my-6" />
          <div className="flex flex-col w-full">
            <div className="text-[16px] body_subtitle2">Colour</div>
            <div className="flex items-center justify-between mt-[18px] mb-[64px]">
              <div className="flex items-center">
                {dataColorSelectList.map((each, index) => {
                  return (
                    <div
                      className={`flex w-[36px] h-[36px] rounded-full justify-center items-center mr-[12px] cursor-pointer select-none  p-[3px] border-[1px] border-[rgba(0,0,0,0)] transition duration-200 hover:border-[#00F3B9]`}
                      key={index}
                      onClick={() => {
                        setFlagSelectedColor(index);
                      }}
                    >
                      <div
                        className={`w-[28px] h-[28px] rounded-full ${each.colorValue}`}
                      ></div>
                    </div>
                  );
                })}
              </div>
              <div className="flex body_overline text-[rgba(0,0,0,0.87)]">
                {dataColorSelectList[flagSelectedColor].colorName}
              </div>
            </div>
            <div className="flex w-full h-[62px] items-center justify-center bg-[#0036C3] rounded-[4px] text-[#00F3B9] body_subtitle2 cursor-pointer select-none transition duration-300 hover:text-[#0036C3] hover:bg-[#00F3B9]">
              Order Now
            </div>
            <div className="text-[16px] text-[rgba(0,0,0,0.38)] font-[400] not-italic leading-[24px] tracking-[0.15px] text-center mt-[24px]">
              Estimated within 16 Aug - 23 Aug
            </div>
            <div className="flex heading_h5 text-[rgba(0,0,0,0.87)] mt-[72px]">
              {
                "Tesla believes in accelerating the world's transition to sustainable energy with electric cars."
              }
            </div>
            <div className="body_underline1 mt-[24px] mb-[40px] text-[#0036C3] cursor-pointer select-none">
              View the Tesla collection
            </div>
          </div>
          <div className="flex flex-col w-full">
            {dataCollapseDetailsList.map((each, index) => {
              return (
                <div className="flex flex-col w-full mb-[32px]" key={index}>
                  <Separator className="mb-[24px]" />
                  <CollapseDetail data={each} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full p-[56px_80px] box-border">
        <div className="flex flex-col w-full">
          <div className="heading_h4 text-[rgba(0,0,0,0.87)">
            About this car
          </div>
          <div className=" grid grid-cols-4 gap-x-[120px] mt-[45px]">
            {dataAboutCar.map((each, index) => {
              return (
                <div className="flex items-center" key={index}>
                  <div className="flex mr-[24px]">
                    <Image src={each.icon} width={each.width} alt="imgIcon" />
                  </div>
                  <div className="body_body1 text-black">{each.text}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col w-full mt-[112px]">
          <div className="heading_h4 text-[rgba(0,0,0,0.87)">
            Specifications
          </div>
          <div className="w-full grid grid-cols-3 gap-x-[300px] mt-[40px]">
            <div className="flex flex-col">
              <TextSpecificationList
                data={dataSpecificationsList["Exterior"]}
              />
            </div>
            <div className="flex flex-col">
              <TextSpecificationList
                data={dataSpecificationsList["Interior"]}
              />
            </div>
            <div className="grid grid-cols-1 gap-y-[56px]">
              <TextSpecificationList
                data={dataSpecificationsList["BEV Performance"]}
              />
              <TextSpecificationList
                data={dataSpecificationsList["Charging"]}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center mt-[70px]">
          <div className="flex w-[280px] h-[60px] items-center justify-center bg-white rounded-[4px] border-[1px] border-[#0036C3] text-[#0036C3] body_subtitle2 cursor-pointer select-none transition duration-300 hover:text-white hover:bg-[#0036C3]">
            Show all specifications
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
