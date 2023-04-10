import { IconWrapper, IconProps } from '../IconWrapper'

const More = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <circle cx={12} cy={12} r={8.5} stroke="currentColor" />
          <circle cx={12.001} cy={8.5} r={0.875} fill="currentColor" />
          <circle cx={12.001} cy={12} r={0.875} fill="currentColor" />
          <circle cx={12.001} cy={15.5} r={0.875} fill="currentColor" />
        </svg>
      }
      {...restProps}
    />
  )
}

export default More
