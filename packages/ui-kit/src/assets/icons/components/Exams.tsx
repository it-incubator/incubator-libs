import { IconWrapper, IconProps } from "../IconWrapper";

const Exams = (allProps: IconProps) => {
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
            d="M12 21l-7-3.8v-6L1 9l11-6 11 6v8h-2v-6.9l-2 1.1v6L12 21zm0-8.3L18.85 9 12 5.3 5.15 9 12 12.7zm0 6.025l5-2.7V12.25L12 15l-5-2.75v3.775l5 2.7z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Exams;
