import type { NextPage } from "next";
import Typographyh1Blod from "./typographyh1-blod";
import Statenomal2 from "./statenomal2";
import IconElementalramOnB from "./icon-elementalram-on-b";

export type ContainerheaderType = {
  className?: string;
};

const Containerheader: NextPage<ContainerheaderType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1640px] h-[70px] bg-white border-grey-scale-light-grey border-b-[1px] border-solid box-border flex flex-row items-start justify-start py-5 px-[30px] gap-[1150px] z-[1] text-left text-xl text-black font-body-h6-regular ${className}`}
    >
      <div className="h-[27px] w-[300px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
        <Typographyh1Blod />
      </div>
      <div className="h-[30px] w-[130px] flex flex-row items-start justify-start gap-3 text-center text-sm">
        <Statenomal2 />
        <div className="h-[27px] w-6 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
          <div className="w-6 h-6 flex flex-row items-start justify-start gap-5">
            <div className="rounded-3xs bg-white border-grey-scale-light-grey border-[1px] border-solid box-border h-8 overflow-hidden hidden flex-row items-center justify-center py-[5px] px-[15px]">
              <div className="h-2.5 w-[52px] relative leading-[14px] flex items-center justify-center">
                로그아웃
              </div>
            </div>
            <IconElementalramOnB />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Containerheader;
