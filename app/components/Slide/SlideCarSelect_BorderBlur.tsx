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
    <div className="flex w-full items-center select-none">
      <div
        className="flex w-[40px] h-[40px] min-w-[40px] min-h-[40px] justify-center items-center bg-[#DDFFF7] text-[#0036C3] text-[28px] rounded-full cursor-pointer select-none transition duration-300 hover:bg-[#0036C3] hover:text-[#DDFFF7] m-[0px_50px] active:scale-[0.9]"
        onClick={() => handleSelectPrev()}
      >
        <MdArrowBack />
      </div>
      <div
        className="flex w-full items-center "
        style={{
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 30px calc(100% - 30px), transparent)",
        }}
      >
        <Image
          src={data[flagSelectedCar].imgSrc}
          className="flex w-full shadow-[0px_0px_30px_rgba(0,0,0,0.8)] "
          style={{
            aspectRatio: 2,
            objectFit: "cover",
            objectPosition: "center",
            WebkitMaskImage:
              "linear-gradient(transparent, black 30px calc(100% - 30px), transparent)",
          }}
          alt="imgCar"
        />
      </div>
      <div
        className="flex w-[40px] h-[40px] min-w-[40px] min-h-[40px] justify-center items-center bg-[#DDFFF7] text-[#0036C3] text-[28px] rounded-full cursor-pointer select-none transition duration-300 hover:bg-[#0036C3] hover:text-[#DDFFF7] m-[0px_50px] active:scale-[0.9]"
        onClick={() => handleSelectNext()}
      >
        <MdArrowForward />
      </div>
    </div>
  );
};

export default SlideCarSelect;
