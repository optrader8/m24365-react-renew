import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type StatetextNumberNomalType = {
  className?: string;
  prop?: string;

  /** Style props */
  propTextAlign?: CSSProperties["textAlign"];
};

const StatetextNumberNomal: NextPage<StatetextNumberNomalType> = ({
  className = "",
  prop,
  propTextAlign,
}) => {
  const divStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  return (
    <div
      className={`h-[25px] w-[181px] rounded-3xs bg-white border-grey-scale-light-grey border-[0.5px] border-solid box-border flex flex-row items-start justify-start py-[5px] px-[15px] gap-[2.8px] text-right text-xs text-black font-body-h6-regular ${className}`}
    >
      <div className="h-[11.5px] w-[99px] flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border">
        <div
          className="w-[100px] h-[9px] relative tracking-[-0.05em] leading-[14.4px] font-medium flex items-center shrink-0"
          style={divStyle}
        >
          {prop}
        </div>
      </div>
      <div className="h-3.5 w-[49.2px] relative tracking-[-0.05em] leading-[14.4px] flex items-center overflow-hidden text-ellipsis shrink-0">
        0000
      </div>
    </div>
  );
};

export default StatetextNumberNomal;
