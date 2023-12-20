import { IconWrapper, IconProps } from "../IconWrapper";

const ChatBubbleExclaimationRepoCom1svg = (allProps: IconProps) => {
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
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.127 22.2c.581.398 1.32.823 2.185 1.151 1.678.636 2.932.674 3.512.64 1.293-.073 1.467-.892.773-1.91-.792-1.16-1.555-2.473-1.48-3.926A10.953 10.953 0 0023 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11c1.458 0 2.851-.284 4.127-.8zM12 3a9 9 0 000 18c1.37 0 2.665-.305 3.825-.85a1 1 0 011.034.111c.523.401 1.265.88 2.162 1.22.39.148.746.255 1.065.331-.333-.607-.67-1.33-.824-2.01-.16-.702-.4-1.924.066-2.576A8.954 8.954 0 0021 12a9 9 0 00-9-9zm1.25 13.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM13 7a1 1 0 10-2 0v6a1 1 0 102 0V7z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default ChatBubbleExclaimationRepoCom1svg;
