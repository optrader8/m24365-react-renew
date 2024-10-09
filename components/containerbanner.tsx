import type { NextPage } from "next";
import Stateaccept from "./stateaccept";
import PaginationdotV from "./paginationdot-v";

export type ContainerbannerType = {
  className?: string;
};

const Containerbanner: NextPage<ContainerbannerType> = ({ className = "" }) => {
  return (
    <div
      className={`h-[189px] w-[770px] shadow-[0px_1px_1px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-main-color-blue overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[21px] px-[25px] pb-[33px] box-border gap-1.5 text-left text-xl text-white font-body-h6-regular mq825:flex-1 mq825:min-w-full ${className}`}
    >
      <div className="h-[135px] w-[420px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
        <div className="w-[420px] h-[126px] flex flex-col items-start justify-start gap-[74px] shrink-0">
          <div className="w-[358px] h-6 flex flex-row items-start justify-start gap-[15px]">
            <div className="h-[19.5px] w-[213px] flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 box-border">
              <h3 className="m-0 w-[214px] h-[15px] relative text-inherit leading-[24px] font-bold font-[inherit] flex items-center shrink-0">
                UNIONE 님, 반갑습니다!
              </h3>
            </div>
            <Stateaccept />
          </div>
          <div className="w-[420px] h-7 flex flex-col items-start justify-start gap-2 text-sm">
            <div className="w-[260px] h-2.5 relative leading-[14px] flex items-center shrink-0">
              쉽고 정확하게 · 빠르고 안전한 데이터 관리로
            </div>
            <div className="w-[421px] h-2.5 relative leading-[14px] flex items-center shrink-0">
              계약부터 자산관리까지 한번에 모니터링 가능한 유지보수 솔루션
              M24365
            </div>
          </div>
        </div>
      </div>
      <div className="h-[207.8px] w-[349px] relative shrink-0">
        <div className="absolute top-[0px] left-[0px] w-[372px] h-[207.8px]">
          <img
            className="absolute h-[92.88%] top-[7.12%] bottom-[0%] left-[calc(50%_-_186px)] max-h-full w-[372px]"
            alt=""
            src="/illustration.svg"
          />
          <img
            className="absolute top-[calc(50%_-_103.9px)] right-[93px] w-[150px] h-[150px] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/image-web-layout-gears-1@2x.png"
          />
        </div>
        <PaginationdotV />
      </div>
    </div>
  );
};

export default Containerbanner;
