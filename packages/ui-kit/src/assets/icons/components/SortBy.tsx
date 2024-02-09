import { IconProps, IconWrapper } from '../IconWrapper'

const SortBy = (allProps: IconProps) => {
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
          <g clipPath={'url(#prefix__clip0_2108_16)'} fill={'currentColor'}>
            <path d={'M7 9l5-5 5 5H7zM7 15l5 5 5-5H7z'} />
          </g>
          <defs>
            <clipPath id={'prefix__clip0_2108_16'}>
              <path d={'M0 0h24v24H0z'} fill={'#fff'} />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}

export default SortBy
