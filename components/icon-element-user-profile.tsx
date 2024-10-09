import type { NextPage } from "next";

export type IconElementUserProfileType = {
  className?: string;
};

const IconElementUserProfile: NextPage<IconElementUserProfileType> = ({
  className = "",
}) => {
  return (
    <img
      className={`h-12 w-12 relative ${className}`}
      loading="lazy"
      alt=""
      src="/icon-elementuserprofile.svg"
    />
  );
};

export default IconElementUserProfile;
