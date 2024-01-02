import { ComponentPropsWithoutRef, ElementRef, ElementType, ForwardedRef, forwardRef } from 'react'

import { KeyboardArrowLeft, KeyboardArrowRight, Typography } from '../..'
import { clsx } from 'clsx'

import s from './navigation-button.module.scss'

export type NavigationButtonProps<T extends ElementType = 'button'> = {
  as?: T
  buttonTitle?: string
  variant?: 'backward' | 'forward'
} & ComponentPropsWithoutRef<T>

const NavigationButtonPolymorph = (
  {
    as = 'button',
    buttonTitle,
    children,
    className,
    variant = 'forward',
    ...restProps
  }: NavigationButtonProps,
  ref: any
) => {
  const Comp = as
  const classes = clsx(s.root, s[variant], className)

  if (buttonTitle === undefined) {
    buttonTitle = variant === 'backward' ? 'Назад' : 'Далее'
  }

  return (
    <Comp className={classes} {...restProps} ref={ref}>
      {variant === 'backward' && <KeyboardArrowLeft className={s.icon} />}

      <div className={s.nameContainer}>
        <Typography.Caption className={s.caption}>{buttonTitle}</Typography.Caption>
        <Typography.Subtitle2 className={s.topic}>{children}</Typography.Subtitle2>
      </div>

      {variant === 'forward' && <KeyboardArrowRight className={s.icon} />}
    </Comp>
  )
}

export const NavigationButton = forwardRef(NavigationButtonPolymorph) as <
  T extends ElementType = 'button',
>(
  props: NavigationButtonProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof NavigationButtonProps<T>> & {
      ref?: ForwardedRef<ElementRef<T>>
    }
) => ReturnType<typeof NavigationButtonPolymorph>
