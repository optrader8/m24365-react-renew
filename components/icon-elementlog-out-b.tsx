import type { NextPage } from "next";

export type IconElementlogOutBType = {
  className?: string;
};

const IconElementlogOutB: NextPage<IconElementlogOutBType> = ({
  className = "",
}) => {
  return (
    <img
      className={`h-4 w-4 relative overflow-hidden shrink-0 ${className}`}
      alt=""
      src="/icon-elementlogoutb.svg"
    />
  );
};

export default IconElementlogOutB;
