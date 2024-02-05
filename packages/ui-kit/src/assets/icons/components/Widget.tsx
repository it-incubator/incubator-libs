import { IconWrapper, IconProps } from "../IconWrapper";

const Widget = (allProps: IconProps) => {
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
            d="M12 21a9 9 0 117.01-3.355l.618 3.582a.5.5 0 01-.635.564l-4.144-1.237a.72.72 0 01-.022-.007c-.889.294-1.84.453-2.827.453z"
            fill="currentColor"
          />
          <rect
            x={8}
            y={9}
            width={8}
            height={1.5}
            rx={0.75}
            fill="var(--color-bg-icon)"
          />
          <rect
            x={8}
            y={11.5}
            width={8}
            height={1.5}
            rx={0.75}
            fill="var(--color-bg-icon)"
          />
          <rect
            x={8}
            y={14}
            width={8}
            height={1.5}
            rx={0.75}
            fill="var(--color-bg-icon)"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Widget;
