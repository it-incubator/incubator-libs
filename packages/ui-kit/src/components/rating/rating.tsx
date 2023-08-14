/**
 * A refactored and updated version of https://github.com/dreyescat/react-rating/tree/master
 * which seems to be no longer maintained.
 * The only difference as far as I can tell is the default emptySymbol and fullSymbol,
 * ours are stars by default, everything else should be the same.
 */

import { CSSProperties, FC, ReactElement, useCallback } from 'react'

import { Star, StarBorder } from '../../assets/icons'

import { RatingPrimitive } from './rating-primitive'

export type RatingProps = {
  start?: number
  stop?: number
  step?: number
  placeholderRating?: number
  readonly?: boolean
  quiet?: boolean
  fractions?: number
  direction?: 'ltr' | 'rtl'
  emptySymbol?: string | CSSProperties | ReactElement
  fullSymbol?: string | CSSProperties | ReactElement
  placeholderSymbol?: string | CSSProperties | ReactElement
  value?: number
  onHover?: (value?: number) => void
  onClick?: (value: number) => void
  onChange?: (value: number) => void
  id?: string
  className?: string
  style?: CSSProperties
  tabIndex?: number
  'aria-label'?: string
}

export const Rating: FC<RatingProps> = ({
  start = 0,
  stop = 5,
  step = 1,
  readonly = false,
  quiet = false,
  fractions = 1,
  direction = 'ltr',
  emptySymbol = <StarBorder color={'var(--color-border-star-rating)'} />,
  placeholderSymbol = <Star color={'var(--color-danger-400)'} />,
  fullSymbol = <Star color={'var(--color-danger-400)'} />,
  value,
  placeholderRating,
  onClick,
  onHover,
  id,
  className,
  onChange,
  style,
  tabIndex,
  ['aria-label']: ariaLabel,
}) => {
  const handleClick = useCallback(
    (displayValue: number) => {
      const newValue = translateDisplayValueToValue(displayValue)

      onClick?.(newValue)

      if (value !== newValue) {
        onChange?.(newValue)
      }
    },
    [value, onClick, onChange]
  )

  const handleHover = useCallback(
    (displayValue?: number) => {
      const val =
        displayValue === undefined ? displayValue : translateDisplayValueToValue(displayValue)

      onHover?.(val)
    },
    [onHover]
  )

  const translateDisplayValueToValue = (displayValue: number): number => {
    const translatedValue = displayValue * step + start

    return translatedValue === start ? translatedValue + 1 / fractions : translatedValue
  }

  const translateValueToDisplayValue = (value?: number): number => {
    if (value === undefined) {
      return 0
    }

    return (value - start) / step
  }

  const calculateTotalSymbols = (start: number, stop: number, step: number): number => {
    return Math.floor((stop - start) / step)
  }

  return (
    <RatingPrimitive
      id={id}
      style={style}
      className={className}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      totalSymbols={calculateTotalSymbols(start, stop, step)}
      value={translateValueToDisplayValue(value)}
      placeholderValue={translateValueToDisplayValue(placeholderRating)}
      readonly={readonly}
      quiet={quiet}
      fractions={fractions}
      direction={direction}
      emptySymbol={emptySymbol}
      fullSymbol={fullSymbol}
      placeholderSymbol={placeholderSymbol}
      onClick={handleClick}
      onHover={handleHover}
    />
  )
}
