import { IconProps, IconWrapper } from '../IconWrapper'

const ManFacepalming = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'none'}
          height={'100%'}
          viewBox={'0 0 72 72'}
          width={'100%'}
          xmlns={'http://www.w3.org/2000/svg'}
          xmlnsXlink={'http://www.w3.org/1999/xlink'}
          {...props}
        >
          <path d={'M0 0h72v72H0z'} fill={'url(#prefix__9bf0f4b0-c5e0-11ee-aa1e-dff389dcf943)'} />
          <defs>
            <pattern
              height={1}
              id={'prefix__9bf0f4b0-c5e0-11ee-aa1e-dff389dcf943'}
              patternContentUnits={'objectBoundingBox'}
              width={1}
            >
              <use transform={'scale(.01389)'} xlinkHref={'#prefix__image0_3027_317'} />
            </pattern>
            <image
              height={72}
              id={'prefix__image0_3027_317'}
              width={72}
              xlinkHref={
                'data:image/png;base64,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'
              }
            />
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}

export default ManFacepalming
