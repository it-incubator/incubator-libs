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
          <g clipPath={'url(#prefix__clip0_3010_2915)'}>
            <path d={'M24 0H0v24h24V0z'} fill={'#F1DC50'} />
            <path
              d={
                'M12 11v8c0 .876-.523 2-2 2-2.385 0-2.5-2-2.5-2m13.29-5.484c-.6-1.01-1.396-1.516-2.386-1.516C16.855 12 16 13 16 14s.5 2 2.508 2.5c1.279.318 2.492 1 2.492 2.5s-1.316 2-2.5 2c-1.514 0-2.514-.667-3-2'
              }
              stroke={'#333'}
              strokeWidth={2}
            />
          </g>
          <defs>
            <clipPath id={'prefix__clip0_3010_2915'}>
              <path d={'M0 0h24v24H0z'} fill={'#fff'} />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}

export default Js
