import { IconWrapper, IconProps } from '../IconWrapper'

const Help = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_124_21888)" fill="currentColor">
            <path d="M13.5 21h-3v-3h3v3zM6 9c0-3.315 2.685-6 6-6s6 2.685 6 6c0 3.75-4.5 4.125-4.5 7.5h-3C10.5 11.625 15 12 15 9c0-1.65-1.35-3-3-3S9 7.35 9 9H6z" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_124_21888">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}

export default Help
