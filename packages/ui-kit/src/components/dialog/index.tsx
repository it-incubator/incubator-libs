import { FC } from 'react'

import { clsx } from 'clsx'

import { Button } from '../button'
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
  const { onClose, mobile } = rest
  const showCancelButton = !!cancelButtonText

  function handleConfirmButtonClicked() {
    onConfirmButtonClick()
  }

  function handleCancelButtonClicked() {
    onCancelButtonClick ? onCancelButtonClick() : onClose()
  }

  const classNames = {
    buttonsBox: clsx(s.buttonsBox, showCancelButton && s.hasCancelButton, mobile && s.mobile),
  }

  const confirmButtonVariant = showCancelButton ? 'secondary' : 'primary'

  return (
    <Modal {...rest}>
      {children}
      <div className={classNames.buttonsBox}>
        {showCancelButton && (
          <Button onClick={handleCancelButtonClicked} fullWidth={mobile}>
            {cancelButtonText}
          </Button>
        )}
        <Button
          variant={confirmButtonVariant}
          onClick={handleConfirmButtonClicked}
          fullWidth={mobile}
        >
          {confirmButtonText}
        </Button>
      </div>
    </Modal>
  )
}
