import { IconWrapper, IconProps } from "../IconWrapper";

const Send = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clipPath="url(#prefix__clip0_1161_3631)">
            <path
              d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_1161_3631">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default Send;
