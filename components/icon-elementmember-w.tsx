import type { NextPage } from "next";

export type IconElementmemberWType = {
  className?: string;
};

const IconElementmemberW: NextPage<IconElementmemberWType> = ({
  className = "",
}) => {
  return (
    <img
      className={`h-[15.1px] w-4 relative ${className}`}
      alt=""
      src="/iconapplication-3.svg"
    />
  );
};

export default IconElementmemberW;
