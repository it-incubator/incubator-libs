'use client'
import { FC, useState } from 'react'

import s from './read-more.module.scss'

type ReadMoreProps = {
  /** text for ReadMore button when text is shown */
  lessText?: string
  maxLength: number
  /** text for ReadMore button when text is hidden */
  moreText?: string
  text: string
}

export const ReadMore: FC<ReadMoreProps> = ({
  lessText = 'Скрыть',
  maxLength,
  moreText = 'Ещё',
  text,
}) => {
  const [isTrimmed, setIsTrimmed] = useState(true)
  const toggleReadMore = () => {
    setIsTrimmed(!isTrimmed)
  }

  if (text.length <= maxLength) {
    return <>{text}</>
  }

  const trimmedText = `${text.slice(0, maxLength)}...`
  const textToShow = isTrimmed ? trimmedText : text
  const buttonText = isTrimmed ? moreText : lessText

  return (
    <>
      {textToShow}
      <button className={s.button} onClick={toggleReadMore} type={'button'}>
        {buttonText}
      </button>
    </>
  )
}
