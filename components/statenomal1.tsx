import type { NextPage } from "next";
import IconElementchevronDownB from "./icon-elementchevron-down-b";

export type Statenomal1Type = {
  className?: string;
};

const Statenomal1: NextPage<Statenomal1Type> = ({ className = "" }) => {
  return (
    <div
      className={`h-8 w-[105px] shadow-[0px_1px_1px_rgba(0,_0,_0,_0.25)] rounded-8xs flex flex-col items-center justify-start text-left text-sm text-black font-body-h6-regular ${className}`}
    >
      <div className="w-[105px] h-8 rounded-3xs bg-white border-grey-scale-light-grey border-[1px] border-solid box-border flex flex-row items-center justify-start py-2 px-[15px] gap-[15px]">
        <div className="h-2.5 w-[45px] relative leading-[14px] flex items-center shrink-0">
          2024년
        </div>
        <IconElementchevronDownB />
      </div>
    </div>
  );
};

export default Statenomal1;
