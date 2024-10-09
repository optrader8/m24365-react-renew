import type { NextPage } from "next";

export type IconElementwarningWType = {
  className?: string;
};

const IconElementwarningW: NextPage<IconElementwarningWType> = ({
  className = "",
}) => {
  return (
    <img
      className={`h-8 w-8 relative ${className}`}
      loading="lazy"
      alt=""
      src="/icon-elementwarningw.svg"
    />
  );
};

export default IconElementwarningW;
