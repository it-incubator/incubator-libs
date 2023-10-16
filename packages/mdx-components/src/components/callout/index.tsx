import { FC, ReactNode } from 'react'

import { InfoOutline } from '../../assets/icons'
import { clsx } from 'clsx'

import s from './callout.module.scss'

const TypeToEmoji = {
  default: '💡',
  error: '🚫',
  info: <InfoOutline color={'var(--color-info)'} size={28} />,
  warning: '⚠️',
}

type CalloutType = keyof typeof TypeToEmoji

export type CalloutProps = {
  children: ReactNode
  emoji?: ReactNode | string
  variant?: CalloutType
}

export const Callout: FC<CalloutProps> = ({ children, emoji, variant = 'default' }) => {
  if (!emoji) {
    emoji = TypeToEmoji[variant] || TypeToEmoji.default
  }
  const classNames = {
    box: clsx(s.box, s[variant]),
    emojiContainer: s.emojiContainer,
  }

  return (
    <div className={classNames.box}>
      <div className={classNames.emojiContainer}>{emoji}</div>
      <div>{children}</div>
    </div>
  )
}
