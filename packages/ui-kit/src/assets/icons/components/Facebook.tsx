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
          <rect fill={'#4267B2'} height={24} rx={12} width={24} />
          <path
            d={
              'M12.802 20v-7.298h2.45l.366-2.845h-2.816V8.041c0-.823.228-1.384 1.41-1.384l1.505-.001V4.112A20.187 20.187 0 0013.523 4C11.35 4 9.864 5.325 9.864 7.76v2.097H7.408v2.845h2.456V20h2.938z'
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
