import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Typographyh4BlodType = {
  className?: string;
  pxBold?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
  propFlexDirection?: CSSProperties["flexDirection"];
  propPadding?: CSSProperties["padding"];
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propWidth1?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Typographyh4Blod: NextPage<Typographyh4BlodType> = ({
  className = "",
  propHeight,
  propWidth,
  propDisplay,
  propFlexDirection,
  propPadding,
  pxBold,
  propPosition,
  propTop,
  propLeft,
  propWidth1,
  propMinWidth,
}) => {
  const typographyh4BlodStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      display: propDisplay,
      flexDirection: propFlexDirection,
      padding: propPadding,
    };
  }, [propHeight, propWidth, propDisplay, propFlexDirection, propPadding]);

  const pxBoldStyle: CSSProperties = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth1,
      minWidth: propMinWidth,
    };
  }, [propPosition, propTop, propLeft, propWidth1, propMinWidth]);

  return (
    <div
      className={`relative text-left text-sm text-black font-body-h6-regular ${className}`}
      style={typographyh4BlodStyle}
    >
      <b
        className="absolute top-[21.43%] left-[0%] leading-[14px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap w-[59.7px] h-3.5 min-w-[59.7px]"
        style={pxBoldStyle}
      >
        {pxBold}
      </b>
    </div>
  );
};

export default Typographyh4Blod;
