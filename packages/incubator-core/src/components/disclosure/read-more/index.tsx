import { FC, useState } from 'react'

import s from './read-more.module.css'

type PropsType = {
  text: string
  maxCharacters: number
  /** text for ReadMore button when text is hidden */
  moreText?: string
  /** text for ReadMore button when text is shown */
  lessText?: string
}

export const ReadMore: FC<PropsType> = ({
  text,
  maxCharacters,
  moreText = 'Ещё',
  lessText = 'Скрыть',
}: PropsType) => {
  const [isReadMore, setIsReadMore] = useState(true)
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }

  if (text.length < maxCharacters) {
    return <>{text}</>
  }

  const initialText = `${text.slice(0, maxCharacters)}... `

  return (
    <>
      {isReadMore ? initialText : `${text} `}
      <button onClick={toggleReadMore} className={s.button}>
        {isReadMore ? moreText : lessText}
      </button>
    </>
  )
}
