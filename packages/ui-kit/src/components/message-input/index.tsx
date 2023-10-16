import { ChangeEventHandler, ComponentPropsWithoutRef, FC } from 'react'

import { SendMessageIcon } from './send-message-icon'
import { clsx } from 'clsx'

import s from './message-input.module.scss'

export type MessageInputProps = {
  argTypes: { onClick: { action: 'clicked' } }
  boxClassName?: string
  onButtonClick: () => void
  onChange: ChangeEventHandler<HTMLInputElement>
  value: string
} & ComponentPropsWithoutRef<'input'>

export const MessageInput: FC<MessageInputProps> = ({
  boxClassName,
  className,
  onButtonClick,
  onChange,
  value,
  ...restProps
}) => {
  const isInputEmpty = value.length === 0

  const classNames = {
    box: clsx(s.box, boxClassName),
    button: clsx(s.button, isInputEmpty && s.disabled),
    input: clsx(s.input, className),
  }

  return (
    <div className={classNames.box}>
      <input
        className={classNames.input}
        onChange={onChange}
        placeholder={'Start typing...'}
        value={value}
        {...restProps}
      />
      <button
        aria-label={'Send message'}
        className={classNames.button}
        disabled={isInputEmpty}
        onClick={onButtonClick}
      >
        <SendMessageIcon />
      </button>
    </div>
  )
}
