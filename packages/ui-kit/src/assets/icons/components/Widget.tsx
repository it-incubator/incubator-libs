'use client'
import { IconProps, IconWrapper } from '../IconWrapper'

const Widget = (allProps: IconProps) => {
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
              'M12 21a9 9 0 117.01-3.355l.618 3.582a.5.5 0 01-.635.564l-4.144-1.237a.72.72 0 01-.022-.007c-.889.294-1.84.453-2.827.453z'
            }
            fill={'currentColor'}
            fillRule={'evenodd'}
          />
          <rect fill={'var(--color-bg-icon)'} height={1.5} rx={0.75} width={8} x={8} y={9} />
          <rect fill={'var(--color-bg-icon)'} height={1.5} rx={0.75} width={8} x={8} y={11.5} />
          <rect fill={'var(--color-bg-icon)'} height={1.5} rx={0.75} width={8} x={8} y={14} />
        </svg>
      }
      {...restProps}
    />
  )
}

export default Widget
