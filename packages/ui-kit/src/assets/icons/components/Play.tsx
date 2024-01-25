import { IconProps, IconWrapper } from '../IconWrapper'

const Play = (allProps: IconProps) => {
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
            d={
              'M16.648 11.353L8.057 6.1a.67.67 0 00-.705 0A.755.755 0 007 6.746v10.508c0 .266.134.513.352.646a.665.665 0 00.705 0l8.591-5.253A.754.754 0 0017 12a.756.756 0 00-.352-.647z'
            }
            fill={'currentColor'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}

export default Play
