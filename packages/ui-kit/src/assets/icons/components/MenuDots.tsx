import { IconWrapper, IconProps } from "../IconWrapper";

const MenuDots = (allProps: IconProps) => {
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
            d="M7 12a2 2 0 11-4 0 2 2 0 014 0zM14 12a2 2 0 11-4 0 2 2 0 014 0zM21 12a2 2 0 11-4 0 2 2 0 014 0z"
            fill="#000"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default MenuDots;
