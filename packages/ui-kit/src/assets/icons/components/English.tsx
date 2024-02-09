import { IconProps, IconWrapper } from '../IconWrapper'

const English = (allProps: IconProps) => {
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
          <path
            clipRule={'evenodd'}
            d={
              'M4.5 3.75a.75.75 0 00-.75.75v15c0 .414.336.75.75.75h15a.75.75 0 00.75-.75v-15a.75.75 0 00-.75-.75h-15zm-2.25.75A2.25 2.25 0 014.5 2.25h15a2.25 2.25 0 012.25 2.25v15a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25v-15z'
            }
            fill={'currentColor'}
            fillRule={'evenodd'}
          />
          <path
            clipRule={'evenodd'}
            d={'M5.75 8.5a.75.75 0 01.75-.75h4a.75.75 0 010 1.5H7.25v6.25a.75.75 0 01-1.5 0v-7z'}
            fill={'currentColor'}
            fillRule={'evenodd'}
          />
          <path
            clipRule={'evenodd'}
            d={
              'M5.75 12a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H6.5a.75.75 0 01-.75-.75zM5.75 15.5a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H6.5a.75.75 0 01-.75-.75zM13 8.75a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0v-6a.75.75 0 01.75-.75z'
            }
            fill={'currentColor'}
            fillRule={'evenodd'}
          />
          <path
            clipRule={'evenodd'}
            d={
              'M15.25 10.75a1.5 1.5 0 00-1.5 1.5v3.25a.75.75 0 01-1.5 0v-3.25a3 3 0 116 0v3.25a.75.75 0 01-1.5 0v-3.25a1.5 1.5 0 00-1.5-1.5z'
            }
            fill={'currentColor'}
            fillRule={'evenodd'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}

export default English
