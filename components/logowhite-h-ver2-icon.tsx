import type { NextPage } from "next";

export type LogowhiteHVer2IconType = {
  className?: string;
};

const LogowhiteHVer2Icon: NextPage<LogowhiteHVer2IconType> = ({
  className = "",
}) => {
  return (
    <img
      className={`h-[63px] w-[180px] relative object-cover ${className}`}
      loading="lazy"
      alt=""
      src="/logowhitehver2@2x.png"
    />
  );
};

export default LogowhiteHVer2Icon;
