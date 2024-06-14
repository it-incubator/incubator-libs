import { CSSProperties, ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as ProgressPrimitive from '@radix-ui/react-progress'
import { clsx } from 'clsx'

import s from './progress.module.scss'

export type ProgressProps = ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> &
  Pick<CSSProperties, 'color' | 'height' | 'width'> & {
    baseColor?: CSSProperties['color']
    label?: false | string
  }

const Progress = forwardRef<ElementRef<typeof ProgressPrimitive.Root>, ProgressProps>(
  (
    {
      baseColor = 'var(--color-bg-dividers)',
      className,
      color = 'var(--color-accent-500)',
      height = '8px',
      label,
      max = 100,
      style,
      value = 0,
      width = '100%',
      ...props
    },
    ref
  ) => {
    if (!label && label !== false) {
      label = `${value}/${max}`
    }

    const classNames = {
      container: s.container,
      indicator: s.indicator,
      label: s.label,
      root: clsx(s.root, className),
    }

    const styles: Record<string, CSSProperties> = {
      indicator: {
        backgroundColor: color,
        transform: `translateX(-${100 - ((value || 0) / max) * 100}%)`,
      },
      root: { backgroundColor: baseColor, height },
    }

    return (
      <div className={classNames.container} style={{ width, ...style }}>
        <ProgressPrimitive.Root
          className={classNames.root}
          max={max}
          ref={ref}
          style={styles.root}
          value={value}
          {...props}
        >
          <ProgressPrimitive.Indicator className={classNames.indicator} style={styles.indicator} />
        </ProgressPrimitive.Root>
        {label && <div className={classNames.label}>{label}</div>}
      </div>
    )
  }
)

Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
