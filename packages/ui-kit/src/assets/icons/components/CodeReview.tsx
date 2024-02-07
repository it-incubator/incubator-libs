import { IconProps, IconWrapper } from '../IconWrapper'

const CodeReview = (allProps: IconProps) => {
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
          <g clipPath={'url(#prefix__clip0_3050_723)'}>
            <path
              d={
                'M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V5a2 2 0 00-2-2zm0 16H5V7h14v12zm-7-8.5c1.84 0 3.48.96 4.34 2.5-.86 1.54-2.5 2.5-4.34 2.5-1.84 0-3.48-.96-4.34-2.5.86-1.54 2.5-2.5 4.34-2.5zM12 9c-2.73 0-5.06 1.66-6 4 .94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4zm0 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z'
              }
              fill={'currentColor'}
            />
          </g>
          <defs>
            <clipPath id={'prefix__clip0_3050_723'}>
              <path d={'M0 0h24v24H0z'} fill={'#fff'} />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}

export default CodeReview
