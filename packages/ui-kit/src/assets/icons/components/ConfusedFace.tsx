import { IconWrapper, IconProps } from "../IconWrapper";

const ConfusedFace = (allProps: IconProps) => {
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
            fill="url(#prefix__c28aed70-bea5-11ee-bdfe-0d316f90c6b9)"
            d="M0 0h72v72H0z"
          />
          <defs>
            <pattern
              id="prefix__c28aed70-bea5-11ee-bdfe-0d316f90c6b9"
              patternContentUnits="objectBoundingBox"
              width={1}
              height={1}
            >
              <use
                xlinkHref="#prefix__image0_4624_21397"
                transform="scale(.01389)"
              />
            </pattern>
            <image
              id="prefix__image0_4624_21397"
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

export default ConfusedFace;
