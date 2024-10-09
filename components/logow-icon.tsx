import type { NextPage } from "next";

export type LogowIconType = {
  className?: string;
};

const LogowIcon: NextPage<LogowIconType> = ({ className = "" }) => {
  return (
    <img
      className={`w-[180px] h-[36.9px] relative object-cover shrink-0 z-[1] ${className}`}
      loading="lazy"
      alt=""
      src="/logow@2x.png"
    />
  );
};

export default LogowIcon;
