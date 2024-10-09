import type { NextPage } from "next";
import IconElementlogOutB from "./icon-elementlog-out-b";

export type Statenomal2Type = {
  className?: string;
};

const Statenomal2: NextPage<Statenomal2Type> = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer border-sub-color-boder border-[1px] border-solid py-[7px] px-[15px] bg-white h-[30px] w-[94px] shadow-[0px_1px_1px_rgba(0,_0,_0,_0.25)] rounded-xl box-border overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[5px] ${className}`}
    >
      <IconElementlogOutB />
      <div className="h-[12.5px] w-[43px] flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0 box-border">
        <a className="[text-decoration:none] w-11 h-[9px] relative text-xs tracking-[-0.05em] leading-[14.4px] font-body-h6-regular text-black text-center flex items-center justify-center shrink-0">
          로그아웃
        </a>
      </div>
    </button>
  );
};

export default Statenomal2;
