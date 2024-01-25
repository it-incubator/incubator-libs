import { IconProps, IconWrapper } from '../IconWrapper'

const Menu = (allProps: IconProps) => {
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
          <g clipPath={'url(#prefix__clip0_1094_3348)'}>
            <path d={'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'} fill={'currentColor'} />
          </g>
          <defs>
            <clipPath id={'prefix__clip0_1094_3348'}>
              <path d={'M0 0h24v24H0z'} fill={'#fff'} />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}

export default Menu
