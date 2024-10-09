import type { NextPage } from "next";
import Typographyh4Blod from "./typographyh4-blod";

export type TableheadType = {
  className?: string;
  typographyhblodPxBold?: string;
  typographyhblodPxBold1?: string;
  typographyhblodPxBold2?: string;
  typographyhblodPxBold3?: string;
  typographyhblodPxBold4?: string;
  typographyhblodPropHeight?: string;
  typographyhblodPropHeight1?: string;
  typographyhblodPropHeight2?: string;
  typographyhblodPropHeight3?: string;
  typographyhblodPropHeight4?: string;
  typographyhblodPropWidth?: string;
  typographyhblodPropWidth1?: string;
  typographyhblodPropWidth2?: string;
  typographyhblodPropWidth3?: string;
  typographyhblodPropWidth4?: string;
  typographyhblodPropDisplay?: string;
  typographyhblodPropDisplay1?: string;
  typographyhblodPropDisplay2?: string;
  typographyhblodPropDisplay3?: string;
  typographyhblodPropDisplay4?: string;
  typographyhblodPropFlexDirection?: string;
  typographyhblodPropFlexDirection1?: string;
  typographyhblodPropFlexDirection2?: string;
  typographyhblodPropFlexDirection3?: string;
  typographyhblodPropFlexDirection4?: string;
  typographyhblodPropPadding?: string;
  typographyhblodPropPadding1?: string;
  typographyhblodPropPadding2?: string;
  typographyhblodPropPadding3?: string;
  typographyhblodPropPadding4?: string;
  typographyhblodPropPosition?: string;
  typographyhblodPropPosition1?: string;
  typographyhblodPropPosition2?: string;
  typographyhblodPropPosition3?: string;
  typographyhblodPropPosition4?: string;
  typographyhblodPropTop?: string;
  typographyhblodPropTop1?: string;
  typographyhblodPropTop2?: string;
  typographyhblodPropTop3?: string;
  typographyhblodPropTop4?: string;
  typographyhblodPropLeft?: string;
  typographyhblodPropLeft1?: string;
  typographyhblodPropLeft2?: string;
  typographyhblodPropLeft3?: string;
  typographyhblodPropLeft4?: string;
  typographyhblodPropWidth11?: string;
  typographyhblodPropWidth12?: string;
  typographyhblodPropWidth13?: string;
  typographyhblodPropWidth14?: string;
  typographyhblodPropWidth15?: string;
  typographyhblodPropMinWidth?: string;
  typographyhblodPropMinWidth1?: string;
  typographyhblodPropMinWidth2?: string;
  typographyhblodPropMinWidth3?: string;
  typographyhblodPropMinWidth4?: string;
};

