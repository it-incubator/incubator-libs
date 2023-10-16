import { ComponentPropsWithoutRef, ElementType, FC, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './cards.module.scss'

export type CardProps<T extends ElementType> = {
  as?: T
  href: string
  icon: ReactNode
  title: string
} & ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType = 'a'>(props: CardProps<T>) => {
  const { as: Component = 'a', href, icon, title, ...rest } = props

  const classNames = {
    card: s.card,
    icon: s.icon,
    title: s.title,
  }

  return (
    <Component className={classNames.card} href={href} {...rest}>
      <span className={clsx(classNames.title)}>
        <span className={classNames.icon}>{icon}</span>
        {title}
      </span>
    </Component>
  )
}

export type CardsProps = {
  /**
   * Specifies the preferred number of columns in the cards grid layout.
   * This value is used to calculate the grid-template-columns CSS property with responsive cell width.
   */
  columns?: number
} & ComponentPropsWithoutRef<'div'>

export const Cards: FC<CardsProps> = ({ children, className, columns = 3, style, ...props }) => {
  const classNames = {
    cards: clsx(s.cards, className),
  }

  const cardsStyle = {
    ...style,
    '--columns': columns,
  }

  return (
    <div {...props} className={classNames.cards} style={cardsStyle}>
      {children}
    </div>
  )
}
