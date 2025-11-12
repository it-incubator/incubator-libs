'use client'
import { CSSProperties, FC, MouseEvent, ReactElement, TouchEvent, isValidElement } from 'react'

interface IconProps {
  icon: ReactElement | Record<string, any> | string
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
  activeIcon: ReactElement | Record<string, any> | string
  direction: 'ltr' | 'rtl'
  inactiveIcon: ReactElement | Record<string, any> | string
  index: number
  onClick?: (index: number, e: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>) => void
  onMouseMove?: (index: number, e: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>) => void
  onTouchEnd?: (index: number, e: TouchEvent<HTMLElement>) => void
  percent: number
  readonly: boolean
}

export const RatingSymbol: FC<RatingSymbolProps> = props => {
  const {
    activeIcon,
    direction,
    inactiveIcon,
    index,
    onClick,
    onMouseMove,
    onTouchEnd,
    percent,
    readonly,
  } = props

  const backgroundNode = _iconNode({ icon: inactiveIcon })
  const iconNode = _iconNode({ icon: activeIcon })
  const iconContainerStyle: CSSProperties = {
    [direction === 'rtl' ? 'right' : 'left']: 0,
    display: 'inline-block',
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    width: `${percent}%`,
  }
  const style: CSSProperties = {
    cursor: readonly ? 'inherit' : 'pointer',
    display: 'inline-block',
    position: 'relative',
  }

  return (
    <span
      onClick={e => onClick?.(index, e)}
      onMouseMove={e => onMouseMove?.(index, e)}
      onTouchEnd={e => onTouchEnd?.(index, e)}
      onTouchMove={e => onMouseMove?.(index, e)}
      style={style}
    >
      <span>{backgroundNode}</span>
      <span style={iconContainerStyle}>{iconNode}</span>
    </span>
  )
}
