import { IconProps, IconWrapper } from '../IconWrapper'

const ArrowDropDown = (allProps: IconProps) => {
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
          <g clipPath={'url(#prefix__clip0_167_28632)'}>
            <path d={'M7 10l5 5 5-5H7z'} fill={'currentColor'} />
          </g>
          <defs>
            <clipPath id={'prefix__clip0_167_28632'}>
              <path d={'M0 0h24v24H0z'} fill={'#fff'} />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}

export default ArrowDropDown
