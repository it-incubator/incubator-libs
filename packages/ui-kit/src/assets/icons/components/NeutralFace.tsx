import { IconProps, IconWrapper } from '../IconWrapper'

const NeutralFace = (allProps: IconProps) => {
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
          <path d={'M0 0h72v72H0z'} fill={'url(#prefix__9bf56180-c5e0-11ee-aa1e-dff389dcf943)'} />
          <defs>
            <pattern
              height={1}
              id={'prefix__9bf56180-c5e0-11ee-aa1e-dff389dcf943'}
              patternContentUnits={'objectBoundingBox'}
              width={1}
            >
              <use transform={'scale(.01389)'} xlinkHref={'#prefix__image0_1635_4819'} />
            </pattern>
            <image
              height={72}
              id={'prefix__image0_1635_4819'}
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

export default NeutralFace
