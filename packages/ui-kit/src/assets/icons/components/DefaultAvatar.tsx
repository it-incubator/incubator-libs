import { IconWrapper, IconProps } from "../IconWrapper";

const DefaultAvatar = (allProps: IconProps) => {
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
          <circle cx={12} cy={12} r={12} fill="#ECEBEB" />
          <g clipPath="url(#prefix__clip0_2091_631)">
            <path
              d="M12 11.334a3.555 3.555 0 003.555-3.556A3.555 3.555 0 0012 4.222a3.555 3.555 0 00-3.556 3.556A3.555 3.555 0 0012 11.334zm0 1.777c-2.374 0-7.111 1.191-7.111 3.556v1.778H19.11v-1.778c0-2.365-4.738-3.556-7.111-3.556z"
              fill="#8C8889"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_2091_631">
              <path
                fill="#fff"
                transform="translate(1.333 .667)"
                d="M0 0h21.333v21.333H0z"
              />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default DefaultAvatar;
