import { FC } from 'react'

import { clsx } from 'clsx'

import { useDeviceType } from '../../hooks'
import { Button } from '../button'
import { Modal, ModalProps } from '../modal'

import s from './dialog.module.scss'

export type DialogProps = {
  confirmButtonText: string

  onConfirmButtonClick: () => void
  /** If true, confirm button will be secondary and cancel button will be primary
   * defaults to true
   * */
  invertButtons?: boolean

  cancelButtonText?: string
  /** If not provided, onClose will be executed on Cancel click*/
  onCancelButtonClick?: () => void
} & ModalProps

export const Dialog: FC<DialogProps> = ({
  confirmButtonText,
  cancelButtonText,
  onConfirmButtonClick,
  onCancelButtonClick,
  invertButtons = true,
  children,
  ...rest
}) => {
  const { isMobile } = useDeviceType()
  const { onClose } = rest
  const showCancelButton = !!cancelButtonText

  function handleConfirmButtonClicked() {
    onConfirmButtonClick()
  }

  function handleCancelButtonClicked() {
    onCancelButtonClick ? onCancelButtonClick() : onClose?.()
  }

  const classNames = {
    buttonsBox: clsx(s.buttonsBox, showCancelButton && s.hasCancelButton, isMobile && s.mobile),
  }

  const confirmButtonVariant = getConfirmButtonVariant(invertButtons, showCancelButton)
  const cancelButtonVariant = invertButtons ? 'primary' : 'secondary'

  return (
    <Modal {...rest}>
      {children}
      <div className={classNames.buttonsBox}>
        {showCancelButton && (
          <Button
            onClick={handleCancelButtonClicked}
            fullWidth={isMobile}
            variant={cancelButtonVariant}
          >
            {cancelButtonText}
          </Button>
        )}
        <Button
          variant={confirmButtonVariant}
          onClick={handleConfirmButtonClicked}
          fullWidth={isMobile}
        >
          {confirmButtonText}
        </Button>
      </div>
    </Modal>
  )
}

const getConfirmButtonVariant = (
  invertButtons: boolean,
  showCancelButton: boolean
): 'primary' | 'secondary' => {
  if (showCancelButton) {
    return invertButtons ? 'secondary' : 'primary'
  }

  return 'primary'
}
