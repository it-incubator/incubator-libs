import { IconWrapper, IconProps } from "../IconWrapper";

const Paypal = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_1173_3654)" fill="#385C8E">
            <path d="M22.235 4.186c.975 1.787.653 3.896.27 5.141-2.078 6.787-11.452 6.418-12.809 6.418-1.354 0-1.67 1.263-1.67 1.263l-1.012 4.418C6.737 22.977 5.33 22.9 5.33 22.9H2.28a1.5 1.5 0 01-.214-.015C2.05 23.17 2.09 24 3.106 24h3.05s1.407.08 1.684-1.472l1.012-4.418s.316-1.263 1.671-1.263c1.354 0 10.73.369 12.809-6.418.464-1.517.84-4.304-1.097-6.242z" />
            <path d="M6.072 20.463l1.012-4.419s.315-1.26 1.671-1.26c1.354 0 10.73.366 12.807-6.418C22.322 5.886 22.85 0 13.384 0H6.546S5.124-.066 4.774 1.446L.306 20.728s-.192 1.208 1.03 1.208H4.39s1.406.08 1.683-1.473zM8.649 9.247l.908-3.919s.289-1.065 1.223-1.223c.934-.158 2.524.028 2.933.105 2.655.5 2.09 3.012 2.09 3.012-.525 3.878-6.562 3.34-6.562 3.34-.947-.342-.592-1.315-.592-1.315z" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_1173_3654">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default Paypal;
