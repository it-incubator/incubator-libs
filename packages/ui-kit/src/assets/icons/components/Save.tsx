import { IconProps, IconWrapper } from '../IconWrapper'

const Save = (allProps: IconProps) => {
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
          <path d={'M5 5h10v4H5zM8 13h8v6H8z'} fill={'var(--color-bg-icon)'} />
          <g clipPath={'url(#prefix__clip0_1581_4806)'}>
            <path
              d={
                'M17 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z'
              }
              fill={'currentColor'}
            />
          </g>
          <defs>
            <clipPath id={'prefix__clip0_1581_4806'}>
              <path d={'M0 0h24v24H0z'} fill={'#fff'} />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}

export default Save
