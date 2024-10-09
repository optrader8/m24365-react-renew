import type { NextPage } from "next";

export type IconElementtestWType = {
  className?: string;
};

const IconElementtestW: NextPage<IconElementtestWType> = ({
  className = "",
}) => {
  return (
    <img
      className={`h-8 w-8 relative ${className}`}
      loading="lazy"
      alt=""
      src="/icon-elementtestw.svg"
    />
  );
};

export default IconElementtestW;
