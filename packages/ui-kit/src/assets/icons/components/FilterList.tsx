import { IconWrapper, IconProps } from "../IconWrapper";

const FilterList = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_1595_4813)">
            <path
              d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
              fill="currentColor"
            />
            <path fill="currentColor" d="M6.866 3.5l9 15.588-.866.5L6 4z" />
            <path fill="#FFFEFE" d="M7.732 3l9 15.588-.866.5-9-15.588z" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_1595_4813">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default FilterList;
