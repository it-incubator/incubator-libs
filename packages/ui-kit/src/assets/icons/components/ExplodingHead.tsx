import { IconProps, IconWrapper } from '../IconWrapper'

const ExplodingHead = (allProps: IconProps) => {
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
          <path d={'M0 0h72v72H0z'} fill={'url(#prefix__03e69bb0-e477-11ee-9bd8-61e5520b4a1b)'} />
          <defs>
            <pattern
              height={1}
              id={'prefix__03e69bb0-e477-11ee-9bd8-61e5520b4a1b'}
              patternContentUnits={'objectBoundingBox'}
              width={1}
            >
              <use transform={'scale(.01389)'} xlinkHref={'#prefix__image0_3027_313'} />
            </pattern>
            <image
              height={72}
              id={'prefix__image0_3027_313'}
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

export default ExplodingHead
