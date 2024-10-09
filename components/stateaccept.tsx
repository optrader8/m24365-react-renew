import type { NextPage } from "next";

export type StateacceptType = {
  className?: string;
};

const Stateaccept: NextPage<StateacceptType> = ({ className = "" }) => {
  return (
    <div
      className={`h-6 w-[130px] rounded-3xs bg-sub-color-system-color-previous flex flex-row items-start justify-start py-[7.5px] px-[16.5px] box-border text-center text-xs text-white font-body-h6-regular ${className}`}
    >
      <div className="h-[9px] w-[98px] relative tracking-[-0.05em] leading-[14.4px] flex items-center justify-center shrink-0">
        이용가이드 바로가기
      </div>
    </div>
  );
};

export default Stateaccept;
