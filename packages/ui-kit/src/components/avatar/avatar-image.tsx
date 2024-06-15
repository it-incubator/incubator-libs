import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Image } from '@radix-ui/react-avatar'
import { clsx } from 'clsx'

import s from './avatar.module.scss'

const AvatarImage = forwardRef<ElementRef<typeof Image>, ComponentPropsWithoutRef<typeof Image>>(
  ({ className, ...props }, ref) => (
    <Image className={clsx(s.avatarImage, className)} ref={ref} {...props} />
  )
)

AvatarImage.displayName = 'AvatarImage'

export { AvatarImage }
