import type { NextPage } from "next";
import Typographyh4Regular from "./typographyh4-regular";
import StateuseridNomal from "./stateuserid-nomal";

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

const typographyhRegularFlexDirection: FlexDirection | undefined = /* 여기에 적절한 값 할당 */;

export type Component1Type = {
  className?: string;
  pxRegular?: string;
  typographyh4RegularWidth?: string;
  typographyh4RegularHeight?: string;
  typographyhRegularDisplay?: string;
  typographyhRegularFlexDirection?: string;
  pxRegularWidth?: string;
  pxRegularPosition?: string;
  pxRegularFontWeight?: string;
  pxRegularTop?: string;
  pxRegularLeft?: string;
  pxRegularMinWidth?: string;
};

const Component1: NextPage<Component1Type> = ({
  className = "",
  pxRegular,
  typographyh4RegularWidth,
  typographyh4RegularHeight,
  typographyhRegularDisplay,
  typographyhRegularFlexDirection,
  pxRegularWidth,
  pxRegularPosition,
  pxRegularFontWeight,
  pxRegularTop,
  pxRegularLeft,
  pxRegularMinWidth,
}) => {
  return (
    <div
      className={`w-[474px] h-16 flex flex-col items-start justify-start gap-2.5 ${className}`}
    >
      <Typographyh4Regular
        pxRegular={pxRegular}
        typographyh4RegularWidth={typographyh4RegularWidth}
        typographyh4RegularHeight={typographyh4RegularHeight}
        typographyh4RegularDisplay={typographyhRegularDisplay}
        typographyh4RegularFlexDirection={typographyhRegularFlexDirection}
        pxRegularWidth={pxRegularWidth}
        pxRegularPosition={pxRegularPosition}
        pxRegularFontWeight={pxRegularFontWeight}
        pxRegularTop={pxRegularTop}
        pxRegularLeft={pxRegularLeft}
        pxRegularMinWidth={pxRegularMinWidth}
      />
      <StateuseridNomal />
    </div>
  );
};

export default Component1;
