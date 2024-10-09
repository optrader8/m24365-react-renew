import type { NextPage } from "next";
import ContainermenuBar from "../components/containermenu-bar";
import Containerheader from "../components/containerheader";
import Statenomal1 from "../components/statenomal1";
import Statenomal from "../components/statenomal";
import Shapetooltip from "../components/shapetooltip";
import Containerbanner from "../components/containerbanner";
import Containercard from "../components/containercard";
import Buttontext1 from "../components/buttontext1";
import Tablehead from "../components/tablehead";
import TablecellHover from "../components/tablecell-hover";
import Tablecell from "../components/tablecell";
import Typographyh4Blod from "../components/typographyh4-blod";
import Typographyh4Regular from "../components/typographyh4-regular";

const Web1920pxVer: NextPage = () => {
  return (
    <div className="w-full relative bg-sub-color-background-color flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq1250:pl-5 mq1250:pr-5 mq1250:box-border">
      <ContainermenuBar />
      <main className="flex-1 flex flex-col items-start justify-start gap-[31px] max-w-[calc(100%_-_280px)] mq825:gap-[15px] mq1250:max-w-full">
        <Containerheader />
        <section className="self-stretch flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full text-left text-base text-black font-body-h6-regular">
          <div className="flex-1 flex flex-col items-start justify-start gap-[24.5px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-10 max-w-full mq1575:flex-wrap mq825:gap-5">
              <div className="flex-1 flex flex-col items-start justify-start gap-2.5 min-w-[500px] max-w-full mq825:min-w-full">
                <div className="self-stretch flex flex-row items-center justify-between gap-5 mq450:flex-wrap">
                  <div className="relative leading-[19.2px] font-medium">
                    이 달의 업무준수율
                  </div>
                  <div className="flex flex-row items-start justify-start gap-2.5">
                    <Statenomal1 />
                    <Statenomal />
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_1px_1px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white border-sub-color-boder border-[1px] border-solid overflow-hidden flex flex-row items-start justify-start pt-[11px] px-[23px] pb-3 gap-[23px] text-sm mq825:flex-wrap">
                  <div className="w-[238px] flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border">
                    <div className="self-stretch flex flex-col items-start justify-start gap-6">
                      <div className="w-[232px] flex flex-row items-start justify-start gap-5">
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                          <div className="flex flex-row items-start justify-start gap-[5px]">
                            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                              <div className="w-2 h-2 relative rounded-[50%] bg-darkslateblue" />
                            </div>
                            <div className="relative leading-[14px] inline-block min-w-[66px]">
                              업무준수율
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-start gap-2.5 text-right text-xs text-grey-scale-dark-grey">
                          <div className="flex-1 rounded-3xs bg-sub-color-boder flex flex-row items-start justify-start py-0 pl-0 pr-2.5">
                            <div className="h-3 flex-1 relative rounded-3xs bg-darkslateblue" />
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                            <div className="w-[25px] relative tracking-[-0.05em] leading-[14.4px] flex items-center">
                              90%
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-5">
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                          <div className="flex flex-row items-start justify-start gap-[5px]">
                            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                              <div className="w-2 h-2 relative rounded-[50%] bg-main-color-nomal-blue" />
                            </div>
                            <div className="relative leading-[14px] inline-block min-w-[66px]">
                              SR 서비스
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-start gap-2.5 text-right text-xs text-grey-scale-dark-grey">
                          <div className="h-3 flex-1 relative rounded-3xs bg-main-color-nomal-blue">
                            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-main-color-nomal-blue w-full h-full hidden" />
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                            <div className="w-[31px] relative tracking-[-0.05em] leading-[14.4px] flex items-center">
                              100%
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-5">
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                          <div className="flex flex-row items-start justify-start gap-[5px]">
                            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                              <div className="w-2 h-2 relative rounded-[50%] bg-sub-color-system-color-loading" />
                            </div>
                            <div className="relative leading-[14px] inline-block min-w-[66px]">
                              케이스오픈
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-start gap-2.5 text-right text-xs text-grey-scale-dark-grey">
                          <div className="h-3 flex-1 relative rounded-3xs bg-sub-color-system-color-loading">
                            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-sub-color-system-color-loading w-full h-full hidden" />
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                            <div className="w-[31px] relative tracking-[-0.05em] leading-[14.4px] flex items-center">
                              100%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[102px] w-px flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border">
                    <div className="w-px flex-1 relative border-sub-color-boder border-r-[1px] border-solid box-border" />
                  </div>
                  <div className="w-[247.5px] flex flex-col items-start justify-start pt-[18px] pb-0 pl-0 pr-7 box-border">
                    <div className="self-stretch flex flex-col items-start justify-start gap-6">
                      <div className="self-stretch flex flex-row items-start justify-start gap-5">
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                          <div className="flex flex-row items-start justify-start gap-[5px]">
                            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                              <div className="w-2 h-2 relative rounded-[50%] bg-main-color-blue" />
                            </div>
                            <div className="relative leading-[14px]">
                              정기점검
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-start gap-2.5 text-right text-xs text-grey-scale-dark-grey">
                          <div className="flex-1 rounded-3xs bg-sub-color-boder flex flex-row items-start justify-start py-0 pl-0 pr-2.5">
                            <div className="h-3 flex-1 relative rounded-3xs bg-main-color-blue" />
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                            <div className="w-[25px] relative tracking-[-0.05em] leading-[14.4px] flex items-center">
                              90%
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-5">
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                          <div className="flex flex-row items-start justify-start gap-[5px]">
                            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                              <div className="w-2 h-2 relative rounded-[50%] bg-main-color-light-blue" />
                            </div>
                            <div className="relative leading-[14px]">
                              작업점검
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-start gap-2.5 text-right text-xs text-grey-scale-dark-grey">
                          <div className="flex-1 rounded-3xs bg-sub-color-boder flex flex-row items-start justify-start py-0 pl-0 pr-2.5">
                            <div className="h-3 flex-1 relative rounded-3xs bg-main-color-light-blue" />
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                            <div className="w-[25px] relative tracking-[-0.05em] leading-[14.4px] flex items-center">
                              90%
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-5">
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                          <div className="flex flex-row items-start justify-start gap-[5px]">
                            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                              <div className="w-2 h-2 relative rounded-[50%] bg-main-color-light-green" />
                            </div>
                            <div className="relative leading-[14px]">
                              장애점검
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-start gap-2.5 text-right text-xs text-grey-scale-dark-grey">
                          <div className="flex-1 rounded-3xs bg-sub-color-boder flex flex-row items-start justify-start py-0 pl-0 pr-2.5">
                            <div className="h-3 flex-1 relative rounded-3xs bg-main-color-light-green" />
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                            <div className="w-[25px] relative tracking-[-0.05em] leading-[14.4px] flex items-center">
                              90%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-[54px] px-[42px] relative bg-cover bg-no-repeat bg-[top] z-[1] text-center text-base">
                    <img
                      className="h-[120px] w-[121.1px] relative object-cover hidden z-[0]"
                      alt=""
                      src="/2-1@2x.png"
                    />
                    <b className="flex-1 relative leading-[19.2px] inline-block min-w-[36.5px] z-[2]">
                      90%
                    </b>
                    <Shapetooltip />
                  </div>
                </div>
              </div>
              <Containerbanner />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-2.5 max-w-full">
              <div className="self-stretch flex flex-row items-center justify-between gap-5 mq450:flex-wrap">
                <div className="relative leading-[19.2px] font-medium">
                  서비스관리 업무현황
                </div>
                <div className="flex flex-row items-start justify-start text-sm">
                  <div className="rounded-8xs flex flex-col items-center justify-start">
                    <div className="h-8 rounded-3xs bg-sub-color-boder border-grey-scale-light-grey border-[1px] border-solid box-border flex flex-row items-center justify-start py-[9px] pl-[15px] pr-3 gap-[15px]">
                      <div className="relative leading-[14px]">2024년 12월</div>
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center gap-[46.7px] max-w-full mq1575:flex-wrap mq825:gap-[23px]">
                <Containercard
                  propBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.2)"
                  propGap="129px"
                  propWidth="134px"
                  propWidth1="96px"
                  prop="50 / 100 "
                  sR="서비스요청(SR)"
                  propWidth2="135px"
                  propBackgroundColor="#3f51b5"
                  prop1="그룹 내 요청된 서비스 목록"
                  propBackgroundColor1="#3f51b5"
                />
                <Containercard
                  propBoxShadow="0px 1px 1px rgba(0, 0, 0, 0.25)"
                  propGap="142px"
                  propWidth="119px"
                  propWidth1="107px"
                  prop="100 / 300 "
                  sR="정기점검(MA)"
                  propWidth2="120px"
                  propBackgroundColor="#69a7e4"
                  prop1="일정주기마다 진행하는 점검"
                  propBackgroundColor1="#69a7e4"
                />
                <Containercard
                  propBoxShadow="0px 1px 1px rgba(0, 0, 0, 0.25)"
                  propGap="139px"
                  propWidth="123px"
                  propWidth1="107px"
                  prop="100 / 500 "
                  sR="작업점검(WO)"
                  propWidth2="124px"
                  propBackgroundColor="#9bd5ed"
                  prop1="설비 보완·신규 작업을 위한 점검"
                  propBackgroundColor1="#9bd5ed"
                />
                <Containercard
                  prop="100 / 500 "
                  sR="장애점검(ER)"
                  prop1="장애가 발생한 설비를 보완하기 위한 점검"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-10 max-w-full mq1575:flex-wrap mq825:gap-5">
              <div className="flex-1 flex flex-col items-start justify-start gap-2.5 min-w-[500px] max-w-full mq825:min-w-full">
                <div className="w-[759px] flex flex-row items-start justify-between gap-5 max-w-full mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                    <div className="relative leading-[19.2px] font-medium">
                      그룹 서비스현황
                    </div>
                  </div>
                  <Buttontext1 iconElementplusB="/icon-elementplusb.svg" />
                </div>
                <div className="self-stretch shadow-[0px_1px_1px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white flex flex-col items-start justify-start">
                  <Tablehead
                    typographyhblodPxBold="점검제목"
                    typographyhblodPxBold1="그룹명"
                    typographyhblodPxBold2="등록자"
                    typographyhblodPxBold3="점검일시"
                    typographyhblodPxBold4="점검상태"
                    typographyhblodPropHeight="14px"
                    typographyhblodPropHeight1="14px"
                    typographyhblodPropHeight2="14px"
                    typographyhblodPropHeight3="14px"
                    typographyhblodPropHeight4="14px"
                    typographyhblodPropWidth="250px"
                    typographyhblodPropWidth1="150px"
                    typographyhblodPropWidth2="100px"
                    typographyhblodPropWidth3="130px"
                    typographyhblodPropWidth4="70px"
                    typographyhblodPropDisplay="flex"
                    typographyhblodPropDisplay1="flex"
                    typographyhblodPropDisplay2="flex"
                    typographyhblodPropDisplay3="flex"
                    typographyhblodPropDisplay4="unset"
                    typographyhblodPropFlexDirection="row"
                    typographyhblodPropFlexDirection1="row"
                    typographyhblodPropFlexDirection2="row"
                    typographyhblodPropFlexDirection3="row"
                    typographyhblodPropFlexDirection4="unset"
                    typographyhblodPropPadding="3px 0px 0px"
                    typographyhblodPropPadding1="3px 0px 0px"
                    typographyhblodPropPadding2="3px 0px 0px"
                    typographyhblodPropPadding3="3px 0px 0px"
                    typographyhblodPropPadding4="unset"
                    typographyhblodPropPosition="relative"
                    typographyhblodPropPosition1="relative"
                    typographyhblodPropPosition2="relative"
                    typographyhblodPropPosition3="relative"
                    typographyhblodPropPosition4="absolute"
                    typographyhblodPropTop="unset"
                    typographyhblodPropTop1="unset"
                    typographyhblodPropTop2="unset"
                    typographyhblodPropTop3="unset"
                    typographyhblodPropTop4="21.43%"
                    typographyhblodPropLeft="unset"
                    typographyhblodPropLeft1="unset"
                    typographyhblodPropLeft2="unset"
                    typographyhblodPropLeft3="unset"
                    typographyhblodPropLeft4="0%"
                    typographyhblodPropWidth11="214.3px"
                    typographyhblodPropWidth12="129px"
                    typographyhblodPropWidth13="86.3px"
                    typographyhblodPropWidth14="111.9px"
                    typographyhblodPropWidth15="59.7px"
                    typographyhblodPropMinWidth="unset"
                    typographyhblodPropMinWidth1="unset"
                    typographyhblodPropMinWidth2="unset"
                    typographyhblodPropMinWidth3="unset"
                    typographyhblodPropMinWidth4="unset"
                  />
                  <TablecellHover
                    typographyhregularPxRegular="점검제목을 입력해주세요"
                    typographyhregularPxRegular1="그룹명"
                    typographyhregularPxRegular2="이름"
                    typographyhregularPxRegular3="2023-12-31 00:00"
                    typographyhregularPxRegular4="요청대기"
                    typographyhregularTypographyh="250px"
                    typographyhregularTypographyh1="150px"
                    typographyhregularTypographyh2="100px"
                    typographyhregularTypographyh3="130px"
                    typographyhregularTypographyh4="60px"
                    typographyhregularTypographyh5="14px"
                    typographyhregularTypographyh6="14px"
                    typographyhregularTypographyh7="14px"
                    typographyhregularTypographyh8="14px"
                    typographyhregularTypographyh9="14px"
                    typographyhregularTypographyh10="flex"
                    typographyhregularTypographyh11="flex"
                    typographyhregularTypographyh12="flex"
                    typographyhregularTypographyh13="flex"
                    typographyhregularTypographyh14="unset"
                    typographyhregularTypographyh15="row"
                    typographyhregularTypographyh16="row"
                    typographyhregularTypographyh17="row"
                    typographyhregularTypographyh18="row"
                    typographyhregularTypographyh19="unset"
                    typographyhregularPxRegular5="234.3px"
                    typographyhregularPxRegular6="141px"
                    typographyhregularPxRegular7="94.3px"
                    typographyhregularPxRegular8="122.3px"
                    typographyhregularPxRegular9="56px"
                    typographyhregularPxRegular10="relative"
                    typographyhregularPxRegular11="relative"
                    typographyhregularPxRegular12="relative"
                    typographyhregularPxRegular13="relative"
                    typographyhregularPxRegular14="absolute"
                    typographyhregularPxRegular15="unset"
                    typographyhregularPxRegular16="unset"
                    typographyhregularPxRegular17="unset"
                    typographyhregularPxRegular18="unset"
                    typographyhregularPxRegular19="unset"
                    typographyhregularPxRegular20="unset"
                    typographyhregularPxRegular21="unset"
                    typographyhregularPxRegular22="unset"
                    typographyhregularPxRegular23="unset"
                    typographyhregularPxRegular24="0%"
                    typographyhregularPxRegular25="unset"
                    typographyhregularPxRegular26="unset"
                    typographyhregularPxRegular27="unset"
                    typographyhregularPxRegular28="unset"
                    typographyhregularPxRegular29="0%"
                    typographyhregularPxRegular30="unset"
                    typographyhregularPxRegular31="unset"
                    typographyhregularPxRegular32="unset"
                    typographyhregularPxRegular33="unset"
                    typographyhregularPxRegular34="unset"
                  />
                  <Tablecell
                    propBorderRadius="unset"
                    rectangle109="pending_I582:225688;639:8578;343:5974"
                    rectangle110="pending_I582:225688;639:8578;343:5976"
                    rectangle111="pending_I582:225688;639:8578;343:5977"
                    rectangle112="pending_I582:225688;639:8578;343:5978"
                    rectangle115="pending_I582:225688;639:8578;343:6430"
                    rectangle113="pending_I582:225688;639:8578;343:5979"
                    rectangle114="pending_I582:225688;639:8578;343:5982"
                    typographyhregularPxRegular="점검제목을 입력해주세요"
                    typographyhregularPxRegular1="그룹명"
                    typographyhregularPxRegular2="이름"
                    typographyhregularPxRegular3="2023-12-31 00:00"
                    typographyhregularPxRegular4="요청대기"
                    typographyhregularTypographyh="250px"
                    typographyhregularTypographyh1="150px"
                    typographyhregularTypographyh2="100px"
                    typographyhregularTypographyh3="130px"
                    typographyhregularTypographyh4="60px"
                    typographyhregularTypographyh5="14px"
                    typographyhregularTypographyh6="14px"
                    typographyhregularTypographyh7="14px"
                    typographyhregularTypographyh8="14px"
                    typographyhregularTypographyh9="14px"
                    typographyhregularTypographyh10="flex"
                    typographyhregularTypographyh11="flex"
                    typographyhregularTypographyh12="flex"
                    typographyhregularTypographyh13="flex"
                    typographyhregularTypographyh14="unset"
                    typographyhregularTypographyh15="row"
                    typographyhregularTypographyh16="row"
                    typographyhregularTypographyh17="row"
                    typographyhregularTypographyh18="row"
                    typographyhregularTypographyh19="unset"
                    typographyhregularPxRegular5="234.3px"
                    typographyhregularPxRegular6="141px"
                    typographyhregularPxRegular7="94.3px"
                    typographyhregularPxRegular8="122.3px"
                    typographyhregularPxRegular9="56px"
                    typographyhregularPxRegular10="relative"
                    typographyhregularPxRegular11="relative"
                    typographyhregularPxRegular12="relative"
                    typographyhregularPxRegular13="relative"
                    typographyhregularPxRegular14="absolute"
                    typographyhregularPxRegular15="unset"
                    typographyhregularPxRegular16="unset"
                    typographyhregularPxRegular17="unset"
                    typographyhregularPxRegular18="unset"
                    typographyhregularPxRegular19="unset"
                    typographyhregularPxRegular20="unset"
                    typographyhregularPxRegular21="unset"
                    typographyhregularPxRegular22="unset"
                    typographyhregularPxRegular23="unset"
                    typographyhregularPxRegular24="0%"
                    typographyhregularPxRegular25="unset"
                    typographyhregularPxRegular26="unset"
                    typographyhregularPxRegular27="unset"
                    typographyhregularPxRegular28="unset"
                    typographyhregularPxRegular29="0%"
                    typographyhregularPxRegular30="unset"
                    typographyhregularPxRegular31="unset"
                    typographyhregularPxRegular32="unset"
                    typographyhregularPxRegular33="unset"
                    typographyhregularPxRegular34="unset"
                  />
                  <Tablecell
                    propBorderRadius="unset"
                    rectangle109="pending_I582:225689;639:8578;343:5974"
                    rectangle110="pending_I582:225689;639:8578;343:5976"
                    rectangle111="pending_I582:225689;639:8578;343:5977"
                    rectangle112="pending_I582:225689;639:8578;343:5978"
                    rectangle115="pending_I582:225689;639:8578;343:6430"
                    rectangle113="pending_I582:225689;639:8578;343:5979"
                    rectangle114="pending_I582:225689;639:8578;343:5982"
                    typographyhregularPxRegular="점검제목을 입력해주세요"
                    typographyhregularPxRegular1="그룹명"
                    typographyhregularPxRegular2="이름"
                    typographyhregularPxRegular3="2023-12-31 00:00"
                    typographyhregularPxRegular4="요청대기"
                    typographyhregularTypographyh="250px"
                    typographyhregularTypographyh1="150px"
                    typographyhregularTypographyh2="100px"
                    typographyhregularTypographyh3="130px"
                    typographyhregularTypographyh4="60px"
                    typographyhregularTypographyh5="14px"
                    typographyhregularTypographyh6="14px"
                    typographyhregularTypographyh7="14px"
                    typographyhregularTypographyh8="14px"
                    typographyhregularTypographyh9="14px"
                    typographyhregularTypographyh10="flex"
                    typographyhregularTypographyh11="flex"
                    typographyhregularTypographyh12="flex"
                    typographyhregularTypographyh13="flex"
                    typographyhregularTypographyh14="unset"
                    typographyhregularTypographyh15="row"
                    typographyhregularTypographyh16="row"
                    typographyhregularTypographyh17="row"
                    typographyhregularTypographyh18="row"
                    typographyhregularTypographyh19="unset"
                    typographyhregularPxRegular5="234.3px"
                    typographyhregularPxRegular6="141px"
                    typographyhregularPxRegular7="94.3px"
                    typographyhregularPxRegular8="122.3px"
                    typographyhregularPxRegular9="56px"
                    typographyhregularPxRegular10="relative"
                    typographyhregularPxRegular11="relative"
                    typographyhregularPxRegular12="relative"
                    typographyhregularPxRegular13="relative"
                    typographyhregularPxRegular14="absolute"
                    typographyhregularPxRegular15="unset"
                    typographyhregularPxRegular16="unset"
                    typographyhregularPxRegular17="unset"
                    typographyhregularPxRegular18="unset"
                    typographyhregularPxRegular19="unset"
                    typographyhregularPxRegular20="unset"
                    typographyhregularPxRegular21="unset"
                    typographyhregularPxRegular22="unset"
                    typographyhregularPxRegular23="unset"
                    typographyhregularPxRegular24="0%"
                    typographyhregularPxRegular25="unset"
                    typographyhregularPxRegular26="unset"
                    typographyhregularPxRegular27="unset"
                    typographyhregularPxRegular28="unset"
                    typographyhregularPxRegular29="0%"
                    typographyhregularPxRegular30="unset"
                    typographyhregularPxRegular31="unset"
                    typographyhregularPxRegular32="unset"
                    typographyhregularPxRegular33="unset"
                    typographyhregularPxRegular34="unset"
                  />
                  <Tablecell
                    propBorderRadius="unset"
                    rectangle109="pending_I582:225690;639:8578;343:5974"
                    rectangle110="pending_I582:225690;639:8578;343:5976"
                    rectangle111="pending_I582:225690;639:8578;343:5977"
                    rectangle112="pending_I582:225690;639:8578;343:5978"
                    rectangle115="pending_I582:225690;639:8578;343:6430"
                    rectangle113="pending_I582:225690;639:8578;343:5979"
                    rectangle114="pending_I582:225690;639:8578;343:5982"
                    typographyhregularPxRegular="점검제목을 입력해주세요"
                    typographyhregularPxRegular1="그룹명"
                    typographyhregularPxRegular2="이름"
                    typographyhregularPxRegular3="2023-12-31 00:00"
                    typographyhregularPxRegular4="요청대기"
                    typographyhregularTypographyh="250px"
                    typographyhregularTypographyh1="150px"
                    typographyhregularTypographyh2="100px"
                    typographyhregularTypographyh3="130px"
                    typographyhregularTypographyh4="60px"
                    typographyhregularTypographyh5="14px"
                    typographyhregularTypographyh6="14px"
                    typographyhregularTypographyh7="14px"
                    typographyhregularTypographyh8="14px"
                    typographyhregularTypographyh9="14px"
                    typographyhregularTypographyh10="flex"
                    typographyhregularTypographyh11="flex"
                    typographyhregularTypographyh12="flex"
                    typographyhregularTypographyh13="flex"
                    typographyhregularTypographyh14="unset"
                    typographyhregularTypographyh15="row"
                    typographyhregularTypographyh16="row"
                    typographyhregularTypographyh17="row"
                    typographyhregularTypographyh18="row"
                    typographyhregularTypographyh19="unset"
                    typographyhregularPxRegular5="234.3px"
                    typographyhregularPxRegular6="141px"
                    typographyhregularPxRegular7="94.3px"
                    typographyhregularPxRegular8="122.3px"
                    typographyhregularPxRegular9="56px"
                    typographyhregularPxRegular10="relative"
                    typographyhregularPxRegular11="relative"
                    typographyhregularPxRegular12="relative"
                    typographyhregularPxRegular13="relative"
                    typographyhregularPxRegular14="absolute"
                    typographyhregularPxRegular15="unset"
                    typographyhregularPxRegular16="unset"
                    typographyhregularPxRegular17="unset"
                    typographyhregularPxRegular18="unset"
                    typographyhregularPxRegular19="unset"
                    typographyhregularPxRegular20="unset"
                    typographyhregularPxRegular21="unset"
                    typographyhregularPxRegular22="unset"
                    typographyhregularPxRegular23="unset"
                    typographyhregularPxRegular24="0%"
                    typographyhregularPxRegular25="unset"
                    typographyhregularPxRegular26="unset"
                    typographyhregularPxRegular27="unset"
                    typographyhregularPxRegular28="unset"
                    typographyhregularPxRegular29="0%"
                    typographyhregularPxRegular30="unset"
                    typographyhregularPxRegular31="unset"
                    typographyhregularPxRegular32="unset"
                    typographyhregularPxRegular33="unset"
                    typographyhregularPxRegular34="unset"
                  />
                  <Tablecell
                    rectangle109="pending_I582:225691;639:8578;343:5974"
                    rectangle110="pending_I582:225691;639:8578;343:5976"
                    rectangle111="pending_I582:225691;639:8578;343:5977"
                    rectangle112="pending_I582:225691;639:8578;343:5978"
                    rectangle115="pending_I582:225691;639:8578;343:6430"
                    rectangle113="pending_I582:225691;639:8578;343:5979"
                    rectangle114="pending_I582:225691;639:8578;343:5982"
                    typographyhregularPxRegular="점검제목을 입력해주세요"
                    typographyhregularPxRegular1="그룹명"
                    typographyhregularPxRegular2="이름"
                    typographyhregularPxRegular3="2023-12-31 00:00"
                    typographyhregularPxRegular4="요청대기"
                    typographyhregularTypographyh="250px"
                    typographyhregularTypographyh1="150px"
                    typographyhregularTypographyh2="100px"
                    typographyhregularTypographyh3="130px"
                    typographyhregularTypographyh4="60px"
                    typographyhregularTypographyh5="14px"
                    typographyhregularTypographyh6="14px"
                    typographyhregularTypographyh7="14px"
                    typographyhregularTypographyh8="14px"
                    typographyhregularTypographyh9="14px"
                    typographyhregularTypographyh10="flex"
                    typographyhregularTypographyh11="flex"
                    typographyhregularTypographyh12="flex"
                    typographyhregularTypographyh13="flex"
                    typographyhregularTypographyh14="unset"
                    typographyhregularTypographyh15="row"
                    typographyhregularTypographyh16="row"
                    typographyhregularTypographyh17="row"
                    typographyhregularTypographyh18="row"
                    typographyhregularTypographyh19="unset"
                    typographyhregularPxRegular5="234.3px"
                    typographyhregularPxRegular6="141px"
                    typographyhregularPxRegular7="94.3px"
                    typographyhregularPxRegular8="122.3px"
                    typographyhregularPxRegular9="56px"
                    typographyhregularPxRegular10="relative"
                    typographyhregularPxRegular11="relative"
                    typographyhregularPxRegular12="relative"
                    typographyhregularPxRegular13="relative"
                    typographyhregularPxRegular14="absolute"
                    typographyhregularPxRegular15="unset"
                    typographyhregularPxRegular16="unset"
                    typographyhregularPxRegular17="unset"
                    typographyhregularPxRegular18="unset"
                    typographyhregularPxRegular19="unset"
                    typographyhregularPxRegular20="unset"
                    typographyhregularPxRegular21="unset"
                    typographyhregularPxRegular22="unset"
                    typographyhregularPxRegular23="unset"
                    typographyhregularPxRegular24="0%"
                    typographyhregularPxRegular25="unset"
                    typographyhregularPxRegular26="unset"
                    typographyhregularPxRegular27="unset"
                    typographyhregularPxRegular28="unset"
                    typographyhregularPxRegular29="0%"
                    typographyhregularPxRegular30="unset"
                    typographyhregularPxRegular31="unset"
                    typographyhregularPxRegular32="unset"
                    typographyhregularPxRegular33="unset"
                    typographyhregularPxRegular34="unset"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-2.5 min-w-[500px] max-w-full mq825:min-w-full">
                <div className="w-[759px] flex flex-row items-start justify-between gap-5 max-w-full mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                    <div className="relative leading-[19.2px] font-medium">
                      오늘의 점검현황
                    </div>
                  </div>
                  <Buttontext1 iconElementplusB="/icon-elementplusb-1.svg" />
                </div>
                <div className="self-stretch shadow-[0px_1px_1px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white flex flex-col items-start justify-start pt-0 px-0 pb-[236px] box-border gap-5 max-w-full text-sm">
                  <div className="self-stretch rounded-t-3xs rounded-b-none border-sub-color-boder border-b-[1.5px] border-solid box-border flex flex-row items-start justify-start max-w-full">
                    <div className="flex-1 overflow-x-auto flex flex-row items-start justify-start p-5 box-border gap-2.5 max-w-full">
                      <div className="h-3.5 w-[100px] relative shrink-0 hidden">
                        <b className="absolute top-[21.43%] left-[0%] leading-[14px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap w-[85.3px]">
                          점검유형
                        </b>
                      </div>
                      <Typographyh4Blod
                        propHeight="14px"
                        propWidth="250px"
                        propDisplay="flex"
                        propFlexDirection="row"
                        propPadding="3px 0px 0px"
                        pxBold="점검제목"
                        propPosition="relative"
                        propTop="unset"
                        propLeft="unset"
                        propWidth1="214.3px"
                        propMinWidth="unset"
                      />
                      <Typographyh4Blod
                        propHeight="14px"
                        propWidth="150px"
                        propDisplay="flex"
                        propFlexDirection="row"
                        propPadding="3px 0px 0px"
                        pxBold="그룹명"
                        propPosition="relative"
                        propTop="unset"
                        propLeft="unset"
                        propWidth1="129px"
                        propMinWidth="unset"
                      />
                      <Typographyh4Blod
                        propHeight="14px"
                        propWidth="100px"
                        propDisplay="flex"
                        propFlexDirection="row"
                        propPadding="3px 0px 0px"
                        pxBold="등록자"
                        propPosition="relative"
                        propTop="unset"
                        propLeft="unset"
                        propWidth1="86.3px"
                        propMinWidth="unset"
                      />
                      <div className="h-3.5 w-[100px] relative shrink-0 hidden">
                        <b className="absolute top-[21.43%] left-[0%] leading-[14px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap w-[85.3px]">
                          승인담당자
                        </b>
                      </div>
                      <div className="h-3.5 w-[100px] relative shrink-0 hidden">
                        <b className="absolute top-[21.43%] left-[0%] leading-[14px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap w-[85.3px]">
                          점검담당자
                        </b>
                      </div>
                      <Typographyh4Blod
                        propHeight="14px"
                        propWidth="130px"
                        propDisplay="flex"
                        propFlexDirection="row"
                        propPadding="3px 0px 0px"
                        pxBold="점검일시"
                        propPosition="relative"
                        propTop="unset"
                        propLeft="unset"
                        propWidth1="111.9px"
                        propMinWidth="unset"
                      />
                      <div className="h-3.5 w-20 relative shrink-0 hidden">
                        <b className="absolute top-[21.43%] left-[0%] leading-[14px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap w-[68.3px]">
                          출동시간
                        </b>
                      </div>
                      <div className="h-3.5 w-20 relative shrink-0 hidden">
                        <b className="absolute top-[21.43%] left-[0%] leading-[14px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap w-[68.3px]">
                          작업시간
                        </b>
                      </div>
                      <div className="w-[175px] shrink-0 hidden flex-row items-start justify-start">
                        <Typographyh4Blod pxBold="점검상태" />
                        <img
                          className="h-[13px] w-[13px] relative overflow-hidden shrink-0 ml-[-10px]"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-[100px] h-3.5 relative hidden">
                    <div className="absolute top-[0%] left-[0%] leading-[14px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap w-[93.3px] h-3.5 min-w-[93.3px]">
                      장애점검(유상)
                    </div>
                  </div>
                  <div className="w-[749.5px] flex flex-row items-start justify-start py-0 pl-5 pr-0 box-border max-w-full text-center">
                    <div className="flex-1 relative leading-[14px] inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
                      오늘의 점검 현황이 없습니다.
                    </div>
                  </div>
                  <div className="w-[150px] h-3.5 relative hidden">
                    <div className="absolute top-[0%] left-[0%] leading-[14px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap w-[140px] h-3.5">
                      그룹명
                    </div>
                  </div>
                  <div className="w-[100px] h-3.5 relative hidden">
                    <div className="absolute top-[0%] left-[0%] leading-[14px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap w-[93.3px] h-3.5">
                      이름
                    </div>
                  </div>
                  <div className="w-[100px] h-3.5 relative hidden">
                    <div className="absolute top-[0%] left-[0%] leading-[14px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap w-[93.3px] h-3.5">
                      이름
                    </div>
                  </div>
                  <div className="w-[100px] h-3.5 relative hidden">
                    <div className="absolute top-[0%] left-[0%] leading-[14px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap w-[93.3px] h-3.5">
                      이름
                    </div>
                  </div>
                  <div className="w-[130px] h-3.5 relative hidden">
                    <div className="absolute top-[0%] left-[0%] leading-[14px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap w-[121.3px] h-3.5 min-w-[121.3px]">
                      2023-12-31 00:00
                    </div>
                  </div>
                  <div className="w-20 h-3.5 relative hidden">
                    <div className="absolute top-[0%] left-[0%] leading-[14px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap w-[74.7px]">
                      00:00:00
                    </div>
                  </div>
                  <div className="w-20 h-3.5 relative hidden">
                    <div className="absolute top-[0%] left-[0%] leading-[14px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap w-[74.7px]">
                      00:00:00
                    </div>
                  </div>
                  <div className="hidden flex-row items-center justify-start gap-2.5">
                    <div className="flex flex-row items-start justify-start gap-px">
                      <img className="h-2.5 w-3.5 relative" alt="" />
                      <img className="h-2.5 w-3.5 relative" alt="" />
                      <img className="h-2.5 w-3.5 relative" alt="" />
                      <img className="h-2.5 w-3.5 relative" alt="" />
                      <img className="h-2.5 w-3.5 relative" alt="" />
                      <img className="h-2.5 w-3.5 relative" alt="" />
                      <img
                        className="h-2.5 w-3.5 relative object-contain"
                        alt=""
                      />
                    </div>
                    <Typographyh4Regular
                      pxRegular="요청대기"
                      typographyh4RegularWidth="unset"
                      typographyh4RegularHeight="unset"
                      typographyh4RegularDisplay="unset"
                      typographyh4RegularFlexDirection="unset"
                      pxRegularWidth="56px"
                      pxRegularPosition="absolute"
                      pxRegularFontWeight="unset"
                      pxRegularTop="0%"
                      pxRegularLeft="0%"
                      pxRegularMinWidth="56px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Web1920pxVer;
