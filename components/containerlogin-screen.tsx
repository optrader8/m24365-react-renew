import type { NextPage } from "next";
import Component1 from "./component1";
import Buttontext from "./buttontext";

export type ContainerloginScreenType = {
  className?: string;
};

const ContainerloginScreen: NextPage<ContainerloginScreenType> = ({
  className = "",
}) => {
  return (
    <div
      className={`h-[1080px] w-[634px] bg-white flex flex-col items-start justify-start p-20 box-border gap-[223.7px] z-[1] text-left text-5xl text-black font-body-h6-regular ${className}`}
    >
      <div className="w-[474px] h-[160.6px] flex flex-col items-start justify-start py-0 px-[129.5px] box-border gap-8 text-center">
        <div className="w-[152.8px] h-[110.6px] flex flex-row items-start justify-start py-0 pl-[62.2px] pr-0 box-border">
          <div className="h-[110.6px] w-[90.6px] flex flex-col items-start justify-start gap-6">
            <div className="w-[85px] h-20 flex flex-row items-start justify-start py-0 pl-[5.5px] pr-0 box-border">
              <img
                className="h-20 w-[79.5px] relative object-cover"
                loading="lazy"
                alt=""
                src="/1-1@2x.png"
              />
            </div>
            <div className="w-[90.6px] h-[6.6px] relative rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(218,_218,_218,_0.5),_rgba(218,_218,_218,_0))]" />
          </div>
        </div>
        <h2 className="m-0 w-[216px] h-[18px] relative text-inherit tracking-[0.02em] font-bold font-[inherit] flex items-center justify-center shrink-0">
          유지관리의 쉬운 시작
        </h2>
      </div>
      <div className="w-[474px] h-[305px] flex flex-col items-start justify-start gap-10 text-lg">
        <b className="w-[475px] h-[13px] relative flex items-center shrink-0">
          로그인
        </b>
        <form className="m-0 w-[474px] h-[252px] flex flex-col items-start justify-start gap-6">
          <Component1
            pxRegular="아이디"
            typographyh4RegularWidth="150px"
            typographyh4RegularHeight="14px"
            typographyhRegularDisplay="flex"
            typographyhRegularFlexDirection="row"
            pxRegularWidth="141px"
            pxRegularPosition="relative"
            pxRegularFontWeight="500"
            pxRegularTop="unset"
            pxRegularLeft="unset"
            pxRegularMinWidth="unset"
          />
          <Component1 pxRegular="비밀번호" />
          <Buttontext />
          <div className="w-[474px] h-3 flex flex-row items-start justify-start gap-[193px]">
            <div className="h-3 w-[190px] relative text-base font-medium font-body-h6-regular text-black text-left flex items-center overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
              비밀번호를 잊어버리셨나요?
            </div>
            <div className="h-3 w-[93px] relative text-base font-medium font-body-h6-regular text-main-color-nomal-blue text-right flex items-center shrink-0">
              비밀번호 찾기
            </div>
          </div>
        </form>
      </div>
      <div className="w-[326px] h-[7px] flex flex-row items-start justify-start py-0 pl-[148px] pr-0 box-border text-3xs">
        <div className="h-[7px] w-[179px] relative tracking-[-0.02em] leading-[10px] inline-block shrink-0">{`© 2021. UNIONE I&C. All rights reserved.`}</div>
      </div>
    </div>
  );
};

export default ContainerloginScreen;
