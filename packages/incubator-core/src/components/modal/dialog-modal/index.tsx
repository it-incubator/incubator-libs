import { Button } from '../../button'
import { BasicModal, BasicModalProps } from '../basic-modal'

import s from './styles.module.scss'

export type PropsType = {
  buttonText: string
  onButtonClick?: Function
} & BasicModalProps

export const DialogModal = ({ buttonText, onButtonClick, children, ...rest }: PropsType) => {
  const buttonHandler = () => {
    onButtonClick && onButtonClick()
    rest.onClose()
  }

  return (
    <BasicModal {...rest}>
      {children}
      <div className={s['button-box']}>
        <Button onClick={buttonHandler}>{buttonText}</Button>
      </div>
    </BasicModal>
  )
}
