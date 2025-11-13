'use client'
import { IconProps, IconWrapper } from '../IconWrapper'

const MenuDotsVertical = (allProps: IconProps) => {
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
              'M14 5a2 2 0 11-4 0 2 2 0 014 0zM14 12a2 2 0 11-4 0 2 2 0 014 0zM14 19a2 2 0 11-4 0 2 2 0 014 0z'
            }
            fill={'currentColor'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}

export default MenuDotsVertical
