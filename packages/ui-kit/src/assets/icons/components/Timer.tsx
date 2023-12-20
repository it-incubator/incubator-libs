import { IconWrapper, IconProps } from "../IconWrapper";

const Timer = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_2633_1103)">
            <path
              d="M14 1h-4c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1zm-2 13c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1zm7.03-6.61l.75-.75a.993.993 0 000-1.4l-.01-.01a.993.993 0 00-1.4 0l-.75.75A8.962 8.962 0 0012 4c-4.8 0-8.88 3.96-9 8.76A8.998 8.998 0 0012 22a8.994 8.994 0 007.03-14.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_2633_1103">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default Timer;
