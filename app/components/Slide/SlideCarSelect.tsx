import { useState } from "react";
import Image from "next/image";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const SlideCarSelect = ({ data }: any) => {
  const [flagSelectedCar, setFlagSelectedCar] = useState(0);

  const handleSelectPrev = () => {
    let number = flagSelectedCar - 1;
    if (number < 0) {
      return setFlagSelectedCar(data.length - 1);
    }

    setFlagSelectedCar(number);
  };

  const handleSelectNext = () => {
    let number = flagSelectedCar + 1;
    if (number >= data.length) {
      return setFlagSelectedCar(0);
    }

    setFlagSelectedCar(number);
  };

  return (
    <div className="flex flex-col w-full select-none items-center">
      <div className="flex w-full items-center">
        <div
          className="flex w-[40px] h-[40px] min-w-[40px] min-h-[40px] justify-center items-center bg-[#DDFFF7] text-[#0036C3] text-[28px] rounded-full cursor-pointer select-none transition duration-200 hover:bg-[#0036C3] hover:text-[#DDFFF7] m-[0px_50px] active:scale-[0.9]"
          onClick={() => handleSelectPrev()}
        >
          <MdArrowBack />
        </div>
        <div className="flex w-full items-center ">
          <Image
            src={data[flagSelectedCar].imgSrc}
            className="flex w-full"
            style={{
              aspectRatio: 2,
              objectFit: "contain",
              objectPosition: "center",
            }}
            height={600}
            alt="imgCar"
          />
        </div>
        <div
          className="flex w-[40px] h-[40px] min-w-[40px] min-h-[40px] justify-center items-center bg-[#DDFFF7] text-[#0036C3] text-[28px] rounded-full cursor-pointer select-none transition duration-200 hover:bg-[#0036C3] hover:text-[#DDFFF7] m-[0px_50px] active:scale-[0.9]"
          onClick={() => handleSelectNext()}
        >
          <MdArrowForward />
        </div>
      </div>
      <div className={`grid grid-cols-6 gap-x-[15px] mt-[60px]`}>
        {data.map((each: any, index: number) => {
          if (index === flagSelectedCar) {
            return (
              <div
                className="flex w-[72px] h-[72px] justify-center items-center rounded-[4px] border-[1px] border-[#00F3B9]  select-none"
                key={index}
                onClick={() => {
                  setFlagSelectedCar(index);
                }}
              >
                <Image src={each.imgSrc} width={60} alt="imgCar" />
              </div>
            );
          } else {
            return (
              <div
                className="flex w-[72px] h-[72px] justify-center items-center rounded-[4px] border-[1px] border-[rgba(0,0,0,0)] opacity-10 bg-[rgba(0,0,0,0.6)] cursor-pointer select-none   hover:opacity-60 transition duration-300"
                key={index}
                onClick={() => {
                  setFlagSelectedCar(index);
                }}
              >
                <Image src={each.imgSrc} width={60} alt="imgCar" />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SlideCarSelect;
