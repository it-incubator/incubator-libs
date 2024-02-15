import { IconProps, IconWrapper } from '../IconWrapper'

const ThumbUp = (allProps: IconProps) => {
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
          <g clipPath={'url(#prefix__clip0_124_21533)'} fill={'currentColor'}>
            <path
              d={
                'M21 9h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 2 7.59 8.59C7.22 8.95 7 9.45 7 10v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2zm0 4l-3 7H9V10l4.34-4.34L12.23 11H21v2zM1 10h4v12H1V10z'
              }
            />
            <path d={'M13.34 5.66L9 10v10h9l3-7v-2h-8.77l1.11-5.34z'} />
          </g>
          <defs>
            <clipPath id={'prefix__clip0_124_21533'}>
              <path d={'M0 0h24v24H0z'} fill={'#fff'} />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}

export default ThumbUp
