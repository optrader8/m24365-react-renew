import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Typographyh3RegularType = {
  className?: string;
  pxRegular?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
  propFlexDirection?: CSSProperties["flexDirection"];
  propPadding?: CSSProperties["padding"];
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propHeight?: CSSProperties["height"];
};

const Typographyh3Regular: NextPage<Typographyh3RegularType> = ({
  className = "",
  propFlex,
  propWidth,
  propDisplay,
  propFlexDirection,
  propPadding,
  pxRegular,
  propPosition,
  propTop,
  propLeft,
  propHeight,
}) => {
  const typographyh3RegularStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
      display: propDisplay,
      flexDirection: propFlexDirection,
      padding: propPadding,
    };
  }, [propFlex, propWidth, propDisplay, propFlexDirection, propPadding]);

  const pxRegular1Style: CSSProperties = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
      height: propHeight,
    };
  }, [propPosition, propTop, propLeft, propHeight]);

  return (
    <div
      className={`flex-1 relative h-3.5 text-left text-sm text-white font-body-h6-regular ${className}`}
      style={typographyh3RegularStyle}
    >
      <div
        className="absolute w-full top-[7.86%] left-[0%] leading-[14px] flex items-center"
        style={pxRegular1Style}
      >
        {pxRegular}
      </div>
    </div>
  );
};

export default Typographyh3Regular;
