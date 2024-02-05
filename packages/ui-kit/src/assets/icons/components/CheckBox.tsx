import { IconWrapper, IconProps } from "../IconWrapper";

const CheckBox = (allProps: IconProps) => {
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
            d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"
            fill="currentColor"
          />
          <path d="M18 13H6v-2h12v2z" fill="var(--color-bg-icon)" />
        </svg>
      }
      {...restProps}
    />
  );
};

export default CheckBox;
