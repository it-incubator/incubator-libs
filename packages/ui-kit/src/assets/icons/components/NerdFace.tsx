import { IconWrapper, IconProps } from "../IconWrapper";

const NerdFace = (allProps: IconProps) => {
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
            fill="url(#prefix__c2b4e3a0-bea5-11ee-bdfe-0d316f90c6b9)"
            d="M0 0h72v72H0z"
          />
          <defs>
            <pattern
              id="prefix__c2b4e3a0-bea5-11ee-bdfe-0d316f90c6b9"
              patternContentUnits="objectBoundingBox"
              width={1}
              height={1}
            >
              <use
                xlinkHref="#prefix__image0_4624_21400"
                transform="scale(.01389)"
              />
            </pattern>
            <image
              id="prefix__image0_4624_21400"
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

export default NerdFace;
