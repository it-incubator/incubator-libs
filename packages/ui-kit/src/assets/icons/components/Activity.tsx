'use client'
import { IconProps, IconWrapper } from '../IconWrapper'

const Activity = (allProps: IconProps) => {
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
              'M5.4 20L4 18.6 13.6 9H11v2H9V7h5.825c.267 0 .525.05.775.15.25.1.467.242.65.425l3 2.975c.45.45 1 .8 1.65 1.05.65.25 1.35.383 2.1.4v2c-1.033 0-1.97-.158-2.813-.475A6.409 6.409 0 0117.95 12.1l-1-1.05-2.2 2.2L17 15.5l-6.55 3.775-1-1.725 4.3-2.475-1.7-1.7L5.4 20zM3 13v-2h5v2H3zm-2-3V8h5v2H1zm18.475-2c-.55 0-1.025-.196-1.425-.588-.4-.391-.6-.862-.6-1.412 0-.55.2-1.02.6-1.412.4-.392.875-.588 1.425-.588s1.025.196 1.425.588c.4.391.6.862.6 1.412 0 .55-.2 1.02-.6 1.412-.4.392-.875.588-1.425.588zM3 7V5h5v2H3z'
            }
            fill={'currentColor'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}

export default Activity
