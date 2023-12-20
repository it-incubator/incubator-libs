import { IconWrapper, IconProps } from "../IconWrapper";

const Group2 = (allProps: IconProps) => {
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
            d="M12 18.914a1.172 1.172 0 100-2.344 1.172 1.172 0 000 2.344z"
            fill="currentColor"
          />
          <path
            d="M12 0C5.368 0 0 5.367 0 12c0 6.632 5.367 12 12 12 6.632 0 12-5.367 12-12 0-6.632-5.367-12-12-12zm0 22.125A10.12 10.12 0 011.875 12 10.12 10.12 0 0112 1.875 10.12 10.12 0 0122.125 12 10.12 10.12 0 0112 22.125z"
            fill="currentColor"
          />
          <path
            d="M12 6.023a3.754 3.754 0 00-3.75 3.75.937.937 0 001.875 0c0-1.033.841-1.875 1.875-1.875s1.875.842 1.875 1.875A1.877 1.877 0 0112 11.648a.938.938 0 00-.938.938v2.344a.937.937 0 101.876 0v-1.525a3.757 3.757 0 002.812-3.632A3.754 3.754 0 0012 6.023z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Group2;
