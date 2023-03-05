import { IconWrapper } from '../IconWrapper'
import { IconProps } from '../types'

const BiTrophyFill1 = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clipPath="url(#prefix__clip0_124_21559)">
            <path
              d="M3.75.75A.75.75 0 014.5 0h15a.75.75 0 01.75.75c0 .807-.018 1.575-.051 2.304a4.5 4.5 0 11-1.7 8.835c-1.185 2.798-2.817 4.166-4.25 4.517v3.259l2.138.534c.291.072.566.202.806.382l2.757 2.069A.75.75 0 0119.5 24h-15a.75.75 0 01-.45-1.35l2.757-2.069c.24-.18.514-.31.805-.382l2.138-.534v-3.26c-1.433-.35-3.065-1.719-4.25-4.518a4.5 4.5 0 11-1.698-8.835A49.617 49.617 0 013.75.75zm.148 3.81a3 3 0 101.08 5.903c-.5-1.575-.882-3.52-1.08-5.903zm15.125 5.903a3 3 0 001.08-5.903c-.2 2.385-.582 4.327-1.08 5.903z"
              fill="#FF6E04"
              fillOpacity={0.65}
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_124_21559">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}

export default BiTrophyFill1
