import { IconProps, IconWrapper } from '../IconWrapper'

const ThumbDown = (allProps: IconProps) => {
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
          <g clipPath={'url(#prefix__clip0_124_21534)'} fill={'currentColor'}>
            <path
              d={
                'M15 2H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 22l6.58-6.59c.37-.36.59-.86.59-1.41V4c0-1.1-.9-2-2-2zm0 12l-4.34 4.34L11.77 13H3v-2l3-7h9v10zm4-12h4v12h-4V2z'
              }
            />
            <path d={'M3 11v2h8.77l-1.11 5.34L15 14V4H6l-3 7z'} />
          </g>
          <defs>
            <clipPath id={'prefix__clip0_124_21534'}>
              <path d={'M0 0h24v24H0z'} fill={'#fff'} />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}

export default ThumbDown
