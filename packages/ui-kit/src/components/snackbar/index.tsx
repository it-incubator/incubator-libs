import { FC } from 'react'

import { Flip, IconProps, ToastContainer, ToastContainerProps } from 'react-toastify'

import { Cancel, CheckCircle, Close, Error as ErrorIcon } from '../../'

export const Snackbar: FC<ToastContainerProps> = props => {
  return (
    <ToastContainer
      hideProgressBar
      closeButton={<Close size={16} />}
      icon={Icon}
      position="top-center"
      transition={Flip}
      {...props}
    />
  )
}
const Icon = ({ type }: IconProps) => {
  if (type === 'success') return <CheckCircle color={'var(--color-success-500)'} size={16} />
  if (type === 'warning') return <ErrorIcon color={'var(--color-danger-500)'} size={16} />
  if (type === 'error') return <Cancel color={'var(--color-accent-500)'} size={16} />

  return null
}
