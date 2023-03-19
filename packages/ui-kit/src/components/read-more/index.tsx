import { FC, useState } from 'react'

import s from './read-more.module.scss'

type ReadMoreProps = {
  text: string
  maxLength: number
  /** text for ReadMore button when text is hidden */
  moreText?: string
  /** text for ReadMore button when text is shown */
  lessText?: string
}

export const ReadMore: FC<ReadMoreProps> = ({
  text,
  maxLength,
  moreText = 'Ещё',
  lessText = 'Скрыть',
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
      <button onClick={toggleReadMore} className={s.button}>
        {buttonText}
      </button>
    </>
  )
}
