import type { NextPage } from "next";

export type PaginationdotVType = {
  className?: string;
};

const PaginationdotV: NextPage<PaginationdotVType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[63px] left-[295px] w-2 h-[21px] flex flex-row items-start justify-start z-[2] ${className}`}
    >
      <div className="h-[21px] w-2 flex flex-col items-start justify-start gap-[5px]">
        <div className="w-2 h-2 relative rounded-[50%] bg-white" />
        <div className="w-2 h-2 relative rounded-[50%] border-white border-[0px] border-solid box-border" />
      </div>
    </div>
  );
};

export default PaginationdotV;
