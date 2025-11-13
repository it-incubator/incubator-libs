'use client'
import { IconProps, IconWrapper } from '../IconWrapper'

const ClosedClub = (allProps: IconProps) => {
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
              'M8.25 21L3 15.75v-7.5L8.25 3h7.5L21 8.25v7.5L15.75 21h-7.5zm.9-4.75L12 13.4l2.85 2.85 1.4-1.4L13.4 12l2.85-2.85-1.4-1.4L12 10.6 9.15 7.75l-1.4 1.4L10.6 12l-2.85 2.85 1.4 1.4zM9.1 19h5.8l4.1-4.1V9.1L14.9 5H9.1L5 9.1v5.8L9.1 19z'
            }
            fill={'currentColor'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}

export default ClosedClub
