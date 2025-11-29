import { IconProps, IconWrapper } from '../IconWrapper'

const FileDownload = (allProps: IconProps) => {
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
          <g clipPath={'url(#prefix__clip0_124_21526)'}>
            <path d={'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z'} fill={'currentColor'} />
          </g>
          <defs>
            <clipPath id={'prefix__clip0_124_21526'}>
              <path d={'M0 0h24v24H0z'} fill={'#fff'} />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}

export default FileDownload
