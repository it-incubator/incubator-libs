import { IconProps, IconWrapper } from '../IconWrapper'

const Union = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill="none"
          height="100%"
          viewBox="0 0 24 24"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            clipRule="evenodd"
            d="M5.388 19.675c.4-.393.44-1.018.079-1.443A9.728 9.728 0 015.459 5.78a1.077 1.077 0 00-.07-1.458 1.123 1.123 0 00-1.646.077 11.898 11.898 0 000 15.2c.408.501 1.175.54 1.645.076zm3.157-3.11c.384-.379.423-.973.102-1.413a5.388 5.388 0 010-6.3c.313-.44.282-1.034-.102-1.412l-.008-.008c-.47-.463-1.269-.432-1.652.1a7.56 7.56 0 000 8.94c.391.532 1.182.563 1.66.092zm10.067-12.24a1.059 1.059 0 00-.079 1.443 9.728 9.728 0 01.008 12.451 1.078 1.078 0 00.07 1.46c.463.455 1.23.424 1.645-.078a11.898 11.898 0 000-15.2 1.116 1.116 0 00-1.644-.076zm-3.157 3.11a1.078 1.078 0 00-.102 1.413 5.388 5.388 0 010 6.3c-.313.44-.282 1.034.102 1.412l.008.008c.47.463 1.269.432 1.653-.1a7.56 7.56 0 000-8.94c-.392-.533-1.183-.563-1.661-.093zM12 14.035c1.298 0 2.35-1.037 2.35-2.316S13.298 9.404 12 9.404c-1.297 0-2.35 1.036-2.35 2.315 0 1.28 1.053 2.316 2.35 2.316z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  )
}

export default Union
