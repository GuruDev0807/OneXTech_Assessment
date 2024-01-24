"use client";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

export function DropdownSimple({ textHead, data }: any) {
  const [position, setPosition] = useState("car#01");
  const [clicked, setClickedDown] = useState(false);

  return (
    <div className="flex cursor-pointer select-none">
      <DropdownMenu onOpenChange={() => setClickedDown(!clicked)}>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center">
            <div className="text-[16px] font-semibold not-italic leading-5 mr-[8px]">
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
                  {`#${index + 1}` + " " + each}
                </DropdownMenuRadioItem>
              );
            })}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
