import { IconProps, IconWrapper } from '../IconWrapper'

const FolderIcon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg height={'1em'} viewBox={'0 0 24 24'} width={'1em'}>
          <path
            d={'M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2Z'}
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

export default FolderIcon
