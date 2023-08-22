import { Spinner } from '../spinner'

import s from './loading-overlay.module.scss'
export const LoadingOverlay = () => {
  return (
    <div className={s.backdrop}>
      <Spinner />
    </div>
  )
}
