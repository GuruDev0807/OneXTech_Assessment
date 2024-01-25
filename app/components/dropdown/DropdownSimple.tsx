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

const DropdownSimple = ({ textHead, data }: any) => {
  const [position, setPosition] = useState("car#01");
  const [clicked, setClickedDown] = useState(false);

  return (
    <div className="flex cursor-pointer select-none">
      <DropdownMenu onOpenChange={() => setClickedDown(!clicked)}>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center">
            <div className="body_subtitle2 text-[rgba(0,0,0,0.87)] mr-[10px]">
              {textHead}
            </div>
            <div className="flex text-[20px]">
              {clicked === false ? <MdArrowDropDown /> : <MdArrowDropUp />}
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[150px] mt-[5px]">
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            {data?.map((each: string, index: number) => {
              return (
                <DropdownMenuRadioItem
                  value={`car#${index + 1}`}
                  key={index}
                  onClick={() => {
                    setClickedDown(true);
                  }}
                >
                  <div className="body_subtitle2 text-[rgba(0,0,0,0.87)]">
                    {`#${index + 1}` + " " + each}
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

export default DropdownSimple;
