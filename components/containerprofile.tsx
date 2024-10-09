import type { NextPage } from "next";
import ContainerimageText from "./containerimage-text";
import StatetextNumberNomal from "./statetext-number-nomal";

export type ContainerprofileType = {
  className?: string;
  textfieldtextnumberProp?: string;
  textfieldtextnumberProp1?: string;
  textfieldtextnumberPropText?: string;
  textfieldtextnumberPropText1?: string;
};

const Containerprofile: NextPage<ContainerprofileType> = ({
  className = "",
  textfieldtextnumberProp,
  textfieldtextnumberProp1,
  textfieldtextnumberPropText,
  textfieldtextnumberPropText1,
}) => {
  return (
    <div
      className={`h-[152px] w-[220px] rounded-mini bg-white flex flex-col items-start justify-start py-[15px] px-2.5 box-border gap-2 text-left text-sm text-black font-poppins ${className}`}
    >
      <ContainerimageText
        pxBold="UNIONE 님"
        propHeight="14px"
        propWidth="130px"
        propDisplay="flex"
        propFlexDirection="row"
        propPadding="3px 0px 0px"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        propWidth1="111.9px"
        propMinWidth="unset"
      />
      <div className="w-[190px] h-6 flex flex-row items-start justify-start py-0 pl-2.5 pr-0 box-border">
        <StatetextNumberNomal
          prop={textfieldtextnumberProp}
          propTextAlign={textfieldtextnumberPropText}
        />
      </div>
      <div className="w-[190px] h-6 flex flex-row items-start justify-start py-0 pl-2.5 pr-0 box-border text-right text-xs font-body-h6-regular">
        <StatetextNumberNomal
          prop={textfieldtextnumberProp1}
          propTextAlign={textfieldtextnumberPropText1}
        />
      </div>
    </div>
  );
};

export default Containerprofile;
