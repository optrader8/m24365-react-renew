import type { NextPage } from "next";

export type IconElementapplicationWType = {
  className?: string;
};

const IconElementapplicationW: NextPage<IconElementapplicationWType> = ({
  className = "",
}) => {
  return (
    <img
      className={`h-[15.1px] w-4 relative ${className}`}
      loading="lazy"
      alt=""
      src="/iconapplication.svg"
    />
  );
};

export default IconElementapplicationW;
