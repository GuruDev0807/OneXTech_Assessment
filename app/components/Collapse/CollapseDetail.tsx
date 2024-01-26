import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const CollapseDetail = ({ data }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <div className="flex items-center justify-between ">
        <div className="body_subtitle2 text-[rgba(0,0,0,0.87)]">
          {data.textSubject}
        </div>
        <CollapsibleTrigger asChild>
          {!isOpen ? (
            <FaPlus className="w-[24px] h-[24px] text-[rgba(0,0,0,0.54)] cursor-pointer select-none max-pad:w-[18px] max-pad:h-[18px]" />
          ) : (
            <FaMinus className="w-[24px] h-[24px] text-[rgba(0,0,0,0.54)] cursor-pointer select-none max-pad:w-[18px] max-pad:h-[18px]" />
          )}
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent className="w-full mt-[16px]">
        <div className="text-left body_body2 ">{data.textContent}</div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapseDetail;
