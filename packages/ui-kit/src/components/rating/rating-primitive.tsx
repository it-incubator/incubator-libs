import {
  useState,
  useEffect,
  ReactElement,
  TouchEvent,
  MouseEvent,
  CSSProperties,
  FC,
  ReactNode,
} from 'react'

import { RatingSymbol } from './rating-symbol'

type Symbol =
  | ReactElement
  | string
  | { [key: string]: any }
  | Array<ReactElement | string | { [key: string]: any }>

interface Props {
  totalSymbols: number
  value: number
  placeholderValue: number
  readonly: boolean
  quiet: boolean
  fractions: number
  direction: 'rtl' | 'ltr'
  emptySymbol: Symbol
  fullSymbol: Symbol
  placeholderSymbol?: Symbol
  onClick: (value: number, event: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>) => void
  onHover: (value?: number) => void
  className?: string
  id?: string
  style?: CSSProperties
  tabIndex?: number
  ['aria-label']?: string
}

export const RatingPrimitive: FC<Props> = ({
  totalSymbols,
  value,
  placeholderValue,
  readonly,
  quiet,
  fractions,
  direction,
  emptySymbol,
  fullSymbol,
  placeholderSymbol,
  onClick,
  onHover,
  className,
  id,
  style,
  tabIndex,
  ...props
}) => {
  const [displayValue, setDisplayValue] = useState<number>(value)
  const [interacting, setInteracting] = useState<boolean>(false)

  useEffect(() => {
    setDisplayValue(value)
  }, [value])

  useEffect(() => {
    if (!interacting) {
      onHover()
    } else if (value === value) {
      onHover(displayValue)
    }
  }, [interacting, displayValue])

  const symbolEnd = (symbolIndex: number, event: TouchEvent<HTMLElement>) => {
    if (!quiet) {
      symbolClick(symbolIndex, event)
      event.preventDefault()
    }
    setDisplayValue(value)
    setInteracting(false)
  }

  const symbolClick = (
    symbolIndex: number,
    event: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>
  ) => {
    const val = calculateDisplayValue(symbolIndex, event)

    onClick(val, event)
  }

  const symbolMouseMove = (
    symbolIndex: number,
    event: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>
  ) => {
    const val = calculateDisplayValue(symbolIndex, event)

    if (!readonly) {
      setDisplayValue(val)
      setInteracting(true)
    }
  }

  const calculateDisplayValue = (
    symbolIndex: number,
    event: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>
  ) => {
    const percentage = calculateHoverPercentage(event)
    const fraction = Math.ceil((percentage % 1) * fractions) / fractions
    const precision = 10 ** 3
    const displayVal =
      symbolIndex + (Math.floor(percentage) + Math.floor(fraction * precision) / precision)

    // eslint-disable-next-line no-nested-ternary
    return displayVal > 0 ? (displayVal > totalSymbols ? totalSymbols : displayVal) : 1 / fractions
  }

  const calculateHoverPercentage = (event: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>) => {
    let clientX

    if ('touches' in event) {
      clientX =
        event.type.indexOf('touchend') > -1
          ? event.changedTouches[0].clientX
          : event.touches[0].clientX
    } else {
      clientX = event.clientX
    }

    const target = event.target as HTMLElement // Type assertion here
    const targetRect = target.getBoundingClientRect()
    const delta = direction === 'rtl' ? targetRect.right - clientX : clientX - targetRect.left

    return delta < 0 ? 0 : delta / targetRect.width
  }

  const onMouseLeave = () => {
    setInteracting(false)
    setDisplayValue(value)
  }

  const symbolNodes: Symbol[] = []
  const empty: Symbol[] = ([] as Symbol[]).concat(emptySymbol)
  const full = ([] as Symbol[]).concat(fullSymbol)
  const placeholder = ([] as Array<Symbol | undefined>).concat(placeholderSymbol)

  const shouldDisplayPlaceholder = placeholderValue !== 0 && value === 0 && !interacting
  // eslint-disable-next-line no-nested-ternary
  const renderedValue = shouldDisplayPlaceholder ? placeholderValue : quiet ? value : displayValue
  const fullSymbols = Math.floor(renderedValue)

  for (let i = 0; i < totalSymbols; i++) {
    let percent

    if (i - fullSymbols < 0) {
      percent = 100
    } else if (i - fullSymbols === 0) {
      percent = (renderedValue - i) * 100
    } else {
      percent = 0
    }

    symbolNodes.push(
      <RatingSymbol
        key={i}
        index={i}
        readonly={readonly}
        inactiveIcon={empty[i % empty.length]}
        activeIcon={
          shouldDisplayPlaceholder ? placeholder[i % full.length] ?? [] : full[i % full.length]
        }
        percent={percent}
        direction={direction}
        {...(!readonly && {
          onClick: symbolClick,
          onMouseMove: symbolMouseMove,
          onTouchMove: symbolMouseMove,
          onTouchEnd: symbolEnd,
        })}
      />
    )
  }

  return (
    <span
      id={id}
      style={{ ...style, display: 'inline-block', direction }}
      className={className}
      tabIndex={tabIndex}
      aria-label={props['aria-label']}
      {...(!readonly && { onMouseLeave })}
    >
      {symbolNodes as ReactNode}
    </span>
  )
}
