'use client'
import { IconProps, IconWrapper } from '../IconWrapper'

const Js = (allProps: IconProps) => {
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
          <path d={'M21 3H3v18h18V3z'} fill={'#F1DC50'} />
          <path
            d={
              'M12 11.25v6c0 .657-.392 1.5-1.5 1.5-1.789 0-1.875-1.5-1.875-1.5m9.968-4.113c-.45-.758-1.047-1.137-1.79-1.137-1.16 0-1.803.75-1.803 1.5s.375 1.5 1.881 1.875c.959.239 1.869.75 1.869 1.875s-.987 1.5-1.875 1.5c-1.135 0-1.885-.5-2.25-1.5'
            }
            stroke={'#333'}
            strokeWidth={1.5}
          />
        </svg>
      }
      {...restProps}
    />
  )
}

export default Js
