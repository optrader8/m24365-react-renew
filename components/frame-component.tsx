import type { NextPage } from "next";
import { useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import LogowhiteHVer2Icon from "./logowhite-h-ver2-icon";
import Containerprofile from "./containerprofile";
import IconElementapplicationW from "./icon-elementapplication-w";
import Typographyh3Regular from "./typographyh3-regular";
import IconElementmemberW from "./icon-elementmember-w";
import StatemenuNomal from "./statemenu-nomal";

export type FrameComponentType = {
  className?: string;
  typographyhregularPxRegular?: string;
  typographyhregularPxRegular1?: string;
  typographyhregularPxRegular2?: string;
  typographyhregularPxRegular3?: string;
  typographyhregularPxRegular4?: string;
  typographyhregularPxRegular5?: string;
  typographyhregularPxRegular6?: string;
  typographyhregularPxRegular7?: string;
  typographyhregularPxRegular8?: string;
  typographyhregularPxRegular9?: string;
  typographyhregularPxRegular10?: string;
  typographyhregularPxRegular11?: string;
  typographyhregularPxRegular12?: string;
  typographyhregularPxRegular13?: string;
  typographyhregularPxRegular14?: string;
  typographyhregularPxRegular15?: string;
  typographyhregularPxRegular16?: string;
  typographyhregularPxRegular17?: string;
  typographyhregularPxRegular18?: string;
  typographyhregularPxRegular19?: string;
  typographyhregularPxRegular20?: string;
  typographyhregularPxRegular21?: string;
  typographyhregularPxRegular22?: string;
  typographyhregularPxRegular23?: string;
  typographyhregularPxRegular24?: string;
  typographyhregularPropFlex?: string;
  typographyhregularPropFlex1?: string;
  typographyhregularPropFlex2?: string;
  typographyhregularPropFlex3?: string;
  typographyhregularPropFlex4?: string;
  typographyhregularPropFlex5?: string;
  typographyhregularPropFlex6?: string;
  typographyhregularPropFlex7?: string;
  typographyhregularPropFlex8?: string;
  typographyhregularPropFlex9?: string;
  typographyhregularPropFlex10?: string;
  typographyhregularPropFlex11?: string;
  typographyhregularPropFlex12?: string;
  typographyhregularPropFlex13?: string;
  typographyhregularPropFlex14?: string;
  typographyhregularPropFlex15?: string;
  typographyhregularPropFlex16?: string;
  typographyhregularPropFlex17?: string;
  typographyhregularPropFlex18?: string;
  typographyhregularPropFlex19?: string;
  typographyhregularPropFlex20?: string;
  typographyhregularPropFlex21?: string;
  typographyhregularPropFlex22?: string;
  typographyhregularPropFlex23?: string;
  typographyhregularPropFlex24?: string;
  typographyhregularPropWidth?: string;
  typographyhregularPropWidth1?: string;
  typographyhregularPropWidth2?: string;
  typographyhregularPropWidth3?: string;
  typographyhregularPropWidth4?: string;
  typographyhregularPropWidth5?: string;
  typographyhregularPropWidth6?: string;
  typographyhregularPropWidth7?: string;
  typographyhregularPropWidth8?: string;
  typographyhregularPropWidth9?: string;
  typographyhregularPropWidth10?: string;
  typographyhregularPropWidth11?: string;
  typographyhregularPropWidth12?: string;
  typographyhregularPropWidth13?: string;
  typographyhregularPropWidth14?: string;
  typographyhregularPropWidth15?: string;
  typographyhregularPropWidth16?: string;
  typographyhregularPropWidth17?: string;
  typographyhregularPropWidth18?: string;
  typographyhregularPropWidth19?: string;
  typographyhregularPropWidth20?: string;
  typographyhregularPropWidth21?: string;
  typographyhregularPropWidth22?: string;
  typographyhregularPropWidth23?: string;
  typographyhregularPropWidth24?: string;
  typographyhregularPropDisplay?: string;
  typographyhregularPropDisplay1?: string;
  typographyhregularPropDisplay2?: string;
  typographyhregularPropDisplay3?: string;
  typographyhregularPropDisplay4?: string;
  typographyhregularPropDisplay5?: string;
  typographyhregularPropDisplay6?: string;
  typographyhregularPropDisplay7?: string;
  typographyhregularPropDisplay8?: string;
  typographyhregularPropDisplay9?: string;
  typographyhregularPropDisplay10?: string;
  typographyhregularPropDisplay11?: string;
  typographyhregularPropDisplay12?: string;
  typographyhregularPropDisplay13?: string;
  typographyhregularPropDisplay14?: string;
  typographyhregularPropDisplay15?: string;
  typographyhregularPropDisplay16?: string;
  typographyhregularPropDisplay17?: string;
  typographyhregularPropDisplay18?: string;
  typographyhregularPropDisplay19?: string;
  typographyhregularPropDisplay20?: string;
  typographyhregularPropDisplay21?: string;
  typographyhregularPropDisplay22?: string;
  typographyhregularPropDisplay23?: string;
  typographyhregularPropDisplay24?: string;
  typographyhregularPropFlex25?: string;
  typographyhregularPropFlex26?: string;
  typographyhregularPropFlex27?: string;
  typographyhregularPropFlex28?: string;
  typographyhregularPropFlex29?: string;
  typographyhregularPropFlex30?: string;
  typographyhregularPropFlex31?: string;
  typographyhregularPropFlex32?: string;
  typographyhregularPropFlex33?: string;
  typographyhregularPropFlex34?: string;
  typographyhregularPropFlex35?: string;
  typographyhregularPropFlex36?: string;
  typographyhregularPropFlex37?: string;
  typographyhregularPropFlex38?: string;
  typographyhregularPropFlex39?: string;
  typographyhregularPropFlex40?: string;
  typographyhregularPropFlex41?: string;
  typographyhregularPropFlex42?: string;
  typographyhregularPropFlex43?: string;
  typographyhregularPropFlex44?: string;
  typographyhregularPropFlex45?: string;
  typographyhregularPropFlex46?: string;
  typographyhregularPropFlex47?: string;
  typographyhregularPropFlex48?: string;
  typographyhregularPropFlex49?: string;
  typographyhregularPropPadding?: string;
  typographyhregularPropPadding1?: string;
  typographyhregularPropPadding2?: string;
  typographyhregularPropPadding3?: string;
  typographyhregularPropPadding4?: string;
  typographyhregularPropPadding5?: string;
  typographyhregularPropPadding6?: string;
  typographyhregularPropPadding7?: string;
  typographyhregularPropPadding8?: string;
  typographyhregularPropPadding9?: string;
  typographyhregularPropPadding10?: string;
  typographyhregularPropPadding11?: string;
  typographyhregularPropPadding12?: string;
  typographyhregularPropPadding13?: string;
  typographyhregularPropPadding14?: string;
  typographyhregularPropPadding15?: string;
  typographyhregularPropPadding16?: string;
  typographyhregularPropPadding17?: string;
  typographyhregularPropPadding18?: string;
  typographyhregularPropPadding19?: string;
  typographyhregularPropPadding20?: string;
  typographyhregularPropPadding21?: string;
  typographyhregularPropPadding22?: string;
  typographyhregularPropPadding23?: string;
  typographyhregularPropPadding24?: string;
  typographyhregularPropPosition?: string;
  typographyhregularPropPosition1?: string;
  typographyhregularPropPosition2?: string;
  typographyhregularPropPosition3?: string;
  typographyhregularPropPosition4?: string;
  typographyhregularPropPosition5?: string;
  typographyhregularPropPosition6?: string;
  typographyhregularPropPosition7?: string;
  typographyhregularPropPosition8?: string;
  typographyhregularPropPosition9?: string;
  typographyhregularPropPosition10?: string;
  typographyhregularPropPosition11?: string;
  typographyhregularPropPosition12?: string;
  typographyhregularPropPosition13?: string;
  typographyhregularPropPosition14?: string;
  typographyhregularPropPosition15?: string;
  typographyhregularPropPosition16?: string;
  typographyhregularPropPosition17?: string;
  typographyhregularPropPosition18?: string;
  typographyhregularPropPosition19?: string;
  typographyhregularPropPosition20?: string;
  typographyhregularPropPosition21?: string;
  typographyhregularPropPosition22?: string;
  typographyhregularPropPosition23?: string;
  typographyhregularPropPosition24?: string;
  typographyhregularPropTop?: string;
  typographyhregularPropTop1?: string;
  typographyhregularPropTop2?: string;
  typographyhregularPropTop3?: string;
  typographyhregularPropTop4?: string;
  typographyhregularPropTop5?: string;
  typographyhregularPropTop6?: string;
  typographyhregularPropTop7?: string;
  typographyhregularPropTop8?: string;
  typographyhregularPropTop9?: string;
  typographyhregularPropTop10?: string;
  typographyhregularPropTop11?: string;
  typographyhregularPropTop12?: string;
  typographyhregularPropTop13?: string;
  typographyhregularPropTop14?: string;
  typographyhregularPropTop15?: string;
  typographyhregularPropTop16?: string;
  typographyhregularPropTop17?: string;
  typographyhregularPropTop18?: string;
  typographyhregularPropTop19?: string;
  typographyhregularPropTop20?: string;
  typographyhregularPropTop21?: string;
  typographyhregularPropTop22?: string;
  typographyhregularPropTop23?: string;
  typographyhregularPropTop24?: string;
  typographyhregularPropLeft?: string;
  typographyhregularPropLeft1?: string;
  typographyhregularPropLeft2?: string;
  typographyhregularPropLeft3?: string;
  typographyhregularPropLeft4?: string;
  typographyhregularPropLeft5?: string;
  typographyhregularPropLeft6?: string;
  typographyhregularPropLeft7?: string;
  typographyhregularPropLeft8?: string;
  typographyhregularPropLeft9?: string;
  typographyhregularPropLeft10?: string;
  typographyhregularPropLeft11?: string;
  typographyhregularPropLeft12?: string;
  typographyhregularPropLeft13?: string;
  typographyhregularPropLeft14?: string;
  typographyhregularPropLeft15?: string;
  typographyhregularPropLeft16?: string;
  typographyhregularPropLeft17?: string;
  typographyhregularPropLeft18?: string;
  typographyhregularPropLeft19?: string;
  typographyhregularPropLeft20?: string;
  typographyhregularPropLeft21?: string;
  typographyhregularPropLeft22?: string;
  typographyhregularPropLeft23?: string;
  typographyhregularPropLeft24?: string;
  typographyhregularPropHeight?: string;
  typographyhregularPropHeight1?: string;
  typographyhregularPropHeight2?: string;
  typographyhregularPropHeight3?: string;
  typographyhregularPropHeight4?: string;
  typographyhregularPropHeight5?: string;
  typographyhregularPropHeight6?: string;
  typographyhregularPropHeight7?: string;
  typographyhregularPropHeight8?: string;
  typographyhregularPropHeight9?: string;
  typographyhregularPropHeight10?: string;
  typographyhregularPropHeight11?: string;
  typographyhregularPropHeight12?: string;
  typographyhregularPropHeight13?: string;
  typographyhregularPropHeight14?: string;
  typographyhregularPropHeight15?: string;
  typographyhregularPropHeight16?: string;
  typographyhregularPropHeight17?: string;
  typographyhregularPropHeight18?: string;
  typographyhregularPropHeight19?: string;
  typographyhregularPropHeight20?: string;
  typographyhregularPropHeight21?: string;
  typographyhregularPropHeight22?: string;
  typographyhregularPropHeight23?: string;
  typographyhregularPropHeight24?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  typographyhregularPxRegular,
  typographyhregularPxRegular1,
  typographyhregularPxRegular2,
  typographyhregularPxRegular3,
  typographyhregularPxRegular4,
  typographyhregularPxRegular5,
  typographyhregularPxRegular6,
  typographyhregularPxRegular7,
  typographyhregularPxRegular8,
  typographyhregularPxRegular9,
  typographyhregularPxRegular10,
  typographyhregularPxRegular11,
  typographyhregularPxRegular12,
  typographyhregularPxRegular13,
  typographyhregularPxRegular14,
  typographyhregularPxRegular15,
  typographyhregularPxRegular16,
  typographyhregularPxRegular17,
  typographyhregularPxRegular18,
  typographyhregularPxRegular19,
  typographyhregularPxRegular20,
  typographyhregularPxRegular21,
  typographyhregularPxRegular22,
  typographyhregularPxRegular23,
  typographyhregularPxRegular24,
  typographyhregularPropFlex,
  typographyhregularPropFlex1,
  typographyhregularPropFlex2,
  typographyhregularPropFlex3,
  typographyhregularPropFlex4,
  typographyhregularPropFlex5,
  typographyhregularPropFlex6,
  typographyhregularPropFlex7,
  typographyhregularPropFlex8,
  typographyhregularPropFlex9,
  typographyhregularPropFlex10,
  typographyhregularPropFlex11,
  typographyhregularPropFlex12,
  typographyhregularPropFlex13,
  typographyhregularPropFlex14,
  typographyhregularPropFlex15,
  typographyhregularPropFlex16,
  typographyhregularPropFlex17,
  typographyhregularPropFlex18,
  typographyhregularPropFlex19,
  typographyhregularPropFlex20,
  typographyhregularPropFlex21,
  typographyhregularPropFlex22,
  typographyhregularPropFlex23,
  typographyhregularPropFlex24,
  typographyhregularPropWidth,
  typographyhregularPropWidth1,
  typographyhregularPropWidth2,
  typographyhregularPropWidth3,
  typographyhregularPropWidth4,
  typographyhregularPropWidth5,
  typographyhregularPropWidth6,
  typographyhregularPropWidth7,
  typographyhregularPropWidth8,
  typographyhregularPropWidth9,
  typographyhregularPropWidth10,
  typographyhregularPropWidth11,
  typographyhregularPropWidth12,
  typographyhregularPropWidth13,
  typographyhregularPropWidth14,
  typographyhregularPropWidth15,
  typographyhregularPropWidth16,
  typographyhregularPropWidth17,
  typographyhregularPropWidth18,
  typographyhregularPropWidth19,
  typographyhregularPropWidth20,
  typographyhregularPropWidth21,
  typographyhregularPropWidth22,
  typographyhregularPropWidth23,
  typographyhregularPropWidth24,
  typographyhregularPropDisplay,
  typographyhregularPropDisplay1,
  typographyhregularPropDisplay2,
  typographyhregularPropDisplay3,
  typographyhregularPropDisplay4,
  typographyhregularPropDisplay5,
  typographyhregularPropDisplay6,
  typographyhregularPropDisplay7,
  typographyhregularPropDisplay8,
  typographyhregularPropDisplay9,
  typographyhregularPropDisplay10,
  typographyhregularPropDisplay11,
  typographyhregularPropDisplay12,
  typographyhregularPropDisplay13,
  typographyhregularPropDisplay14,
  typographyhregularPropDisplay15,
  typographyhregularPropDisplay16,
  typographyhregularPropDisplay17,
  typographyhregularPropDisplay18,
  typographyhregularPropDisplay19,
  typographyhregularPropDisplay20,
  typographyhregularPropDisplay21,
  typographyhregularPropDisplay22,
  typographyhregularPropDisplay23,
  typographyhregularPropDisplay24,
  typographyhregularPropFlex25,
  typographyhregularPropFlex26,
  typographyhregularPropFlex27,
  typographyhregularPropFlex28,
  typographyhregularPropFlex29,
  typographyhregularPropFlex30,
  typographyhregularPropFlex31,
  typographyhregularPropFlex32,
  typographyhregularPropFlex33,
  typographyhregularPropFlex34,
  typographyhregularPropFlex35,
  typographyhregularPropFlex36,
  typographyhregularPropFlex37,
  typographyhregularPropFlex38,
  typographyhregularPropFlex39,
  typographyhregularPropFlex40,
  typographyhregularPropFlex41,
  typographyhregularPropFlex42,
  typographyhregularPropFlex43,
  typographyhregularPropFlex44,
  typographyhregularPropFlex45,
  typographyhregularPropFlex46,
  typographyhregularPropFlex47,
  typographyhregularPropFlex48,
  typographyhregularPropFlex49,
  typographyhregularPropPadding,
  typographyhregularPropPadding1,
  typographyhregularPropPadding2,
  typographyhregularPropPadding3,
  typographyhregularPropPadding4,
  typographyhregularPropPadding5,
  typographyhregularPropPadding6,
  typographyhregularPropPadding7,
  typographyhregularPropPadding8,
  typographyhregularPropPadding9,
  typographyhregularPropPadding10,
  typographyhregularPropPadding11,
  typographyhregularPropPadding12,
  typographyhregularPropPadding13,
  typographyhregularPropPadding14,
  typographyhregularPropPadding15,
  typographyhregularPropPadding16,
  typographyhregularPropPadding17,
  typographyhregularPropPadding18,
  typographyhregularPropPadding19,
  typographyhregularPropPadding20,
  typographyhregularPropPadding21,
  typographyhregularPropPadding22,
  typographyhregularPropPadding23,
  typographyhregularPropPadding24,
  typographyhregularPropPosition,
  typographyhregularPropPosition1,
  typographyhregularPropPosition2,
  typographyhregularPropPosition3,
  typographyhregularPropPosition4,
  typographyhregularPropPosition5,
  typographyhregularPropPosition6,
  typographyhregularPropPosition7,
  typographyhregularPropPosition8,
  typographyhregularPropPosition9,
  typographyhregularPropPosition10,
  typographyhregularPropPosition11,
  typographyhregularPropPosition12,
  typographyhregularPropPosition13,
  typographyhregularPropPosition14,
  typographyhregularPropPosition15,
  typographyhregularPropPosition16,
  typographyhregularPropPosition17,
  typographyhregularPropPosition18,
  typographyhregularPropPosition19,
  typographyhregularPropPosition20,
  typographyhregularPropPosition21,
  typographyhregularPropPosition22,
  typographyhregularPropPosition23,
  typographyhregularPropPosition24,
  typographyhregularPropTop,
  typographyhregularPropTop1,
  typographyhregularPropTop2,
  typographyhregularPropTop3,
  typographyhregularPropTop4,
  typographyhregularPropTop5,
  typographyhregularPropTop6,
  typographyhregularPropTop7,
  typographyhregularPropTop8,
  typographyhregularPropTop9,
  typographyhregularPropTop10,
  typographyhregularPropTop11,
  typographyhregularPropTop12,
  typographyhregularPropTop13,
  typographyhregularPropTop14,
  typographyhregularPropTop15,
  typographyhregularPropTop16,
  typographyhregularPropTop17,
  typographyhregularPropTop18,
  typographyhregularPropTop19,
  typographyhregularPropTop20,
  typographyhregularPropTop21,
  typographyhregularPropTop22,
  typographyhregularPropTop23,
  typographyhregularPropTop24,
  typographyhregularPropLeft,
  typographyhregularPropLeft1,
  typographyhregularPropLeft2,
  typographyhregularPropLeft3,
  typographyhregularPropLeft4,
  typographyhregularPropLeft5,
  typographyhregularPropLeft6,
  typographyhregularPropLeft7,
  typographyhregularPropLeft8,
  typographyhregularPropLeft9,
  typographyhregularPropLeft10,
  typographyhregularPropLeft11,
  typographyhregularPropLeft12,
  typographyhregularPropLeft13,
  typographyhregularPropLeft14,
  typographyhregularPropLeft15,
  typographyhregularPropLeft16,
  typographyhregularPropLeft17,
  typographyhregularPropLeft18,
  typographyhregularPropLeft19,
  typographyhregularPropLeft20,
  typographyhregularPropLeft21,
  typographyhregularPropLeft22,
  typographyhregularPropLeft23,
  typographyhregularPropLeft24,
  typographyhregularPropHeight,
  typographyhregularPropHeight1,
  typographyhregularPropHeight2,
  typographyhregularPropHeight3,
  typographyhregularPropHeight4,
  typographyhregularPropHeight5,
  typographyhregularPropHeight6,
  typographyhregularPropHeight7,
  typographyhregularPropHeight8,
  typographyhregularPropHeight9,
  typographyhregularPropHeight10,
  typographyhregularPropHeight11,
  typographyhregularPropHeight12,
  typographyhregularPropHeight13,
  typographyhregularPropHeight14,
  typographyhregularPropHeight15,
  typographyhregularPropHeight16,
  typographyhregularPropHeight17,
  typographyhregularPropHeight18,
  typographyhregularPropHeight19,
  typographyhregularPropHeight20,
  typographyhregularPropHeight21,
  typographyhregularPropHeight22,
  typographyhregularPropHeight23,
  typographyhregularPropHeight24,
}) => {
  const [dropdownmenuDateTimePickerValue, setDropdownmenuDateTimePickerValue] =
    useState(null);
  const [
    dropdownmenuDateTimePicker1Value,
    setDropdownmenuDateTimePicker1Value,
  ] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div
        className={`w-[280px] h-[656px] flex flex-col items-start justify-start shrink-0 text-left text-sm text-black font-poppins ${className}`}
      >
        <div className="w-[280px] h-[100px] bg-main-color-deep-dark-blue overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[26px] px-[50px] pb-[11px] box-border">
          <LogowhiteHVer2Icon />
        </div>
        <div className="w-[280px] h-[182px] bg-main-color-deep-dark-blue overflow-hidden flex flex-row items-start justify-start py-[15px] px-[30px] box-border">
          <Containerprofile
            textfieldtextnumberProp="나의 서비스 요청대기"
            textfieldtextnumberProp1="나의 서비스 승인대기"
            textfieldtextnumberPropText="left"
          />
        </div>
        <div className="w-[280px] h-[374px] overflow-y-auto shrink-0 flex flex-col items-start justify-start pt-0 px-[29px] pb-[33px] box-border gap-[3px] text-white font-body-h6-regular">
          <div className="w-[222px] h-10 rounded-3xs shrink-0 flex flex-row items-start justify-start py-2.5 px-[15px] box-border">
            <div className="h-5 w-48 flex flex-row items-start justify-start pt-[2.5px] px-0 pb-[2.4px] box-border gap-[25px]">
              <IconElementapplicationW />
              <Typographyh3Regular
                propFlex={typographyhregularPropFlex}
                propWidth={typographyhregularPropWidth}
                propDisplay={typographyhregularPropDisplay}
                propFlexDirection={typographyhregularPropFlex25}
                propPadding={typographyhregularPropPadding}
                pxRegular={typographyhregularPxRegular}
                propPosition={typographyhregularPropPosition}
                propTop={typographyhregularPropTop}
                propLeft={typographyhregularPropLeft}
                propHeight={typographyhregularPropHeight}
              />
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
          </div>
          <div className="w-[222px] h-10 shrink-0">
            <DatePicker
              value={dropdownmenuDateTimePickerValue}
              onChange={(newValue: any) => {
                setDropdownmenuDateTimePickerValue(newValue);
              }}
              sx={{
                fieldset: {
                  borderColor: "transparent",
                  borderTopWidth: 1,
                  borderRightWidth: 1,
                  borderBottomWidth: 1,
                  borderLeftWidth: 1,
                },
                "&:hover": {
                  fieldset: { borderColor: "transparent" },
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                },
                "& input::placeholder": { textColor: "#fdfdfd", fontSize: 14 },
                input: {
                  color: "#fdfdfd",
                  fontSize: 14,
                  textAlign: "left",
                  fontWeight: "400",
                },
                "& .MuiInputBase-root": {
                  backgroundColor: "#0e174a",
                  height: 40,
                  gap: "8px",
                  flexDirection: { flexDirection: "row" },
                },
              }}
              slotProps={{
                textField: {
                  size: "medium",
                  fullWidth: true,
                  required: false,
                  autoFocus: false,
                  error: false,
                  placeholder: "서비스관리",
                },
                openPickerIcon: {
                  component: () => (
                    <img
                      width="16px"
                      height="15.1px"
                      src="/iconapplication-1.svg"
                    />
                  ),
                },
              }}
            />
          </div>
          <div className="w-[222px] rounded-3xs bg-main-color-deep-dark-blue h-10 shrink-0 hidden flex-col items-start justify-center py-2.5 px-[15px] box-border">
            <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[25px]">
              <div className="w-4 h-[15.1px] flex flex-row items-center justify-center">
                <div className="flex flex-row items-start justify-start p-2">
                  <div className="w-1 relative rounded-[50%] bg-white h-1" />
                </div>
              </div>
              <Typographyh3Regular
                propFlex={typographyhregularPropFlex1}
                propWidth={typographyhregularPropWidth1}
                propDisplay={typographyhregularPropDisplay1}
                propFlexDirection={typographyhregularPropFlex26}
                propPadding={typographyhregularPropPadding1}
                pxRegular={typographyhregularPxRegular1}
                propPosition={typographyhregularPropPosition1}
                propTop={typographyhregularPropTop1}
                propLeft={typographyhregularPropLeft1}
                propHeight={typographyhregularPropHeight1}
              />
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
          </div>
          <div className="w-[222px] rounded-3xs bg-main-color-deep-dark-blue h-10 shrink-0 hidden flex-col items-start justify-center py-2.5 px-[15px] box-border">
            <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[25px]">
              <div className="w-4 h-[15.1px] flex flex-row items-center justify-center">
                <div className="flex flex-row items-start justify-start p-2">
                  <div className="w-1 relative rounded-[50%] bg-white h-1" />
                </div>
              </div>
              <Typographyh3Regular
                propFlex={typographyhregularPropFlex2}
                propWidth={typographyhregularPropWidth2}
                propDisplay={typographyhregularPropDisplay2}
                propFlexDirection={typographyhregularPropFlex27}
                propPadding={typographyhregularPropPadding2}
                pxRegular={typographyhregularPxRegular2}
                propPosition={typographyhregularPropPosition2}
                propTop={typographyhregularPropTop2}
                propLeft={typographyhregularPropLeft2}
                propHeight={typographyhregularPropHeight2}
              />
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
          </div>
          <div className="w-[222px] rounded-3xs bg-main-color-deep-dark-blue h-10 shrink-0 hidden flex-col items-start justify-center py-2.5 px-[15px] box-border">
            <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[25px]">
              <div className="w-4 h-[15.1px] flex flex-row items-center justify-center">
                <div className="flex flex-row items-start justify-start p-2">
                  <div className="w-1 relative rounded-[50%] bg-white h-1" />
                </div>
              </div>
              <Typographyh3Regular
                propFlex={typographyhregularPropFlex3}
                propWidth={typographyhregularPropWidth3}
                propDisplay={typographyhregularPropDisplay3}
                propFlexDirection={typographyhregularPropFlex28}
                propPadding={typographyhregularPropPadding3}
                pxRegular={typographyhregularPxRegular3}
                propPosition={typographyhregularPropPosition3}
                propTop={typographyhregularPropTop3}
                propLeft={typographyhregularPropLeft3}
                propHeight={typographyhregularPropHeight3}
              />
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
          </div>
          <div className="w-[222px] h-10 shrink-0">
            <DatePicker
              value={dropdownmenuDateTimePicker1Value}
              onChange={(newValue: any) => {
                setDropdownmenuDateTimePicker1Value(newValue);
              }}
              sx={{
                fieldset: {
                  borderColor: "transparent",
                  borderTopWidth: 1,
                  borderRightWidth: 1,
                  borderBottomWidth: 1,
                  borderLeftWidth: 1,
                },
                "&:hover": {
                  fieldset: { borderColor: "transparent" },
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                },
                "& input::placeholder": { textColor: "#fdfdfd", fontSize: 14 },
                input: {
                  color: "#fdfdfd",
                  fontSize: 14,
                  textAlign: "left",
                  fontWeight: "400",
                },
                "& .MuiInputBase-root": {
                  height: 40,
                  gap: "8px",
                  flexDirection: { flexDirection: "row" },
                },
              }}
              slotProps={{
                textField: {
                  size: "medium",
                  fullWidth: true,
                  required: false,
                  autoFocus: false,
                  error: false,
                  placeholder: "그룹관리",
                },
                openPickerIcon: {
                  component: () => (
                    <img
                      width="16px"
                      height="15.1px"
                      src="/iconapplication-2.svg"
                    />
                  ),
                },
              }}
            />
          </div>
          <div className="w-[222px] rounded-3xs bg-main-color-deep-dark-blue h-10 shrink-0 hidden flex-col items-start justify-center py-2.5 px-[15px] box-border">
            <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[25px]">
              <div className="w-4 h-[15.1px] flex flex-row items-center justify-center">
                <div className="flex flex-row items-start justify-start p-2">
                  <div className="w-1 relative rounded-[50%] bg-white h-1" />
                </div>
              </div>
              <Typographyh3Regular
                propFlex={typographyhregularPropFlex4}
                propWidth={typographyhregularPropWidth4}
                propDisplay={typographyhregularPropDisplay4}
                propFlexDirection={typographyhregularPropFlex29}
                propPadding={typographyhregularPropPadding4}
                pxRegular={typographyhregularPxRegular4}
                propPosition={typographyhregularPropPosition4}
                propTop={typographyhregularPropTop4}
                propLeft={typographyhregularPropLeft4}
                propHeight={typographyhregularPropHeight4}
              />
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
          </div>
          <div className="w-[222px] rounded-3xs bg-main-color-deep-dark-blue h-10 shrink-0 hidden flex-col items-start justify-center py-2.5 px-[15px] box-border">
            <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[25px]">
              <div className="w-4 h-[15.1px] flex flex-row items-center justify-center">
                <div className="flex flex-row items-start justify-start p-2">
                  <div className="w-1 relative rounded-[50%] bg-white h-1" />
                </div>
              </div>
              <Typographyh3Regular
                propFlex={typographyhregularPropFlex5}
                propWidth={typographyhregularPropWidth5}
                propDisplay={typographyhregularPropDisplay5}
                propFlexDirection={typographyhregularPropFlex30}
                propPadding={typographyhregularPropPadding5}
                pxRegular={typographyhregularPxRegular5}
                propPosition={typographyhregularPropPosition5}
                propTop={typographyhregularPropTop5}
                propLeft={typographyhregularPropLeft5}
                propHeight={typographyhregularPropHeight5}
              />
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
          </div>
          <div className="w-[222px] h-10 rounded-3xs shrink-0 flex flex-row items-start justify-start py-2.5 px-[15px] box-border">
            <div className="h-5 w-48 flex flex-row items-start justify-start pt-[2.5px] px-0 pb-[2.4px] box-border gap-[25px]">
              <IconElementmemberW />
              <Typographyh3Regular
                propFlex={typographyhregularPropFlex6}
                propWidth={typographyhregularPropWidth6}
                propDisplay={typographyhregularPropDisplay6}
                propFlexDirection={typographyhregularPropFlex31}
                propPadding={typographyhregularPropPadding6}
                pxRegular={typographyhregularPxRegular6}
                propPosition={typographyhregularPropPosition6}
                propTop={typographyhregularPropTop6}
                propLeft={typographyhregularPropLeft6}
                propHeight={typographyhregularPropHeight6}
              />
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
          </div>
          <StatemenuNomal />
          <div className="w-[222px] rounded-3xs bg-main-color-deep-dark-blue h-10 shrink-0 hidden flex-col items-start justify-center py-2.5 px-[15px] box-border">
            <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[25px]">
              <div className="w-4 h-[15.1px] flex flex-row items-center justify-center">
                <div className="flex flex-row items-start justify-start p-2">
                  <div className="w-1 relative rounded-[50%] bg-white h-1" />
                </div>
              </div>
              <Typographyh3Regular
                propFlex={typographyhregularPropFlex7}
                propWidth={typographyhregularPropWidth7}
                propDisplay={typographyhregularPropDisplay7}
                propFlexDirection={typographyhregularPropFlex32}
                propPadding={typographyhregularPropPadding7}
                pxRegular={typographyhregularPxRegular7}
                propPosition={typographyhregularPropPosition7}
                propTop={typographyhregularPropTop7}
                propLeft={typographyhregularPropLeft7}
                propHeight={typographyhregularPropHeight7}
              />
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
          </div>
          <div className="w-[222px] rounded-3xs bg-main-color-deep-dark-blue h-10 shrink-0 hidden flex-col items-start justify-center py-2.5 px-[15px] box-border">
            <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[25px]">
              <div className="w-4 h-[15.1px] flex flex-row items-center justify-center">
                <div className="flex flex-row items-start justify-start p-2">
                  <div className="w-1 relative rounded-[50%] bg-white h-1" />
                </div>
              </div>
              <Typographyh3Regular
                propFlex={typographyhregularPropFlex8}
                propWidth={typographyhregularPropWidth8}
                propDisplay={typographyhregularPropDisplay8}
                propFlexDirection={typographyhregularPropFlex33}
                propPadding={typographyhregularPropPadding8}
                pxRegular={typographyhregularPxRegular8}
                propPosition={typographyhregularPropPosition8}
                propTop={typographyhregularPropTop8}
                propLeft={typographyhregularPropLeft8}
                propHeight={typographyhregularPropHeight8}
              />
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
          </div>
          <StatemenuNomal />
          <div className="w-[222px] rounded-3xs bg-main-color-deep-dark-blue h-10 shrink-0 hidden flex-col items-start justify-center py-2.5 px-[15px] box-border">
            <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[25px]">
              <div className="w-4 h-[15.1px] flex flex-row items-center justify-center">
                <div className="flex flex-row items-start justify-start p-2">
                  <div className="w-1 relative rounded-[50%] bg-white h-1" />
                </div>
              </div>
              <Typographyh3Regular
                propFlex={typographyhregularPropFlex9}
                propWidth={typographyhregularPropWidth9}
                propDisplay={typographyhregularPropDisplay9}
                propFlexDirection={typographyhregularPropFlex34}
                propPadding={typographyhregularPropPadding9}
                pxRegular={typographyhregularPxRegular9}
                propPosition={typographyhregularPropPosition9}
                propTop={typographyhregularPropTop9}
                propLeft={typographyhregularPropLeft9}
                propHeight={typographyhregularPropHeight9}
              />
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
          </div>
          <div className="w-[222px] rounded-3xs bg-main-color-deep-dark-blue h-10 shrink-0 hidden flex-col items-start justify-center py-2.5 px-[15px] box-border">
            <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[25px]">
              <div className="w-4 h-[15.1px] flex flex-row items-center justify-center">
                <div className="flex flex-row items-start justify-start p-2">
                  <div className="w-1 relative rounded-[50%] bg-white h-1" />
                </div>
              </div>
              <Typographyh3Regular
                propFlex={typographyhregularPropFlex10}
                propWidth={typographyhregularPropWidth10}
                propDisplay={typographyhregularPropDisplay10}
                propFlexDirection={typographyhregularPropFlex35}
                propPadding={typographyhregularPropPadding10}
                pxRegular={typographyhregularPxRegular10}
                propPosition={typographyhregularPropPosition10}
                propTop={typographyhregularPropTop10}
                propLeft={typographyhregularPropLeft10}
                propHeight={typographyhregularPropHeight10}
              />
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
          </div>
          <StatemenuNomal />
          <div className="w-[222px] rounded-3xs bg-main-color-deep-dark-blue h-10 shrink-0 hidden flex-col items-start justify-center py-2.5 px-[15px] box-border">
            <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[25px]">
              <div className="w-4 h-[15.1px] flex flex-row items-center justify-center">
                <div className="flex flex-row items-start justify-start p-2">
                  <div className="w-1 relative rounded-[50%] bg-white h-1" />
                </div>
              </div>
              <Typographyh3Regular
                propFlex={typographyhregularPropFlex11}
                propWidth={typographyhregularPropWidth11}
                propDisplay={typographyhregularPropDisplay11}
                propFlexDirection={typographyhregularPropFlex36}
                propPadding={typographyhregularPropPadding11}
                pxRegular={typographyhregularPxRegular11}
                propPosition={typographyhregularPropPosition11}
                propTop={typographyhregularPropTop11}
                propLeft={typographyhregularPropLeft11}
                propHeight={typographyhregularPropHeight11}
              />
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
          </div>
          <div className="w-[222px] rounded-3xs bg-main-color-deep-dark-blue h-10 shrink-0 hidden flex-col items-start justify-center py-2.5 px-[15px] box-border">
            <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[25px]">
              <div className="w-4 h-[15.1px] flex flex-row items-center justify-center">
                <div className="flex flex-row items-start justify-start p-2">
                  <div className="w-1 relative rounded-[50%] bg-white h-1" />
                </div>
              </div>
              <Typographyh3Regular
                propFlex={typographyhregularPropFlex12}
                propWidth={typographyhregularPropWidth12}
                propDisplay={typographyhregularPropDisplay12}
                propFlexDirection={typographyhregularPropFlex37}
                propPadding={typographyhregularPropPadding12}
                pxRegular={typographyhregularPxRegular12}
                propPosition={typographyhregularPropPosition12}
                propTop={typographyhregularPropTop12}
                propLeft={typographyhregularPropLeft12}
                propHeight={typographyhregularPropHeight12}
              />
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
          </div>
          <div className="w-[222px] rounded-3xs bg-main-color-deep-dark-blue h-10 shrink-0 hidden flex-col items-start justify-center py-2.5 px-[15px] box-border">
            <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[25px]">
              <div className="w-4 h-[15.1px] flex flex-row items-center justify-center">
                <div className="flex flex-row items-start justify-start p-2">
                  <div className="w-1 relative rounded-[50%] bg-white h-1" />
                </div>
              </div>
              <Typographyh3Regular
                propFlex={typographyhregularPropFlex13}
                propWidth={typographyhregularPropWidth13}
                propDisplay={typographyhregularPropDisplay13}
                propFlexDirection={typographyhregularPropFlex38}
                propPadding={typographyhregularPropPadding13}
                pxRegular={typographyhregularPxRegular13}
                propPosition={typographyhregularPropPosition13}
                propTop={typographyhregularPropTop13}
                propLeft={typographyhregularPropLeft13}
                propHeight={typographyhregularPropHeight13}
              />
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
          </div>
          <div className="w-[222px] rounded-3xs bg-main-color-deep-dark-blue h-10 shrink-0 hidden flex-col items-start justify-center py-2.5 px-[15px] box-border">
            <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[25px]">
              <div className="w-4 h-[15.1px] flex flex-row items-center justify-center">
                <div className="flex flex-row items-start justify-start p-2">
                  <div className="w-1 relative rounded-[50%] bg-white h-1" />
                </div>
              </div>
              <Typographyh3Regular
                propFlex={typographyhregularPropFlex14}
                propWidth={typographyhregularPropWidth14}
                propDisplay={typographyhregularPropDisplay14}
                propFlexDirection={typographyhregularPropFlex39}
                propPadding={typographyhregularPropPadding14}
                pxRegular={typographyhregularPxRegular14}
                propPosition={typographyhregularPropPosition14}
                propTop={typographyhregularPropTop14}
                propLeft={typographyhregularPropLeft14}
                propHeight={typographyhregularPropHeight14}
              />
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
          </div>
          <div className="w-[222px] rounded-3xs bg-main-color-deep-dark-blue h-10 shrink-0 hidden flex-col items-start justify-center py-2.5 px-[15px] box-border">
            <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[25px]">
              <div className="w-4 h-[15.1px] flex flex-row items-center justify-center">
                <div className="flex flex-row items-start justify-start p-2">
                  <div className="w-1 relative rounded-[50%] bg-white h-1" />
                </div>
              </div>
              <Typographyh3Regular
                propFlex={typographyhregularPropFlex15}
                propWidth={typographyhregularPropWidth15}
                propDisplay={typographyhregularPropDisplay15}
                propFlexDirection={typographyhregularPropFlex40}
                propPadding={typographyhregularPropPadding15}
                pxRegular={typographyhregularPxRegular15}
                propPosition={typographyhregularPropPosition15}
                propTop={typographyhregularPropTop15}
                propLeft={typographyhregularPropLeft15}
                propHeight={typographyhregularPropHeight15}
              />
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
          </div>
          <StatemenuNomal />
          <div className="w-[222px] rounded-3xs bg-main-color-deep-dark-blue h-10 shrink-0 hidden flex-col items-start justify-center py-2.5 px-[15px] box-border">
            <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[25px]">
              <div className="w-4 h-[15.1px] flex flex-row items-center justify-center">
                <div className="flex flex-row items-start justify-start p-2">
                  <div className="w-1 relative rounded-[50%] bg-white h-1" />
                </div>
              </div>
              <Typographyh3Regular
                propFlex={typographyhregularPropFlex16}
                propWidth={typographyhregularPropWidth16}
                propDisplay={typographyhregularPropDisplay16}
                propFlexDirection={typographyhregularPropFlex41}
                propPadding={typographyhregularPropPadding16}
                pxRegular={typographyhregularPxRegular16}
                propPosition={typographyhregularPropPosition16}
                propTop={typographyhregularPropTop16}
                propLeft={typographyhregularPropLeft16}
                propHeight={typographyhregularPropHeight16}
              />
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
          </div>
          <div className="w-[222px] rounded-3xs bg-main-color-deep-dark-blue h-10 shrink-0 hidden flex-col items-start justify-center py-2.5 px-[15px] box-border">
            <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[25px]">
              <div className="w-4 h-[15.1px] flex flex-row items-center justify-center">
                <div className="flex flex-row items-start justify-start p-2">
                  <div className="w-1 relative rounded-[50%] bg-white h-1" />
                </div>
              </div>
              <Typographyh3Regular
                propFlex={typographyhregularPropFlex17}
                propWidth={typographyhregularPropWidth17}
                propDisplay={typographyhregularPropDisplay17}
                propFlexDirection={typographyhregularPropFlex42}
                propPadding={typographyhregularPropPadding17}
                pxRegular={typographyhregularPxRegular17}
                propPosition={typographyhregularPropPosition17}
                propTop={typographyhregularPropTop17}
                propLeft={typographyhregularPropLeft17}
                propHeight={typographyhregularPropHeight17}
              />
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
          </div>
          <StatemenuNomal />
          <div className="w-[222px] rounded-3xs bg-main-color-deep-dark-blue h-10 shrink-0 hidden flex-col items-start justify-center py-2.5 px-[15px] box-border">
            <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[25px]">
              <div className="w-4 h-[15.1px] flex flex-row items-center justify-center">
                <div className="flex flex-row items-start justify-start p-2">
                  <div className="w-1 relative rounded-[50%] bg-white h-1" />
                </div>
              </div>
              <Typographyh3Regular
                propFlex={typographyhregularPropFlex18}
                propWidth={typographyhregularPropWidth18}
                propDisplay={typographyhregularPropDisplay18}
                propFlexDirection={typographyhregularPropFlex43}
                propPadding={typographyhregularPropPadding18}
                pxRegular={typographyhregularPxRegular18}
                propPosition={typographyhregularPropPosition18}
                propTop={typographyhregularPropTop18}
                propLeft={typographyhregularPropLeft18}
                propHeight={typographyhregularPropHeight18}
              />
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
          </div>
          <div className="w-[222px] rounded-3xs bg-main-color-deep-dark-blue h-10 shrink-0 hidden flex-col items-start justify-center py-2.5 px-[15px] box-border">
            <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[25px]">
              <div className="w-4 h-[15.1px] flex flex-row items-center justify-center">
                <div className="flex flex-row items-start justify-start p-2">
                  <div className="w-1 relative rounded-[50%] bg-white h-1" />
                </div>
              </div>
              <Typographyh3Regular
                propFlex={typographyhregularPropFlex19}
                propWidth={typographyhregularPropWidth19}
                propDisplay={typographyhregularPropDisplay19}
                propFlexDirection={typographyhregularPropFlex44}
                propPadding={typographyhregularPropPadding19}
                pxRegular={typographyhregularPxRegular19}
                propPosition={typographyhregularPropPosition19}
                propTop={typographyhregularPropTop19}
                propLeft={typographyhregularPropLeft19}
                propHeight={typographyhregularPropHeight19}
              />
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
          </div>
          <StatemenuNomal />
          <div className="w-[222px] rounded-3xs bg-main-color-deep-dark-blue h-10 shrink-0 hidden flex-col items-start justify-center py-2.5 px-[15px] box-border">
            <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[25px]">
              <div className="w-4 h-[15.1px] flex flex-row items-center justify-center">
                <div className="flex flex-row items-start justify-start p-2">
                  <div className="w-1 relative rounded-[50%] bg-white h-1" />
                </div>
              </div>
              <Typographyh3Regular
                propFlex={typographyhregularPropFlex20}
                propWidth={typographyhregularPropWidth20}
                propDisplay={typographyhregularPropDisplay20}
                propFlexDirection={typographyhregularPropFlex45}
                propPadding={typographyhregularPropPadding20}
                pxRegular={typographyhregularPxRegular20}
                propPosition={typographyhregularPropPosition20}
                propTop={typographyhregularPropTop20}
                propLeft={typographyhregularPropLeft20}
                propHeight={typographyhregularPropHeight20}
              />
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
          </div>
          <div className="w-[222px] rounded-3xs bg-main-color-deep-dark-blue h-10 shrink-0 hidden flex-col items-start justify-center py-2.5 px-[15px] box-border">
            <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[25px]">
              <div className="w-4 h-[15.1px] flex flex-row items-center justify-center">
                <div className="flex flex-row items-start justify-start p-2">
                  <div className="w-1 relative rounded-[50%] bg-white h-1" />
                </div>
              </div>
              <Typographyh3Regular
                propFlex={typographyhregularPropFlex21}
                propWidth={typographyhregularPropWidth21}
                propDisplay={typographyhregularPropDisplay21}
                propFlexDirection={typographyhregularPropFlex46}
                propPadding={typographyhregularPropPadding21}
                pxRegular={typographyhregularPxRegular21}
                propPosition={typographyhregularPropPosition21}
                propTop={typographyhregularPropTop21}
                propLeft={typographyhregularPropLeft21}
                propHeight={typographyhregularPropHeight21}
              />
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
          </div>
          <StatemenuNomal />
          <div className="w-[222px] rounded-3xs bg-main-color-deep-dark-blue h-10 shrink-0 hidden flex-col items-start justify-center py-2.5 px-[15px] box-border">
            <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[25px]">
              <div className="w-4 h-[15.1px] flex flex-row items-center justify-center">
                <div className="flex flex-row items-start justify-start p-2">
                  <div className="w-1 relative rounded-[50%] bg-white h-1" />
                </div>
              </div>
              <Typographyh3Regular
                propFlex={typographyhregularPropFlex22}
                propWidth={typographyhregularPropWidth22}
                propDisplay={typographyhregularPropDisplay22}
                propFlexDirection={typographyhregularPropFlex47}
                propPadding={typographyhregularPropPadding22}
                pxRegular={typographyhregularPxRegular22}
                propPosition={typographyhregularPropPosition22}
                propTop={typographyhregularPropTop22}
                propLeft={typographyhregularPropLeft22}
                propHeight={typographyhregularPropHeight22}
              />
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
          </div>
          <div className="w-[222px] rounded-3xs bg-main-color-deep-dark-blue h-10 shrink-0 hidden flex-col items-start justify-center py-2.5 px-[15px] box-border">
            <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[25px]">
              <div className="w-4 h-[15.1px] flex flex-row items-center justify-center">
                <div className="flex flex-row items-start justify-start p-2">
                  <div className="w-1 relative rounded-[50%] bg-white h-1" />
                </div>
              </div>
              <Typographyh3Regular
                propFlex={typographyhregularPropFlex23}
                propWidth={typographyhregularPropWidth23}
                propDisplay={typographyhregularPropDisplay23}
                propFlexDirection={typographyhregularPropFlex48}
                propPadding={typographyhregularPropPadding23}
                pxRegular={typographyhregularPxRegular23}
                propPosition={typographyhregularPropPosition23}
                propTop={typographyhregularPropTop23}
                propLeft={typographyhregularPropLeft23}
                propHeight={typographyhregularPropHeight23}
              />
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
          </div>
          <div className="w-[222px] rounded-3xs bg-main-color-deep-dark-blue h-10 shrink-0 hidden flex-col items-start justify-center py-2.5 px-[15px] box-border">
            <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[25px]">
              <div className="w-4 h-[15.1px] flex flex-row items-center justify-center">
                <div className="flex flex-row items-start justify-start p-2">
                  <div className="w-1 relative rounded-[50%] bg-white h-1" />
                </div>
              </div>
              <Typographyh3Regular
                propFlex={typographyhregularPropFlex24}
                propWidth={typographyhregularPropWidth24}
                propDisplay={typographyhregularPropDisplay24}
                propFlexDirection={typographyhregularPropFlex49}
                propPadding={typographyhregularPropPadding24}
                pxRegular={typographyhregularPxRegular24}
                propPosition={typographyhregularPropPosition24}
                propTop={typographyhregularPropTop24}
                propLeft={typographyhregularPropLeft24}
                propHeight={typographyhregularPropHeight24}
              />
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default FrameComponent;
