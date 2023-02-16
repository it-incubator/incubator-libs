import clsx from 'clsx'

import { Button } from '../../button'
import { BasicModal, BasicModalProps } from '../basic-modal'

import s from './styles.module.scss'

type PropsType = {
  confirmButtonText: string
  onConfirmButtonClick: Function
  cancelButtonText: string
  onCancelButtonClick?: Function
} & BasicModalProps

export const ConfirmModal = ({
  confirmButtonText,
  cancelButtonText,
  onConfirmButtonClick,
  onCancelButtonClick,
  children,
  ...rest
}: PropsType) => {
  const confirmButtonHandler = () => {
    onConfirmButtonClick()
    rest.onClose()
  }

  const cancelButtonHandler = () => {
    onCancelButtonClick && onCancelButtonClick()
    rest.onClose()
  }

  const className = clsx(rest.className)

  return (
    <BasicModal {...rest}>
      {children}
      <div className={s['button-box']}>
        <Button variant="secondary" onClick={confirmButtonHandler}>
          {confirmButtonText}
        </Button>
        <Button onClick={cancelButtonHandler}>{cancelButtonText}</Button>
      </div>
    </BasicModal>
  )
}
