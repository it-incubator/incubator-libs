import { IconWrapper } from '../IconWrapper'
import { IconProps } from '../types'

const TrendingUp = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <g clipPath="url(#prefix__clip0_124_21513)">
            <path
              d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_124_21513">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}

export default TrendingUp
