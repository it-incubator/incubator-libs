import { IconProps, IconWrapper } from '../IconWrapper'

const Css = (allProps: IconProps) => {
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
          <path d={'M4.5 21L3 2.25h18L19.5 21 12 23.25 4.5 21z'} fill={'#264DE4'} />
          <path d={'M19.5 3.75H12v18.375l6-1.875 1.5-16.5z'} fill={'#2965F1'} />
          <path
            d={
              'M6.993 6.105h5.06v1.996H7.171m.178 2.067h4.704v2.03H7.528m.107.998H9.63l.143 1.604 2.28.606v2.102l-4.169-1.14'
            }
            fill={'#EBEBEB'}
          />
          <path
            d={
              'M12.053 10.168v2.03h2.458l-.249 2.602-2.21.606v2.102l4.099-1.14.926-10.263h-5.024v1.996h2.85l-.196 2.067h-2.654z'
            }
            fill={'#fff'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}

export default Css
