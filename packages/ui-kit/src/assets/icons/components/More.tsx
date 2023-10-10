import { IconProps, IconWrapper } from '../IconWrapper'

const More = (allProps: IconProps) => {
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
          <circle cx={12} cy={12} r={8.5} stroke={'currentColor'} />
          <circle cx={12.001} cy={8.5} fill={'currentColor'} r={0.875} />
          <circle cx={12.001} cy={12} fill={'currentColor'} r={0.875} />
          <circle cx={12.001} cy={15.5} fill={'currentColor'} r={0.875} />
        </svg>
      }
      {...restProps}
    />
  )
}

export default More
