'use client'
import { IconProps, IconWrapper } from '../IconWrapper'

const Mountain = (allProps: IconProps) => {
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
              'M2.05 21l6.45-9h5.05L21 3.3V21H2.05zm1.75-5.825l-1.6-1.15L6.5 8h5.05l4.7-5.475 1.5 1.3L12.45 10H7.5l-3.7 5.175zM5.95 19H19V8.7L14.45 14H9.5l-3.55 5z'
            }
            fill={'currentColor'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}

export default Mountain
