import type { NextPage } from "next";

export type IconElementserviceWType = {
  className?: string;
};

const IconElementserviceW: NextPage<IconElementserviceWType> = ({
  className = "",
}) => {
  return (
    <img
      className={`h-8 w-8 relative ${className}`}
      loading="lazy"
      alt=""
      src="/icon-elementservicew.svg"
    />
  );
};

export default IconElementserviceW;
