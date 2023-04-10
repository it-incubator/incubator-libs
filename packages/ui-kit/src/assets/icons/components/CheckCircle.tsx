import { IconWrapper } from '../IconWrapper'
import { IconProps } from '../types'

const CheckCircle = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <g clipPath="url(#prefix__clip0_124_21539)">
            <path fill="#FFFEFE" d="M5 6h15v12H5z" />
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_124_21539">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}

export default CheckCircle
