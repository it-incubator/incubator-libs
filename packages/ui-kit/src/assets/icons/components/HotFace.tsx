import { IconProps, IconWrapper } from '../IconWrapper'

const HotFace = (allProps: IconProps) => {
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
          <path d={'M0 0h72v72H0z'} fill={'url(#prefix__1d80ca60-c743-11ee-9a89-973d58329563)'} />
          <defs>
            <pattern
              height={1}
              id={'prefix__1d80ca60-c743-11ee-9a89-973d58329563'}
              patternContentUnits={'objectBoundingBox'}
              width={1}
            >
              <use transform={'scale(.01389)'} xlinkHref={'#prefix__image0_4624_21403'} />
            </pattern>
            <image
              height={72}
              id={'prefix__image0_4624_21403'}
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

export default HotFace
