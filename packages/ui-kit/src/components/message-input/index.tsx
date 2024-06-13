import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { TextareaAutosize, TextareaAutosizeProps } from '../textarea-autosize'
import { SendMessageIcon } from './send-message-icon'
import { clsx } from 'clsx'

import s from './message-input.module.scss'

export type MessageInputProps = {
  boxClassName?: string
  buttonProps?: ComponentPropsWithoutRef<'button'>
} & TextareaAutosizeProps

export const MessageInput = forwardRef<ElementRef<'textarea'>, MessageInputProps>(
  ({ boxClassName, buttonProps, className, ...restProps }, ref) => {
    const classNames = {
      box: clsx(s.box, boxClassName),
      button: s.button,
      input: clsx(s.input, className),
    }

    return (
      <div className={classNames.box}>
        <TextareaAutosize maxRows={10} {...restProps} className={classNames.input} ref={ref} />
        <button
          aria-label={'Send message'}
          className={classNames.button}
          type={'submit'}
          {...buttonProps}
        >
          <SendMessageIcon />
        </button>
      </div>
    )
  }
)
