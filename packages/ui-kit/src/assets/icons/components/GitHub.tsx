import { IconWrapper } from '../IconWrapper'
import { IconProps } from '../types'

const GitHub = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <rect width={24} height={24} rx={12} fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.712 23.414A11.98 11.98 0 0112 24c-1.296 0-2.545-.206-3.714-.586.54.064.74-.287.74-.591 0-.132-.003-.366-.006-.677-.003-.361-.008-.828-.01-1.365-3.339.726-4.043-1.61-4.043-1.61-.546-1.387-1.332-1.756-1.332-1.756-1.09-.746.082-.73.082-.73 1.204.084 1.838 1.237 1.838 1.237 1.07 1.835 2.808 1.305 3.492.998.11-.776.42-1.306.762-1.606-2.664-.303-5.466-1.333-5.466-5.934 0-1.311.468-2.383 1.236-3.223-.124-.304-.536-1.524.117-3.178 0 0 1.008-.322 3.3 1.231.957-.266 1.983-.399 3.004-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.177.769.84 1.233 1.912 1.233 3.223 0 4.612-2.806 5.628-5.479 5.925.43.371.815 1.103.815 2.224 0 1.073-.007 2.008-.011 2.627-.003.307-.004.537-.004.667 0 .305.194.658.736.591z"
            fill="#FEFEFE"
          />
        </svg>
      }
      {...restProps}
    />
  )
}

export default GitHub
