import { CSSProperties, FC, isValidElement, MouseEvent, ReactElement, TouchEvent } from 'react'

interface IconProps {
  icon: string | Record<string, any> | ReactElement
}

const _iconNode: FC<IconProps> = ({ icon }) => {
  if (isValidElement(icon)) {
    return icon
  }
  if (typeof icon === 'object') {
    return <span style={icon as CSSProperties} />
  }
  if (typeof icon === 'string') {
    return <span className={icon} />
  }

  return null
}

interface RatingSymbolProps {
  index: number
  inactiveIcon: string | Record<string, any> | ReactElement
  activeIcon: string | Record<string, any> | ReactElement
  percent: number
  direction: 'ltr' | 'rtl'
  readonly: boolean
  onClick?: (index: number, e: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>) => void
  onMouseMove?: (index: number, e: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>) => void
  onTouchEnd?: (index: number, e: TouchEvent<HTMLElement>) => void
}

export const RatingSymbol: FC<RatingSymbolProps> = props => {
  const {
    index,
    inactiveIcon,
    activeIcon,
    percent,
    direction,
    readonly,
    onClick,
    onMouseMove,
    onTouchEnd,
  } = props

  const backgroundNode = _iconNode({ icon: inactiveIcon })
  const iconNode = _iconNode({ icon: activeIcon })
  const iconContainerStyle: CSSProperties = {
    display: 'inline-block',
    position: 'absolute',
    overflow: 'hidden',
    top: 0,
    [direction === 'rtl' ? 'right' : 'left']: 0,
    width: `${percent}%`,
  }
  const style: CSSProperties = {
    cursor: readonly ? 'inherit' : 'pointer',
    display: 'inline-block',
    position: 'relative',
  }

  return (
    <span
      style={style}
      onClick={e => onClick?.(index, e)}
      onMouseMove={e => onMouseMove?.(index, e)}
      onTouchMove={e => onMouseMove?.(index, e)}
      onTouchEnd={e => onTouchEnd?.(index, e)}
    >
      <span>{backgroundNode}</span>
      <span style={iconContainerStyle}>{iconNode}</span>
    </span>
  )
}
