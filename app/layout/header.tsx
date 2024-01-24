import Image from "next/image";
import imgLogo from "../assets/images/icon/logo01.png";
import { DropdownSimple } from "../components/dropdown/DropdownSimple";
import { dataEVCarsList, dataEVGuidesList } from "../data/dataEVList";

const Header = () => {
  return (
    <div className="flex w-full h-[64px] items-center justify-between p-[0px_120px] box-border">
      <div className="flex items-center">
        <div className="w-[152px] mr-[32px]">
          <Image src={imgLogo} alt="imgLogo" />
        </div>
        <div className="flex mr-[32px]">
          <DropdownSimple textHead={"Find EV Cars"} data={dataEVCarsList} />
        </div>
        <div className="flex">
          <DropdownSimple textHead={"EV Guides"} data={dataEVGuidesList} />
        </div>
      </div>
      <div className="flex items-center">
        
      </div>
    </div>
  );
};

export default Header;
