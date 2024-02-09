import { IconProps, IconWrapper } from '../IconWrapper'

const WinkingFace = (allProps: IconProps) => {
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
          <path d={'M0 0h72v72H0z'} fill={'url(#prefix__1db547e0-c743-11ee-9a89-973d58329563)'} />
          <defs>
            <pattern
              height={1}
              id={'prefix__1db547e0-c743-11ee-9a89-973d58329563'}
              patternContentUnits={'objectBoundingBox'}
              width={1}
            >
              <use transform={'scale(.01389)'} xlinkHref={'#prefix__image0_2146_3'} />
            </pattern>
            <image
              height={72}
              id={'prefix__image0_2146_3'}
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

export default WinkingFace
