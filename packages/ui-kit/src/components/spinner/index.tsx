import { FC } from 'react'

import s from './spinner.module.scss'

export type SpinnerProps = {
  size?: number
}

export const Spinner: FC<SpinnerProps> = ({ size = 48 }) => {
  const style = {
    width: size,
    height: size,
    borderWidth: size / 10,
  }

  return (
    <div className={s.container}>
      <span className={s.loader} style={style} />
    </div>
  )
}
