import { ComponentPropsWithoutRef, ReactElement } from 'react'

export const Code = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<'code'>): ReactElement => {
  return (
    <code dir={'ltr'} {...props}>
      {children}
    </code>
  )
}
