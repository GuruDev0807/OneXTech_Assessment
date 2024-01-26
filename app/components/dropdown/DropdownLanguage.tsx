"use client";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import Image from "next/image";

const DropdownLanguage = ({ data }: any) => {
  const [position, setPosition] = useState("Singapore");
  const [clicked, setClickedDown] = useState(false);
  const [icon, setIcon] = useState(data[0].icon);

  return (
    <div className="flex cursor-pointer select-none">
      <DropdownMenu onOpenChange={() => setClickedDown(!clicked)}>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center">
            <div className="w-[28px] mr-[10px] max-pad:w-[22px]">
              <Image src={icon} alt="imgFlag" />
            </div>
            <div className="flex text-[20px] max-pad:text-[16px]">
              {clicked === false ? <MdArrowDropDown /> : <MdArrowDropUp />}
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-[5px]">
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            {data?.map((each: any, index: number) => {
              return (
                <DropdownMenuRadioItem
                  value={each.nameCountry}
                  key={index}
                  onClick={() => {
                    setClickedDown(true);
                    setIcon(each.icon);
                  }}
                >
                  <div className="flex w-full items-center cursor-pointer select-none">
                    <div className="w-[28px] max-pad:w-[22px]">
                      <Image src={each.icon} alt="imgFlag" />
                    </div>
                    <div className="ml-[10px] ">{each.textShort}</div>
                  </div>
                </DropdownMenuRadioItem>
              );
            })}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropdownLanguage;
