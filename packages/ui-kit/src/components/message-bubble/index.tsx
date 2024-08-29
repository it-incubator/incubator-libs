import { CSSProperties, ComponentProps } from 'react'

import { Typography } from '../typography'
import { clsx } from 'clsx'

import s from './message-bubble.module.scss'

type ShowUsername = 'always' | 'first' | 'never'

type MessageBubbleProps = {
  isCurrentUser?: boolean
  isFirst?: boolean
  maxWidth?: CSSProperties['maxWidth']
  message: string
  role?: string
  showUsername?: ShowUsername
  time: string
  username?: string
} & ComponentProps<'div'>
export const MessageBubble = ({
  className,
  isCurrentUser,
  isFirst,
  maxWidth = '404px',
  message,
  role,
  showUsername = 'first',
  style,
  time,
  username,
  ...restProps
}: MessageBubbleProps) => {
  const classNames = {
    box: clsx(s.box, isCurrentUser && s.currentUser, isFirst && s.isFirst, className),
    message: clsx(s.message),
    time: clsx(s.time),
  }
  const styles = {
    box: { maxWidth, ...style },
  }

  return (
    <div {...restProps} className={classNames.box} style={styles.box}>
      <MessageHeader
        isFirst={isFirst}
        role={role}
        showUsername={showUsername}
        username={username}
      />
      <Typography.Body2 className={classNames.message}>{message}</Typography.Body2>
      <time className={classNames.time}>{time}</time>
    </div>
  )
}

type MessageHeaderProps = {
  isFirst?: boolean
  role?: string
  showUsername?: ShowUsername
  username?: string
}

const MessageHeader = ({ isFirst, role, showUsername = 'first', username }: MessageHeaderProps) => {
  const classNames = {
    header: s.header,
    role: clsx(s.role),
    username: clsx(s.username),
  }

  const shouldShowHeader = getShowHeader(showUsername, role, username, isFirst)

  if (!shouldShowHeader) {
    return null
  }

  return (
    <div className={classNames.header}>
      {!!username && (
        <Typography.Subtitle1 className={classNames.username}>{username}</Typography.Subtitle1>
      )}
      {role && <Typography.Caption className={classNames.role}>{role}</Typography.Caption>}
    </div>
  )
}

function getShowHeader(
  showUsername: ShowUsername,
  role?: string,
  username?: string,
  isFirst?: boolean
) {
  if (!username && !role) {
    return false
  }
  if (showUsername === 'always') {
    return true
  }
  if (showUsername === 'never') {
    return false
  }
  if (showUsername === 'first' && isFirst) {
    return true
  }

  return false
}
