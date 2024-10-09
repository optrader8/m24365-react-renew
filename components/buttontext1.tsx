import type { NextPage } from "next";
import IconElementplusB from "./icon-elementplus-b";

export type Buttontext1Type = {
  className?: string;
  iconElementplusB?: string;
};

const Buttontext1: NextPage<Buttontext1Type> = ({
  className = "",
  iconElementplusB,
}) => {
  return (
    <div
      className={`h-8 w-[89px] rounded-3xs flex flex-row items-start justify-start p-2.5 box-border gap-[5px] text-center text-sm text-black font-body-h6-regular ${className}`}
    >
      <IconElementplusB iconElementplusB={iconElementplusB} />
      <div className="h-[11px] w-[52px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
        <div className="w-[53px] h-2.5 relative leading-[14px] flex items-center justify-center shrink-0">
          전체보기
        </div>
      </div>
    </div>
  );
};

export default Buttontext1;
