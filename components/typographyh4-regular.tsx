import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Typographyh4RegularType = {
  className?: string;
  pxRegular?: string;

  /** Style props */
  typographyh4RegularWidth?: CSSProperties["width"];
  typographyh4RegularHeight?: CSSProperties["height"];
  typographyh4RegularDisplay?: CSSProperties["display"];
  typographyh4RegularFlexDirection?: CSSProperties["flexDirection"];
  pxRegularWidth?: CSSProperties["width"];
  pxRegularPosition?: CSSProperties["position"];
  pxRegularFontWeight?: CSSProperties["fontWeight"];
  pxRegularTop?: CSSProperties["top"];
  pxRegularLeft?: CSSProperties["left"];
  pxRegularMinWidth?: CSSProperties["minWidth"];
};

const Typographyh4Regular: NextPage<Typographyh4RegularType> = ({
  className = "",
  pxRegular,
  typographyh4RegularWidth,
  typographyh4RegularHeight,
  typographyh4RegularDisplay,
  typographyh4RegularFlexDirection,
  pxRegularWidth,
  pxRegularPosition,
  pxRegularFontWeight,
  pxRegularTop,
  pxRegularLeft,
  pxRegularMinWidth,
}) => {
  const typographyh4RegularStyle: CSSProperties = useMemo(() => {
    return {
      width: typographyh4RegularWidth,
      height: typographyh4RegularHeight,
      display: typographyh4RegularDisplay,
      flexDirection: typographyh4RegularFlexDirection,
    };
  }, [
    typographyh4RegularWidth,
    typographyh4RegularHeight,
    typographyh4RegularDisplay,
    typographyh4RegularFlexDirection,
  ]);

  const pxRegularStyle: CSSProperties = useMemo(() => {
    return {
      width: pxRegularWidth,
      position: pxRegularPosition,
      fontWeight: pxRegularFontWeight,
      top: pxRegularTop,
      left: pxRegularLeft,
      minWidth: pxRegularMinWidth,
    };
  }, [
    pxRegularWidth,
    pxRegularPosition,
    pxRegularFontWeight,
    pxRegularTop,
    pxRegularLeft,
    pxRegularMinWidth,
  ]);

  return (
    <div
      className={`w-[150px] h-3.5 flex flex-row items-start justify-start text-left text-sm text-black font-body-h6-regular ${className}`}
      style={typographyh4RegularStyle}
    >
      <div
        className="h-3.5 w-[141px] relative tracking-[-0.02em] leading-[14px] font-medium flex items-center overflow-hidden text-ellipsis whitespace-nowrap shrink-0"
        style={pxRegularStyle}
      >
        {pxRegular}
      </div>
    </div>
  );
};

export default Typographyh4Regular;
