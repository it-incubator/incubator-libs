'use client'
import { IconProps, IconWrapper } from '../../assets/icons/IconWrapper'

export const SendMessageIcon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg fill={'none'} height={24} width={24} xmlns={'http://www.w3.org/2000/svg'} {...props}>
          <g clipPath={'url(#a)'}>
            <path d={'M2.01 21 23 12 2.01 3 2 10l15 2-15 2 .01 7Z'} fill={'currentColor'} />
          </g>
          <defs>
            <clipPath id={'a'}>
              <path d={'M0 0h24v24H0z'} fill={'currentColor'} />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
