import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import IconElementwarningW from "./icon-elementwarning-w";

export type ContainercardType = {
  className?: string;
  prop?: string;
  sR?: string;
  prop1?: string;

  /** Style props */
  propBoxShadow?: CSSProperties["boxShadow"];
  propGap?: CSSProperties["gap"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propWidth2?: CSSProperties["width"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
};

const Containercard: NextPage<ContainercardType> = ({
  className = "",
  propBoxShadow,
  propGap,
  propWidth,
  propWidth1,
  prop,
  sR,
  propWidth2,
  propBackgroundColor,
  prop1,
  propBackgroundColor1,
}) => {
  const containercardStyle: CSSProperties = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
    };
  }, [propBoxShadow]);

  const topStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const titleStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const bStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const sRStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const iconStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  return (
    <div
      className={`h-[178px] w-[360px] shadow-[0px_1px_1px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white border-sub-color-boder border-[1px] border-solid box-border flex flex-col items-start justify-start p-5 gap-2 text-left text-xl text-darkslateblue font-body-h6-regular ${className}`}
      style={containercardStyle}
    >
      <div
        className="w-80 h-[65.5px] flex flex-row items-end justify-start gap-[147px]"
        style={topStyle}
      >
        <div
          className="h-[65.5px] w-[115px] flex flex-col items-start justify-start pt-[9.8px] px-0 pb-[9.7px] box-border gap-4"
          style={titleStyle}
        >
          <b
            className="w-[107px] h-[15px] relative flex items-center"
            style={bStyle}
          >
            <span className="w-full">
              <span className="leading-[24px]">{prop}</span>
              <span className="text-base leading-[19.2px]">건</span>
            </span>
          </b>
          <h3
            className="m-0 w-[116px] h-[15px] relative text-inherit leading-[24px] font-bold font-[inherit] text-black flex items-center shrink-0"
            style={sRStyle}
          >
            {sR}
          </h3>
        </div>
        <div className="h-[61.7px] w-[58px] flex flex-col items-start justify-end pt-0 px-0 pb-[3.7px] box-border">
          <div
            className="w-[58px] h-[58px] rounded-3xs bg-main-color-light-green flex flex-row items-center justify-center p-[13px] box-border"
            style={iconStyle}
          >
            <IconElementwarningW />
          </div>
        </div>
      </div>
      <div className="w-80 h-[64.5px] flex flex-col items-start justify-start gap-2.5 text-sm text-black">
        <div className="w-[321px] h-[19.5px] relative leading-[14px] flex items-center shrink-0">
          {prop1}
        </div>
        <div className="w-80 h-[35px] flex flex-col items-start justify-start">
          <div className="w-80 h-5 flex flex-row items-start justify-start pt-0 px-0 pb-2.5 box-border gap-[265px]">
            <div className="h-2.5 w-[27px] relative leading-[14px] flex items-center shrink-0">
              0%
            </div>
            <div className="h-2.5 w-[30px] relative leading-[14px] text-right flex items-center shrink-0">
              90%
            </div>
          </div>
          <div className="w-80 h-[15px] relative">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-sub-color-boder w-80 h-[15px]" />
            <div
              className="absolute top-[0px] left-[0px] rounded-3xs bg-main-color-light-green w-40 h-[15px] z-[1]"
              style={rectangleDivStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Containercard;
