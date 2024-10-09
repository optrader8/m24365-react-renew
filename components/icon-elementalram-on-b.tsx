import type { NextPage } from "next";

export type IconElementalramOnBType = {
  className?: string;
};

const IconElementalramOnB: NextPage<IconElementalramOnBType> = ({
  className = "",
}) => {
  return (
    <img
      className={`h-6 w-6 relative object-cover ${className}`}
      loading="lazy"
      alt=""
      src="/icon-elementalramonb@2x.png"
    />
  );
};

export default IconElementalramOnB;
