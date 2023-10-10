import { IconProps, IconWrapper } from '../IconWrapper'

const BarChart = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill="none"
          height="100%"
          viewBox="0 0 24 24"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clipPath="url(#prefix__clip0_124_21550)">
            <path
              d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_124_21550">
              <path d="M0 0h24v24H0z" fill="#fff" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}

export default BarChart
