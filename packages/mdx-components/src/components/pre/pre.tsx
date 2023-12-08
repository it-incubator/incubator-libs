import { ComponentProps, ReactElement, useRef } from 'react'

import { Scrollbar } from '../scrollbar'
import { CopyToClipboard } from './copy-to-clipboard'
import { clsx } from 'clsx'

import styles from './pre.module.scss'
export const Pre = ({
  children,
  className,
  filename,
  ...props
}: ComponentProps<'pre'> & {
  'data-language'?: string
  filename?: string
  hasCopyCode?: boolean
}): ReactElement => {
  if (!filename) {
    filename = props['data-language']
  }
  const preRef = useRef<HTMLPreElement | null>(null)

  return (
    <Scrollbar className={styles.codeBlock} type={'hover'}>
      {filename && (
        <div className={styles.filename}>
          {filename}
          <CopyToClipboard
            getValue={() => preRef.current?.querySelector('code')?.textContent || ''}
          />
        </div>
      )}
      <pre
        className={clsx(
          styles.preCommon,
          filename ? styles.preWithFilename : styles.preWithoutFilename,
          className
        )}
        ref={preRef}
        {...props}
      >
        {children}
      </pre>
    </Scrollbar>
  )
}
