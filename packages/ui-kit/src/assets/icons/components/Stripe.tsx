'use client'
import { IconProps, IconWrapper } from '../IconWrapper'

const Stripe = (allProps: IconProps) => {
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
              'M3 3h18v18H3V3zm8.28 6.7c0-.493.404-.683 1.075-.683.96 0 2.175.291 3.136.81V6.855a8.34 8.34 0 00-3.136-.582c-2.568 0-4.275 1.34-4.275 3.579 0 3.49 4.806 2.934 4.806 4.44 0 .58-.506.77-1.214.77-1.05 0-2.39-.43-3.453-1.011v3.01a8.767 8.767 0 003.453.72c2.63 0 4.439-1.302 4.439-3.566-.013-3.769-4.831-3.098-4.831-4.515z'
            }
            fill={'#6772E5'}
            fillRule={'evenodd'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}

export default Stripe
