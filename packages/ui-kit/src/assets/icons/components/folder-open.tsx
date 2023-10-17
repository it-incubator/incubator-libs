import { IconProps, IconWrapper } from '../IconWrapper'

const FolderOpen = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg height={'1em'} viewBox={'0 0 24 24'} width={'1em'}>
          <path
            d={
              'M5 19a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2 2h4a2 2 0 0 1 2 2v1M5 19h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2Z'
            }
            fill={'none'}
            stroke={'currentColor'}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            strokeWidth={'2'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}

export default FolderOpen
