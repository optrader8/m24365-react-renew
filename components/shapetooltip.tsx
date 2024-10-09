import type { NextPage } from "next";

export type ShapetooltipType = {
  className?: string;
};

const Shapetooltip: NextPage<ShapetooltipType> = ({ className = "" }) => {
  return (
    <div
      className={`h-[25px] w-[65.6px] !m-[0] absolute top-[12px] right-[-42.2px] flex flex-row items-start justify-start z-[2] text-center text-3xs text-white font-body-h6-regular ${className}`}
    >
      <img
        className="h-[25px] w-[65.6px] relative"
        loading="lazy"
        alt=""
        src="/union.svg"
      />
      <div className="h-[21px] w-[37px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border ml-[-47.2px]">
        <a className="[text-decoration:none] w-[38px] h-[17px] relative leading-[16.8px] text-[inherit] flex items-center justify-center shrink-0 z-[1]">
          정기점검
        </a>
      </div>
    </div>
  );
};

export default Shapetooltip;
