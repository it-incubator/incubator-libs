'use client'
import s from './loading-overlay.module.scss'

import { Spinner } from '../spinner'
export const LoadingOverlay = () => {
  return (
    <div className={s.backdrop}>
      <Spinner />
    </div>
  )
}
