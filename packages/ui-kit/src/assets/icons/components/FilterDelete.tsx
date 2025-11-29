import { IconProps, IconWrapper } from '../IconWrapper'

const FilterDelete = (allProps: IconProps) => {
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
              'M10.5 9.205L9.795 8.5 7 11.295 4.205 8.5l-.705.705L6.295 12 3.5 14.795l.705.705L7 12.705 9.795 15.5l.705-.705L7.705 12 10.5 9.205z'
            }
            fill={'currentColor'}
          />
          <path
            clipRule={'evenodd'}
            d={
              'M17 6H4.554l-.304-.39A.998.998 0 015.04 4h13.91c.83 0 1.3.95.79 1.61C17.72 8.2 14 13 14 13v6c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-1h2v-5.713L17 6z'
            }
            fill={'currentColor'}
            fillRule={'evenodd'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}

export default FilterDelete
