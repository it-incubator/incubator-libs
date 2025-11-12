'use client'
import { IconProps, IconWrapper } from '../IconWrapper'

const Telegram = (allProps: IconProps) => {
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
          <rect fill={'#419FD9'} height={18} rx={9} width={18} x={3} y={3} />
          <path
            clipRule={'evenodd'}
            d={
              'M14 16.457c.63.275.866-.302.866-.302l1.664-8.361c-.013-.564-.773-.223-.773-.223l-9.318 3.656s-.446.158-.406.433c.039.275.393.406.393.406l2.346.787s.707 2.32.852 2.765c.13.432.249.446.249.446.13.052.249-.04.249-.04l1.52-1.376L14 16.457zm.407-7.182s.328-.197.314 0c0 0 .053.026-.117.21-.158.157-3.867 3.486-4.365 3.931a.138.138 0 00-.065.118l-.144 1.232c-.027.131-.197.144-.236.026l-.616-2.018a.193.193 0 01.078-.223l5.15-3.276z'
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

export default Telegram
