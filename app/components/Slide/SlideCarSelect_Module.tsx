import { MdArrowBack, MdArrowForward } from "react-icons/md";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const SlideCarSelect = ({ data }: any) => {
  return (
    <div className="flex flex-col w-full select-none items-center">
      <div className="flex w-full items-center">
        <div className="flex w-full p-[0px_150px] flex-col box-border">
          <ImageGallery
            items={data}
            infinite={true}
            lazyLoad={true}
            showNav={true}
            showThumbnails={true}
            thumbnailPosition={"bottom"}
            showFullscreenButton={true}
            showPlayButton={false}
            renderLeftNav={(onClick) => (
              <div
                className="flex w-[40px] h-[40px] min-w-[40px] min-h-[40px] absolute left-[-90px] top-1/2 transform -translate-y-1/2 z-10 justify-center items-center bg-[#DDFFF7] text-[#0036C3] text-[28px] rounded-full cursor-pointer select-none transition duration-200 hover:bg-[#0036C3] hover:text-[#DDFFF7] active:scale-[0.9]"
                onClick={onClick}
              >
                <MdArrowBack />
              </div>
            )}
            renderRightNav={(onClick) => (
              <div
                className="flex w-[40px] h-[40px] min-w-[40px] min-h-[40px] absolute right-[-90px] top-1/2 transform -translate-y-1/2 z-10 justify-center items-center bg-[#DDFFF7] text-[#0036C3] text-[28px] rounded-full cursor-pointer select-none transition duration-200 hover:bg-[#0036C3] hover:text-[#DDFFF7] active:scale-[0.9]"
                onClick={onClick}
              >
                <MdArrowForward />
              </div>
            )}
          />
        </div>
      </div>
      <div className="flex items-center mt-[60px]"></div>
    </div>
  );
};

export default SlideCarSelect;
