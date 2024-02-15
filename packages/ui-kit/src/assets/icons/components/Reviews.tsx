import { IconProps, IconWrapper } from '../IconWrapper'

const Reviews = (allProps: IconProps) => {
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
              'M12 7a.836.836 0 00-.833-.833H6.85l.55-2.65.017-.192a.967.967 0 00-.275-.667L6.483 2 2.367 6.117A1.254 1.254 0 002 7v5.417c0 .691.558 1.25 1.25 1.25h5.625c.517 0 .958-.317 1.15-.759L11.908 8.5c.059-.142.092-.3.092-.458V7zm-1.667.942L8.6 12H3.667V7.175l1.608-1.608L4.8 7.833h5.533v.109zm10.417 2.391h-5.625c-.517 0-.958.317-1.15.759L12.092 15.5c-.059.142-.092.3-.092.458V17c0 .458.375.833.833.833h4.317l-.55 2.65-.017.2c0 .259.109.492.275.667l.659.65 4.116-4.117c.225-.225.367-.541.367-.883v-5.417c0-.691-.558-1.25-1.25-1.25zm-.417 6.492l-1.608 1.608.475-2.266h-5.533v-.109L15.4 12h4.933v4.825z'
            }
            fill={'currentColor'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}

export default Reviews
