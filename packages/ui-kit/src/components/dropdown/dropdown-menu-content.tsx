import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Arrow, Content, Portal } from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './dropdown-menu.module.scss'

const DropdownMenuContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ children, className, loop = true, sideOffset = 8, ...props }, ref) => (
  <Portal>
    <Content
      className={clsx(s.content, className)}
      loop={loop}
      ref={ref}
      sideOffset={sideOffset}
      {...props}
    >
      <Arrow asChild className={s.arrowBox}>
        <div className={s.arrow} />
      </Arrow>
      {children}
    </Content>
  </Portal>
))

DropdownMenuContent.displayName = 'DropdownMenuContent'

export { DropdownMenuContent }
