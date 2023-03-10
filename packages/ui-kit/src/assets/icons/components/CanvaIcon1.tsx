import { IconWrapper } from '../IconWrapper'
import { IconProps } from '../types'

const CanvaIcon1 = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_124_71475)">
            <path
              d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
              fill="#24BECA"
            />
            <path
              d="M17.1 16.163c-.638.862-1.463 1.762-2.55 2.437-1.05.675-2.25 1.2-3.675 1.2-1.313 0-2.4-.675-3-1.237-.9-.863-1.388-2.1-1.538-3.263-.45-3.6 1.763-8.362 5.175-10.425a4.704 4.704 0 012.475-.712c1.65 0 2.888 1.162 3.038 2.587.15 1.275-.338 2.363-1.763 3.075-.712.375-1.087.338-1.2.188-.075-.113-.037-.3.113-.413 1.312-1.087 1.35-1.987 1.2-3.262-.113-.825-.638-1.35-1.238-1.35C11.55 4.988 7.8 10.8 8.325 15c.187 1.65 1.2 3.563 3.3 3.563.675 0 1.425-.188 2.062-.525 1.463-.75 2.1-1.275 2.963-2.475.112-.15.225-.338.337-.488.075-.15.225-.187.338-.187.112 0 .262.112.262.3a.892.892 0 01-.187.525c-.038.075-.15.3-.3.45z"
              fill="#fff"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_124_71475">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}

export default CanvaIcon1
