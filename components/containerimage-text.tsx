import type { NextPage } from "next";
import IconElementUserProfile from "./icon-element-user-profile";
import Typographyh4Blod from "./typographyh4-blod";

export type ContainerimageTextType = {
  className?: string;
  pxBold?: string;
  propHeight?: string;
  propWidth?: string;
  propDisplay?: string;
  propFlexDirection?: string;
  propPadding?: string;
  propPosition?: string;
  propTop?: string;
  propLeft?: string;
  propWidth1?: string;
  propMinWidth?: string;
};

const ContainerimageText: NextPage<ContainerimageTextType> = ({
  className = "",
  pxBold,
  propHeight,
  propWidth,
  propDisplay,
  propFlexDirection,
  propPadding,
  propPosition,
  propTop,
  propLeft,
  propWidth1,
  propMinWidth,
}) => {
  return (
    <div
      className={`w-[200px] h-[58px] flex flex-row items-start justify-start py-[5px] px-2.5 box-border gap-[15px] text-left text-sm text-black font-poppins ${className}`}
    >
      <IconElementUserProfile />
      <div className="h-[42px] w-[117px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
        <div className="w-[117px] h-9 flex flex-col items-start justify-start py-0 px-0 box-border gap-2">
          <Typographyh4Blod
            propHeight={propHeight}
            propWidth={propWidth}
            propDisplay={propDisplay}
            propFlexDirection={propFlexDirection}
            propPadding={propPadding}
            pxBold={pxBold}
            propPosition={propPosition}
            propTop={propTop}
            propLeft={propLeft}
            propWidth1={propWidth1}
            propMinWidth={propMinWidth}
          />
          <div className="w-[130px] h-3.5 flex flex-row items-start justify-start">
            <div className="h-3.5 w-[122.3px] relative leading-[14px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
              <span className="w-full">
                <span>{`UIUX `}</span>
                <span className="font-body-h6-regular">디자이너</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerimageText;
