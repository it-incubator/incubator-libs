import { IconWrapper, IconProps } from "../IconWrapper";

const Chat = (allProps: IconProps) => {
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
            d="M12 21a9 9 0 10-9-9c0 2.137.745 4.1 1.99 5.645l-.619 3.582a.5.5 0 00.636.564l4.144-1.237a.714.714 0 00.022-.007c.889.294 1.84.453 2.827.453z"
            fill="#1A75F5"
          />
          <circle cx={9} cy={12} r={1} fill="var(--color-bg-icon)" />
          <circle cx={12} cy={12} r={1} fill="var(--color-bg-icon)" />
          <circle cx={15} cy={12} r={1} fill="var(--color-bg-icon)" />
          <circle cx={19} cy={5} r={2} fill="#F51A51" />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Chat;
