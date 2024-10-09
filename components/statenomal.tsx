import type { NextPage } from "next";
import IconElementchevronDownB from "./icon-elementchevron-down-b";

export type StatenomalType = {
  className?: string;
};

const Statenomal: NextPage<StatenomalType> = ({ className = "" }) => {
  return (
    <div
      className={`h-8 w-[100px] shadow-[0px_1px_1px_rgba(0,_0,_0,_0.25)] rounded-8xs flex flex-col items-center justify-start text-left text-sm text-black font-body-h6-regular ${className}`}
    >
      <div className="w-[100px] h-8 rounded-3xs bg-white border-grey-scale-light-grey border-[1px] border-solid box-border flex flex-row items-center justify-between py-2 px-[15px]">
        <div className="h-2.5 w-[51px] relative leading-[14px] flex items-center shrink-0">
          12월
        </div>
        <IconElementchevronDownB />
      </div>
    </div>
  );
};

export default Statenomal;
