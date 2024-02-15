import { IconProps, IconWrapper } from '../IconWrapper'

const StudentLightSkinTone = (allProps: IconProps) => {
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
          <path d={'M0 0h72v72H0z'} fill={'url(#prefix__8e037db0-cc1f-11ee-8df6-3bc00402ec38)'} />
          <defs>
            <pattern
              height={1}
              id={'prefix__8e037db0-cc1f-11ee-8df6-3bc00402ec38'}
              patternContentUnits={'objectBoundingBox'}
              width={1}
            >
              <use transform={'scale(.01389)'} xlinkHref={'#prefix__image0_126_30310'} />
            </pattern>
            <image
              height={72}
              id={'prefix__image0_126_30310'}
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

export default StudentLightSkinTone
