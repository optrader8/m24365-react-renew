import type { NextPage } from "next";
import LogowIcon from "../components/logow-icon";
import ContainerloginScreen from "../components/containerlogin-screen";

const Web1920px: NextPage = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-row items-start justify-between py-0 pl-[171px] pr-0 box-border leading-[normal] tracking-[normal] gap-5 lg:flex-wrap lg:pl-5 lg:pr-5 lg:pb-5 lg:box-border">
      <img
        className="h-full w-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px] max-h-full object-cover"
        alt=""
        src="/background-image@2x.png"
      />
      <header className="w-[471px] flex flex-col items-start justify-start pt-[98px] px-0 pb-0 box-border max-w-full text-left text-[50px] text-white font-poppins mq750:pt-[42px] mq750:box-border mq1050:pt-16 mq1050:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[690.9px] mq750:gap-[345px]">
          <LogowIcon />
          <div className="self-stretch flex flex-col items-start justify-start gap-[30px] shrink-0">
            <b className="relative leading-[60px] z-[1]">
              <p className="m-0 tracking-[0.02em]">{`Welcome `}</p>
              <p className="m-0">
                <span className="tracking-[0.02em]">{`to `}</span>
                <span className="tracking-[-0.02em]">M24365</span>
                <span className="tracking-[0.02em]">!</span>
              </p>
            </b>
            <div className="self-stretch relative text-base tracking-[-0.02em] leading-[16px] font-body-h6-regular overflow-hidden text-ellipsis whitespace-nowrap z-[1]">
              쉽고 정확하게 계약부터 자산까지 한번에 관리하는 모니터링 업무
              플로우
            </div>
          </div>
        </div>
      </header>
      <ContainerloginScreen />
    </div>
  );
};

export default Web1920px;
