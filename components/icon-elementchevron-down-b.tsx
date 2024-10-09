import type { NextPage } from "next";

export type IconElementchevronDownBType = {
  className?: string;
};

const IconElementchevronDownB: NextPage<IconElementchevronDownBType> = ({
  className = "",
}) => {
  return (
    <img
      className={`h-4 w-4 relative overflow-hidden shrink-0 ${className}`}
      alt=""
      src="/icon-elementchevrondownb.svg"
    />
  );
};

export default IconElementchevronDownB;
