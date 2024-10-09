import type { NextPage } from "next";

export type LogowhiteHVer1IconType = {
  className?: string;
};

const LogowhiteHVer1Icon: NextPage<LogowhiteHVer1IconType> = ({
  className = "",
}) => {
  return (
    <img
      className={`w-20 h-[22.2px] relative object-cover ${className}`}
      loading="lazy"
      alt=""
      src="/logowhitehver1@2x.png"
    />
  );
};

export default LogowhiteHVer1Icon;
