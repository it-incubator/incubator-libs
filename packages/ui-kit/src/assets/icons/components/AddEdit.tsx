import { IconProps, IconWrapper } from '../IconWrapper'

const AddEdit = (allProps: IconProps) => {
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
          <g clipPath={'url(#prefix__clip0_3187_47)'} fill={'currentColor'}>
            <path
              d={
                'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z'
              }
            />
            <path
              clipRule={'evenodd'}
              d={'M6.75 3h-1.5v3.25H2v1.5h3.25V11h1.5V7.75H10v-1.5H6.75V3z'}
              fillRule={'evenodd'}
            />
          </g>
          <defs>
            <clipPath id={'prefix__clip0_3187_47'}>
              <path d={'M0 0h24v24H0z'} fill={'#fff'} />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}

export default AddEdit
