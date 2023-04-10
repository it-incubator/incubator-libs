import { IconWrapper } from '../IconWrapper'
import { IconProps } from '../types'

const KeyboardArrowDown = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <g clipPath="url(#prefix__clip0_124_21507)">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="currentColor" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_124_21507">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}

export default KeyboardArrowDown
