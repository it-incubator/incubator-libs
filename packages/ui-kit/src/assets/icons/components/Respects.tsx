'use client'
import { IconProps, IconWrapper } from '../IconWrapper'

const Respects = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'none'}
          height={'100%'}
          viewBox={'0 0 24 24'}
          width={'100%'}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <path
            d={
              'M18 21H7V8l7-7 1.25 1.25c.117.117.213.275.287.475.075.2.113.392.113.575v.35L14.55 8H21c.533 0 1 .2 1.4.6.4.4.6.867.6 1.4v2c0 .117-.017.242-.05.375s-.067.258-.1.375l-3 7.05c-.15.333-.4.617-.75.85-.35.233-.717.35-1.1.35zm-9-2h9l3-7v-2h-9l1.35-5.5L9 8.85V19zM7 8v2H4v9h3v2H2V8h5z'
            }
            fill={'currentColor'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}

export default Respects
