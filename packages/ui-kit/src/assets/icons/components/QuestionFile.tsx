import { IconWrapper, IconProps } from "../IconWrapper";

const QuestionFile = (allProps: IconProps) => {
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
            d="M9.293 1.293A1 1 0 0110 1h8a3 3 0 013 3v3a1 1 0 11-2 0V4a1 1 0 00-1-1h-7v5a1 1 0 01-1 1H5v11a1 1 0 001 1h5a1 1 0 110 2H6a3 3 0 01-3-3V8a1 1 0 01.293-.707l6-6zM6.414 7H9V4.414L6.414 7zM18.25 20.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-3.115-7.786C15.4 12.46 16.083 12 17 12c1.283 0 2 .835 2 1.5s-.717 1.5-2 1.5a1 1 0 00-1 1v1a1 1 0 102 0v-.113c1.632-.373 3-1.64 3-3.387 0-2.096-1.97-3.5-4-3.5-1.543 0-2.975.774-3.636 2.036a1 1 0 101.771.928z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default QuestionFile;
