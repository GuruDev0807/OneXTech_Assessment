"use client";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdArrowDropDown } from "react-icons/md";

export function DropdownSimple({ textHead, data }: any) {
  const [position, setPosition] = React.useState("car#01");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center cursor-pointer">
          <div className="text-[16px] font-semibold not-italic leading-5 mr-[8px]">
            {textHead}
          </div>
          <div className="flex text-[20px]">
            <MdArrowDropDown />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[150px] mt-[5px]">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {data?.map((each: string, index: number) => {
            return (
              <DropdownMenuRadioItem value={`car#${index + 1}`} key={index}>
                {`#${index + 1}` + " " + each}
              </DropdownMenuRadioItem>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
