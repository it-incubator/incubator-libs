import { FC, ReactNode } from 'react'

import { clsx } from 'clsx'

import InfoOutline from '../../assets/icons/components/InfoOutline'

import s from './callout.module.scss'

const TypeToEmoji = {
  default: '💡',
  error: '🚫',
  info: <InfoOutline size={28} color="var(--color-info)" />,
  warning: '⚠️',
}

type CalloutType = keyof typeof TypeToEmoji

export type CalloutProps = {
  variant?: CalloutType
  emoji?: string | ReactNode
  children: ReactNode
}

export const Callout: FC<CalloutProps> = ({
  children,
  variant = 'default',
  emoji = TypeToEmoji[variant],
}) => {
  const classNames = {
    box: clsx(s.box, s[variant]),
    emojiContainer: s.emojiContainer,
  }

  return (
    <div className={classNames.box}>
      <div className={classNames.emojiContainer}>{emoji}</div>
      <div className={''}>{children}</div>
    </div>
  )
}
