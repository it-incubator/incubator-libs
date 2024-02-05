import { IconWrapper, IconProps } from "../IconWrapper";

const Fire = (allProps: IconProps) => {
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
            fill="url(#prefix__c29c5290-bea5-11ee-bdfe-0d316f90c6b9)"
            d="M0 0h72v72H0z"
          />
          <defs>
            <pattern
              id="prefix__c29c5290-bea5-11ee-bdfe-0d316f90c6b9"
              patternContentUnits="objectBoundingBox"
              width={1}
              height={1}
            >
              <use
                xlinkHref="#prefix__image0_4624_20503"
                transform="scale(.01389)"
              />
            </pattern>
            <image
              id="prefix__image0_4624_20503"
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

export default Fire;
