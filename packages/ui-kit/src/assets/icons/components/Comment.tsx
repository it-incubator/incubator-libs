'use client'
import { IconProps, IconWrapper } from '../IconWrapper'

const Comment = (allProps: IconProps) => {
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
          <g clipPath={'url(#prefix__clip0_1593_4812)'} fill={'currentColor'}>
            <path
              d={
                'M4 2h16c1.1 0 2 .9 2 2v18l-4-4H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm0 14h14l2 2V4H4v12z'
              }
            />
            <path d={'M6 6h12v2H6zM6 9h12v2H6zM6 12h12v2H6z'} />
          </g>
          <defs>
            <clipPath id={'prefix__clip0_1593_4812'}>
              <path d={'M0 0h24v24H0z'} fill={'#fff'} />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}

export default Comment
