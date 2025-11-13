'use client'
import { IconProps, IconWrapper } from '../IconWrapper'

const Html = (allProps: IconProps) => {
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
          <path d={'M4.5 21L3 2.25h18L19.5 21 12 23.25 4.5 21z'} fill={'#E44D26'} />
          <path d={'M19.5 3.75H12v18.375l6-1.875 1.5-16.5z'} fill={'#F16529'} />
          <path
            d={
              'M7.125 13.125L6.375 6H18l-.375 2.25h-9L9 10.875h8.25L16.5 18 12 19.5 7.5 18l-.375-3.75h2.25l.375 1.875 2.25.75 2.25-.75.375-3h-7.5z'
            }
            fill={'#fff'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}

export default Html
