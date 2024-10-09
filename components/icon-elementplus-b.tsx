import type { NextPage } from "next";

export type IconElementplusBType = {
  className?: string;
  iconElementplusB?: string;
};

const IconElementplusB: NextPage<IconElementplusBType> = ({
  className = "",
  iconElementplusB,
}) => {
  return (
    <img
      className={`h-3 w-3 relative ${className}`}
      alt=""
      src={iconElementplusB}
    />
  );
};

export default IconElementplusB;
