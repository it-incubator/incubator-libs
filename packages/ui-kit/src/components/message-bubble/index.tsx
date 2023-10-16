import { ComponentProps, FC } from 'react'

import { Typography } from '../typography'
import { clsx } from 'clsx'

import s from './message-bubble.module.scss'

type CommonProps = {
  isCurrentUser?: boolean
  isFirst?: boolean
  message: string
  time: string
} & ComponentProps<'div'>

type ConditionalProps =
  | {
      isCurrentUser: true
      role?: never
      username?: never
    }
  | {
      isCurrentUser?: false
      role?: string
      username?: string
    }

type MessageBubbleProps = CommonProps & ConditionalProps
export const MessageBubble: FC<MessageBubbleProps> = ({
  className,
  isCurrentUser,
  isFirst,
  message,
  role,
  time,
  username,
  ...restProps
}) => {
  const classNames = {
    box: clsx(s.box, isCurrentUser && s.currentUser, isFirst && s.isFirst, className),
    header: s.header,
    message: s.message,
    role: s.role,
    time: s.time,
    username: s.username,
  }

  const isShowHeader = !isCurrentUser && (role || username) && isFirst

  const messageHeader = isShowHeader ? (
    <div className={classNames.header}>
      {!isCurrentUser && (
        <Typography.Subtitle1 className={classNames.username}>{username}</Typography.Subtitle1>
      )}
      {role && <Typography.Caption className={classNames.role}>{role}</Typography.Caption>}
    </div>
  ) : null

  return (
    <div {...restProps} className={classNames.box}>
      {messageHeader}
      <Typography.Body2 className={classNames.message}>{message}</Typography.Body2>
      <time className={classNames.time}>{time}</time>
    </div>
  )
}
