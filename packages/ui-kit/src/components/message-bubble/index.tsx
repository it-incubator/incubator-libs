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
export const MessageBubble = ({
  className,
  isCurrentUser,
  isFirst,
  message,
  role,
  time,
  username,
  ...restProps
}: MessageBubbleProps) => {
  const classNames = {
    box: clsx(s.box, isCurrentUser && s.currentUser, isFirst && s.isFirst, className),
    message: clsx(s.message, isCurrentUser && s.currentUser),
    time: clsx(s.time, isCurrentUser && s.currentUser),
  }

  return (
    <div {...restProps} className={classNames.box}>
      <MessageHeader
        isCurrentUser={isCurrentUser}
        isFirst={isFirst}
        role={role}
        username={username}
      />
      <Typography.Body2 className={classNames.message}>{message}</Typography.Body2>
      <time className={classNames.time}>{time}</time>
    </div>
  )
}

type MessageHeaderProps = {
  isCurrentUser?: boolean
  isFirst?: boolean
  role?: string
  username?: string
}

const MessageHeader = ({ isCurrentUser, isFirst, role, username }: MessageHeaderProps) => {
  const classNames = {
    header: s.header,
    role: s.role,
    username: s.username,
  }

  const isShowHeader = !isCurrentUser && (role || username) && isFirst

  if (!isShowHeader) {
    return null
  }

  return (
    <div className={classNames.header}>
      {!isCurrentUser && (
        <Typography.Subtitle1 className={classNames.username}>{username}</Typography.Subtitle1>
      )}
      {role && <Typography.Caption className={classNames.role}>{role}</Typography.Caption>}
    </div>
  )
}
