import { IconProps, IconWrapper } from '../IconWrapper'

const Facebook = (allProps: IconProps) => {
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
          <rect fill={'#4267B2'} height={18} rx={9} width={18} x={3} y={3} />
          <path
            d={
              'M12.602 18v-5.474h1.837l.275-2.133h-2.112V9.03c0-.618.171-1.039 1.057-1.039h1.13V6.084A15.139 15.139 0 0013.142 6c-1.628 0-2.743.994-2.743 2.82v1.573H8.557v2.133h1.842V18h2.203z'
            }
            fill={'var(--color-bg-icon)'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}

export default Facebook
