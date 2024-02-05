import { IconWrapper, IconProps } from "../IconWrapper";

const Stripe = (allProps: IconProps) => {
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
            d="M1 1h22v22H1V1zm10.12 8.19c0-.604.494-.836 1.314-.836 1.174 0 2.658.356 3.833.99V5.71C14.984 5.201 13.717 5 12.434 5 9.296 5 7.209 6.639 7.209 9.375c0 4.266 5.874 3.586 5.874 5.425 0 .711-.619.943-1.484.943-1.283 0-2.922-.525-4.22-1.236v3.679c1.437.618 2.89.88 4.22.88 3.215 0 5.425-1.591 5.425-4.358-.015-4.607-5.904-3.788-5.904-5.519z"
            fill="#6772E5"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Stripe;
