'use client'
import { ComponentProps, ReactElement, useCallback, useEffect, useState } from 'react'

import s from './copy-to-clipboard.module.scss'

import { CheckIcon } from './check'
import { CopyIcon } from './copy'

export const CopyToClipboard = ({
  getValue,
  ...props
}: {
  getValue: () => string
} & ComponentProps<'button'>): ReactElement => {
  const [isCopied, setCopied] = useState(false)

  useEffect(() => {
    if (!isCopied) {
      return
    }
    const timerId = setTimeout(() => {
      setCopied(false)
    }, 2000)

    return () => {
      clearTimeout(timerId)
    }
  }, [isCopied])

  const handleClick = useCallback<NonNullable<ComponentProps<'button'>['onClick']>>(async () => {
    setCopied(true)
    if (!navigator?.clipboard) {
      console.error('Access to clipboard rejected!')
    }
    try {
      await navigator.clipboard.writeText(getValue())
    } catch {
      console.error('Failed to copy!')
    }
  }, [getValue])

  const IconToUse = isCopied ? CheckIcon : CopyIcon

  return (
    <button
      className={s.button}
      onClick={handleClick}
      tabIndex={0}
      title={'Copy code'}
      type={'button'}
      {...props}
    >
      <IconToUse className={s.root} />
    </button>
  )
}
