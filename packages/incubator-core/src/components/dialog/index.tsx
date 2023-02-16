import { Button } from '../button'
import { Modal, ModalProps } from '../modal'

import s from './styles.module.scss'

export type DialogProps = {
  confirmButtonText: string
  onConfirmButtonClick: Function
  cancelButtonText: string
  onCancelButtonClick?: Function
} & ModalProps

export const Dialog = ({
  confirmButtonText,
  cancelButtonText,
  onConfirmButtonClick,
  onCancelButtonClick,
  children,

  ...rest
}: DialogProps) => {
  function handleConfirmButtonClicked() {
    onConfirmButtonClick()
  }

  const handleCancelButtonClicked = () => {
    onCancelButtonClick?.()
  }

  return (
    <Modal {...rest}>
      {children}
      <div className={s.buttonBox}>
        <Button variant="secondary" onClick={handleConfirmButtonClicked}>
          {confirmButtonText}
        </Button>
        <Button onClick={handleCancelButtonClicked}>{cancelButtonText}</Button>
      </div>
    </Modal>
  )
}
