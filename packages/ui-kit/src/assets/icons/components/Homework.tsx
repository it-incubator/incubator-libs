'use client'
import { IconProps, IconWrapper } from '../IconWrapper'

const Homework = (allProps: IconProps) => {
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
              'M17 9h2V7h-2v2zm0 4h2v-2h-2v2zm0 4h2v-2h-2v2zm0 4v-2h4V5h-9v1.4l-2-1.45V3h13v18h-6zM1 21V11l7-5 7 5v10H9v-5H7v5H1zm2-2h2v-5h6v5h2v-7L8 8.45 3 12v7z'
            }
            fill={'currentColor'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}

export default Homework
