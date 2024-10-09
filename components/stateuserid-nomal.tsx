import type { NextPage } from "next";

export type StateuseridNomalType = {
  className?: string;
};

const StateuseridNomal: NextPage<StateuseridNomalType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[474px] h-10 flex flex-row items-start justify-start py-[15px] px-3.5 box-border relative ${className}`}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-white border-grey-scale-dark-grey border-[1px] border-solid box-border" />
      <input
        className="w-[121px] [border:none] [outline:none] font-body-h6-regular text-sm bg-[transparent] h-2.5 relative leading-[14px] text-grey-scale-dark-grey text-left flex items-center overflow-hidden text-ellipsis whitespace-nowrap z-[1]"
        placeholder="아이디를 입력하세요"
        type="text"
      />
    </div>
  );
};

export default StateuseridNomal;
