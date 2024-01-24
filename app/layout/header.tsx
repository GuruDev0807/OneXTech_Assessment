import Image from "next/image";
import imgLogo from "../assets/images/icon/logo01.png";
import imgSingapore from "../assets/images/icon/flag/singapore.png";
import DropdownSimple from "../components/dropdown/DropdownSimple";
import {
  dataEVCarsList,
  dataEVGuidesList,
  dataLangList,
} from "../data/dataEVList";

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
        <div className="flex mr-[32px]">
          <DropdownSimple
            textHead={
              <Image src={imgSingapore} width={28} alt="imgSingapore" />
            }
            data={dataLangList}
          />
        </div>
        <div className="flex items-center select-none">
          <div className="body_subtitle2 cursor-pointer transition duration-200 hover:drop-shadow-[0px_1px_1px_rgb(0,0,0)]">
            Log In
          </div>
          <div className="body_subtitle2 m-[0px_5px]">/</div>
          <div className="body_subtitle2 cursor-pointer transition duration-200 hover:drop-shadow-[0px_1px_1px_rgb(0,0,0)]">
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
