import type { NextPage } from "next";

export type Typographyh1BlodType = {
  className?: string;
};

const Typographyh1Blod: NextPage<Typographyh1BlodType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[300px] h-6 flex flex-row items-start justify-start pt-[5px] px-0 pb-1 box-border text-left text-xl text-black font-body-h6-regular ${className}`}
    >
      <a className="[text-decoration:none] h-[15px] w-[75px] relative leading-[24px] font-bold text-[inherit] inline-block shrink-0">
        대시보드
      </a>
    </div>
  );
};

export default Typographyh1Blod;
