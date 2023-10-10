import { IconProps, IconWrapper } from '../IconWrapper'

const Lens = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_124_21551)">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_124_21551">
              <path d="M0 0h24v24H0z" fill="#fff" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}

export default Lens
