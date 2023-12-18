import { IconWrapper, IconProps } from "../IconWrapper";

const CareerBooster = (allProps: IconProps) => {
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
            d="M3.4 18L2 16.6l7.4-7.45 4 4L18.6 8H16V6h6v6h-2V9.4L13.4 16l-4-4-6 6z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default CareerBooster;
