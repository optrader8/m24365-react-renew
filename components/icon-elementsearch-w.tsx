import type { NextPage } from "next";

export type IconElementsearchWType = {
  className?: string;
};

const IconElementsearchW: NextPage<IconElementsearchWType> = ({
  className = "",
}) => {
  return (
    <img
      className={`h-8 w-8 relative ${className}`}
      loading="lazy"
      alt=""
      src="/icon-elementsearchw.svg"
    />
  );
};

export default IconElementsearchW;
