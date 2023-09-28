import * as React from 'react'

export type IconProps = {
  /** Set icon fill color from design system */
  color?: string
  /** Set width and height of icon in pixels */
  size?: number
  /** Whether to scale icon according to font-size. Sets width and height to 1em. */
  autoSize?: boolean
  /** Props to pass directly to svg element */
  svgProps?: React.SVGProps<SVGSVGElement>
} & Omit<React.HTMLProps<HTMLSpanElement>, 'color' | 'size'>

export const IconWrapper: React.FC<{ icon: React.ReactNode } & IconProps> = ({
  icon,
  color: colorProp,
  size: sizeProp,
  autoSize,
  ...restProps
}) => {
  const color = colorProp ? colorProp : 'currentColor'
  const size = sizeProp ? `${sizeProp}px` : '24px'

  return (
    <span
      role="img"
      aria-hidden="true"
      style={{
        color: color,
        width: size,
        height: size,
        display: 'inline-flex',
        fontSize: 'inherit',
      }}
      {...restProps}
    >
      {icon}
    </span>
  )
}
