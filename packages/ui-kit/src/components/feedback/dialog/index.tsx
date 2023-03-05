import { FC } from 'react'

import { clsx } from 'clsx'

import { Button } from '../../inputs'
import { Modal, ModalProps } from '../modal'

import s from './dialog.module.scss'

export type DialogProps = {
  confirmButtonText: string

  onConfirmButtonClick: () => void

  cancelButtonText?: string
  /** If not provided, onClose will be executed on Cancel click*/
  onCancelButtonClick?: () => void
} & ModalProps

export const Dialog: FC<DialogProps> = ({
  confirmButtonText,
  cancelButtonText,
  onConfirmButtonClick,
  onCancelButtonClick,
  children,

  ...rest
}) => {
  const { onClose } = rest
  const showCancelButton = !!cancelButtonText

  function handleConfirmButtonClicked() {
    onConfirmButtonClick()
  }

  function handleCancelButtonClicked() {
    onCancelButtonClick ? onCancelButtonClick() : onClose()
  }

  const classNames = {
    buttonsBox: clsx(s.buttonsBox, showCancelButton && s.hasCancelButton),
  }

  const confirmButtonVariant = showCancelButton ? 'secondary' : 'primary'

  return (
    <Modal {...rest}>
      {children}
      <div className={classNames.buttonsBox}>
        <Button variant={confirmButtonVariant} onClick={handleConfirmButtonClicked}>
          {confirmButtonText}
        </Button>
        {showCancelButton && (
          <Button onClick={handleCancelButtonClicked}>{cancelButtonText}</Button>
        )}
      </div>
    </Modal>
  )
}
