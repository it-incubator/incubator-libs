import { IconWrapper, IconProps } from '../IconWrapper'

const ArrowDropUp = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

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
          <g clipPath="url(#prefix__clip0_167_28633)">
            <path d="M7 14l5-5 5 5H7z" fill="currentColor" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_167_28633">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}

export default ArrowDropUp
