import { CSSProperties, ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Root } from '@radix-ui/react-avatar'
import { clsx } from 'clsx'

import s from './avatar.module.scss'

export type AvatarProps = {
  size?: CSSProperties['width']
} & ComponentPropsWithoutRef<typeof Root>

const Avatar = forwardRef<ElementRef<typeof Root>, AvatarProps>(
  ({ className, size = '36px', style, ...props }, ref) => (
    <Root
      className={clsx(className, s.avatar)}
      ref={ref}
      style={{
        ...style,
        height: size,
        width: size,
      }}
      {...props}
    />
  )
)

Avatar.displayName = 'Avatar'

export { Avatar }