const Tablehead: NextPage<TableheadType> = ({
  className = "",
  typographyhblodPxBold,
  typographyhblodPxBold1,
  typographyhblodPxBold2,
  typographyhblodPxBold3,
  typographyhblodPxBold4,
  typographyhblodPropHeight,
  typographyhblodPropHeight1,
  typographyhblodPropHeight2,
  typographyhblodPropHeight3,
  typographyhblodPropHeight4,
  typographyhblodPropWidth,
  typographyhblodPropWidth1,
  typographyhblodPropWidth2,
  typographyhblodPropWidth3,
  typographyhblodPropWidth4,
  typographyhblodPropDisplay,
  typographyhblodPropDisplay1,
  typographyhblodPropDisplay2,
  typographyhblodPropDisplay3,
  typographyhblodPropDisplay4,
  typographyhblodPropFlexDirection,
  typographyhblodPropFlexDirection1,
  typographyhblodPropFlexDirection2,
  typographyhblodPropFlexDirection3,
  typographyhblodPropFlexDirection4,
  typographyhblodPropPadding,
  typographyhblodPropPadding1,
  typographyhblodPropPadding2,
  typographyhblodPropPadding3,
  typographyhblodPropPadding4,
  typographyhblodPropPosition,
  typographyhblodPropPosition1,
  typographyhblodPropPosition2,
  typographyhblodPropPosition3,
  typographyhblodPropPosition4,
  typographyhblodPropTop,
  typographyhblodPropTop1,
  typographyhblodPropTop2,
  typographyhblodPropTop3,
  typographyhblodPropTop4,
  typographyhblodPropLeft,
  typographyhblodPropLeft1,
  typographyhblodPropLeft2,
  typographyhblodPropLeft3,
  typographyhblodPropLeft4,
  typographyhblodPropWidth11,
  typographyhblodPropWidth12,
  typographyhblodPropWidth13,
  typographyhblodPropWidth14,
  typographyhblodPropWidth15,
  typographyhblodPropMinWidth,
  typographyhblodPropMinWidth1,
  typographyhblodPropMinWidth2,
  typographyhblodPropMinWidth3,
  typographyhblodPropMinWidth4,
}) => {
  return (
    <div
      className={`w-[769.5px] h-[54px] rounded-t-3xs rounded-b-none border-sub-color-boder border-[1.5px] border-solid box-border flex flex-row items-start justify-start text-left text-sm text-black font-body-h6-regular ${className}`}
    >
      <div className="h-[54px] w-[769.5px] flex flex-row items-start justify-start p-5 box-border gap-2.5">
        <div className="w-[100px] relative h-3.5 hidden">
          <b className="absolute top-[21.43%] left-[0%] leading-[14px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap w-[85.3px] h-3.5">
            점검유형
          </b>
        </div>
        <Typographyh4Blod
          propHeight={typographyhblodPropHeight}
          propWidth={typographyhblodPropWidth}
          propDisplay={typographyhblodPropDisplay}
          propFlexDirection={typographyhblodPropFlexDirection}
          propPadding={typographyhblodPropPadding}
          pxBold={typographyhblodPxBold}
          propPosition={typographyhblodPropPosition}
          propTop={typographyhblodPropTop}
          propLeft={typographyhblodPropLeft}
          propWidth1={typographyhblodPropWidth11}
          propMinWidth={typographyhblodPropMinWidth}
        />
        <Typographyh4Blod
          propHeight={typographyhblodPropHeight1}
          propWidth={typographyhblodPropWidth1}
          propDisplay={typographyhblodPropDisplay1}
          propFlexDirection={typographyhblodPropFlexDirection1}
          propPadding={typographyhblodPropPadding1}
          pxBold={typographyhblodPxBold1}
          propPosition={typographyhblodPropPosition1}
          propTop={typographyhblodPropTop1}
          propLeft={typographyhblodPropLeft1}
          propWidth1={typographyhblodPropWidth12}
          propMinWidth={typographyhblodPropMinWidth1}
        />
        <Typographyh4Blod
          propHeight={typographyhblodPropHeight2}
          propWidth={typographyhblodPropWidth2}
          propDisplay={typographyhblodPropDisplay2}
          propFlexDirection={typographyhblodPropFlexDirection2}
          propPadding={typographyhblodPropPadding2}
          pxBold={typographyhblodPxBold2}
          propPosition={typographyhblodPropPosition2}
          propTop={typographyhblodPropTop2}
          propLeft={typographyhblodPropLeft2}
          propWidth1={typographyhblodPropWidth13}
          propMinWidth={typographyhblodPropMinWidth2}
        />
        <div className="w-[100px] relative h-3.5 hidden">
          <b className="absolute top-[21.43%] left-[0%] leading-[14px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap w-[85.3px] h-3.5">
            승인담당자
          </b>
        </div>
        <div className="w-[100px] relative h-3.5 hidden">
          <b className="absolute top-[21.43%] left-[0%] leading-[14px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap w-[85.3px] h-3.5">
            점검담당자
          </b>
        </div>
        <Typographyh4Blod
          propHeight={typographyhblodPropHeight3}
          propWidth={typographyhblodPropWidth3}
          propDisplay={typographyhblodPropDisplay3}
          propFlexDirection={typographyhblodPropFlexDirection3}
          propPadding={typographyhblodPropPadding3}
          pxBold={typographyhblodPxBold3}
          propPosition={typographyhblodPropPosition3}
          propTop={typographyhblodPropTop3}
          propLeft={typographyhblodPropLeft3}
          propWidth1={typographyhblodPropWidth14}
          propMinWidth={typographyhblodPropMinWidth3}
        />
        <div className="w-20 relative h-3.5 hidden">
          <b className="absolute top-[21.43%] left-[0%] leading-[14px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap w-[68.3px] h-3.5">
            출동시간
          </b>
        </div>
        <div className="w-20 relative h-3.5 hidden">
          <b className="absolute top-[21.43%] left-[0%] leading-[14px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap w-[68.3px] h-3.5">
            작업시간
          </b>
        </div>
        <div className="w-[175px] hidden flex-row items-start justify-start">
          <Typographyh4Blod
            propHeight={typographyhblodPropHeight4}
            propWidth={typographyhblodPropWidth4}
            propDisplay={typographyhblodPropDisplay4}
            propFlexDirection={typographyhblodPropFlexDirection4}
            propPadding={typographyhblodPropPadding4}
            pxBold={typographyhblodPxBold4}
            propPosition={typographyhblodPropPosition4}
            propTop={typographyhblodPropTop4}
            propLeft={typographyhblodPropLeft4}
            propWidth1={typographyhblodPropWidth15}
            propMinWidth={typographyhblodPropMinWidth4}
          />
          <img
            className="w-[13px] relative h-[13px] overflow-hidden shrink-0 ml-[-10px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Tablehead;
