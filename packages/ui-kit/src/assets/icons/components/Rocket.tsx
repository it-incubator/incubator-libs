import { IconWrapper, IconProps } from "../IconWrapper";

const Rocket = (allProps: IconProps) => {
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
            fill="url(#prefix__c2bde450-bea5-11ee-bdfe-0d316f90c6b9)"
            d="M0 0h72v72H0z"
          />
          <defs>
            <pattern
              id="prefix__c2bde450-bea5-11ee-bdfe-0d316f90c6b9"
              patternContentUnits="objectBoundingBox"
              width={1}
              height={1}
            >
              <use
                xlinkHref="#prefix__image0_2433_969"
                transform="scale(.01389)"
              />
            </pattern>
            <image
              id="prefix__image0_2433_969"
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

export default Rocket;
