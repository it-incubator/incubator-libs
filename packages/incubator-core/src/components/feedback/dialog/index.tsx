import { FC } from 'react'

import { Button } from '../../inputs/button'
import { Modal, ModalProps } from '../modal'

import s from './dialog.module.scss'

export type DialogProps = {
  confirmButtonText: string

  onConfirmButtonClick: () => void

  cancelButtonText: string
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

  function handleConfirmButtonClicked() {
    onConfirmButtonClick()
  }

  function handleCancelButtonClicked() {
    onCancelButtonClick ? onCancelButtonClick() : onClose()
  }

  const classNames = {
    buttonsBox: s.buttonsBox,
  }

  return (
    <Modal {...rest}>
      {children}
      <div className={classNames.buttonsBox}>
        <Button variant="secondary" onClick={handleConfirmButtonClicked}>
          {confirmButtonText}
        </Button>
        <Button onClick={handleCancelButtonClicked}>{cancelButtonText}</Button>
      </div>
    </Modal>
  )
}
