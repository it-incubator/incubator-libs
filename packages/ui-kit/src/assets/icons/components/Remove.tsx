import { IconProps, IconWrapper } from '../IconWrapper'

const Remove = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_124_21520)">
            <path d="M19 13H5v-2h14v2z" fill="currentColor" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_124_21520">
              <path d="M0 0h24v24H0z" fill="#fff" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}

export default Remove
