import { FC } from 'react'

import s from './spinner.module.scss'

export type SpinnerProps = {
  size?: number
  fullScreen?: boolean
}

export const Spinner: FC<SpinnerProps> = ({ size = 48, fullScreen = false }) => {
  const containerStyle = {
    height: fullScreen ? '100vh' : '100%',
  }

  const style = {
    width: size,
    height: size,
  }

  return (
    <div className={s.container} style={containerStyle}>
      <span className={s.loader} style={style} />
    </div>
  )
}
