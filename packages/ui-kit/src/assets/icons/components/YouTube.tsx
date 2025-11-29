import { IconProps, IconWrapper } from '../IconWrapper'

const YouTube = (allProps: IconProps) => {
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
          <rect fill={'red'} height={18} rx={9} width={18} x={3} y={3} />
          <path
            clipRule={'evenodd'}
            d={
              'M16.402 8.302c.482.13.861.51.991.992.241.88.232 2.715.232 2.715s0 1.826-.232 2.706a1.41 1.41 0 01-.991.992c-.88.231-4.402.231-4.402.231s-3.512 0-4.402-.24a1.41 1.41 0 01-.991-.992C6.375 13.835 6.375 12 6.375 12s0-1.826.232-2.706c.13-.482.519-.871.991-1C8.478 8.061 12 8.061 12 8.061s3.521 0 4.402.24zM13.807 12l-2.928 1.687v-3.374L13.807 12z'
            }
            fill={'var(--color-bg-icon)'}
            fillRule={'evenodd'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}

export default YouTube
