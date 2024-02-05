import { IconWrapper, IconProps } from "../IconWrapper";

const Receipt = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          {...props}
        >
          <path
            fill="url(#prefix__c2bad710-bea5-11ee-bdfe-0d316f90c6b9)"
            d="M0 0h72v72H0z"
          />
          <defs>
            <pattern
              id="prefix__c2bad710-bea5-11ee-bdfe-0d316f90c6b9"
              patternContentUnits="objectBoundingBox"
              width={1}
              height={1}
            >
              <use
                xlinkHref="#prefix__image0_1610_5025"
                transform="scale(.01389)"
              />
            </pattern>
            <image
              id="prefix__image0_1610_5025"
              width={72}
              height={72}
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default Receipt;
