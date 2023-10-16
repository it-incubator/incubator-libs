import { ComponentProps, ComponentPropsWithoutRef, forwardRef } from 'react'

import { SendMessageIcon } from './send-message-icon'
import { clsx } from 'clsx'

import s from './message-input.module.scss'

export type MessageInputProps = {
  boxClassName?: string
  buttonProps?: ComponentPropsWithoutRef<'button'>
} & ComponentProps<'input'>

export const MessageInput = forwardRef<HTMLInputElement, MessageInputProps>(
  ({ boxClassName, buttonProps, className, ...restProps }, ref) => {
    const classNames = {
      box: clsx(s.box, boxClassName),
      button: s.button,
      input: clsx(s.input, className),
    }

    return (
      <div className={classNames.box}>
        <input {...restProps} className={classNames.input} ref={ref} />
        <button aria-label={'Send message'} className={classNames.button} {...buttonProps}>
          <SendMessageIcon />
        </button>
      </div>
    )
  }
)
