import Image from "next/image";
import imgLogo from "../assets/images/icon/logo01.png";
import DropdownSimple from "../components/Dropdown/DropdownSimple";
import DropdownLanguage from "../components/Dropdown/DropdownLanguage";
import { dataEVCarsList, dataEVGuidesList } from "../data/dataEVList";
import { dataLanguageList } from "../data/dataCountry";
import { MdMenu } from "react-icons/md";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  return (
    <div className="flex w-full h-[64px] items-center justify-between p-[0px_120px] box-border max-laptop:p-[0px_60px] max-mobile:p-[0px_20px] max-desktop:p-[0px_80px] max-pad:p-[0px_40px] ">
      <div className="flex items-center">
        <div className="w-[152px] mr-[32px]  max-laptop:w-[120px] max-laptop:mr-[25px] max-pad:w-[100px] max-pad:mr-[20px] max-mobile:w-[80px] max-mobile:mr-[15px]">
          <Image src={imgLogo} alt="imgLogo" />
        </div>
        <div className="flex mr-[32px] max-laptop:mr-[25px] max-pad:mr-[20px] max-mobile:mr-[15px] max-[650px]:hidden">
          <DropdownSimple textHead={"Find EV Cars"} data={dataEVCarsList} />
        </div>
        <div className="flex max-[650px]:hidden">
          <DropdownSimple textHead={"EV Guides"} data={dataEVGuidesList} />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex mr-[32px] max-pad:mr-[20px] max-mobile:mr-[10px]">
          <DropdownLanguage data={dataLanguageList} />
        </div>
        <div className="flex items-center select-none">
          <div className="body_subtitle2 cursor-pointer transition duration-200 hover:text-[#0036C3]">
            Log In
          </div>
          <div className="body_subtitle2 m-[0px_5px]">/</div>
          <div className="body_subtitle2 cursor-pointer transition duration-200 hover:text-[#0036C3]">
            Sign Up
          </div>
        </div>
        <div className="ml-[20px] hidden max-[650px]:flex text-[20px] cursor-pointer select-none">
          <Sheet>
            <SheetTrigger asChild>
              <MdMenu />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col w-full">
                <div className="w-[152px] mr-[32px]  max-laptop:w-[120px] max-laptop:mr-[25px] max-pad:w-[100px] max-pad:mr-[20px] max-mobile:w-[80px] max-mobile:mr-[15px]">
                  <Image src={imgLogo} alt="imgLogo" />
                </div>
                <div className="flex flex-col mt-[30px]">
                  <div className="flex flex-col">
                    <div className="body_subtitle2  mb-[15px]">
                      Find EV Cars
                    </div>
                    {dataEVCarsList.map((each, index) => {
                      return (
                        <div
                          className="body_body2 mb-[5px] ml-[20px]"
                          key={index}
                        >
                          {`#${index + 1}` + " " + each}
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-col mt-[20px]">
                    <div className="body_subtitle2  mb-[15px]">EV Guides</div>
                    {dataEVGuidesList.map((each, index) => {
                      return (
                        <div
                          className="body_body2 mb-[5px] ml-[20px]"
                          key={index}
                        >
                          {`#${index + 1}` + " " + each}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;
