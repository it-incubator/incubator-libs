'use client'
import { ComponentPropsWithoutRef, ReactElement } from 'react'

import { motion, Transition } from 'framer-motion'

import s from './animated-icon.module.scss'

import { InfoOutline } from '../../assets/icons'
import { IconProps } from '../../assets/icons/IconWrapper'

export type AnimatedIconProps = {
  enableAnimation?: boolean
  renderIcon: (props: IconProps) => ReactElement
} & ComponentPropsWithoutRef<typeof InfoOutline>
export const AnimatedIcon = ({ enableAnimation = true, renderIcon }: AnimatedIconProps) => {
  const duration = 1.4
  const initial = { x: '-50%', y: '-50%' }
  const transition: Transition = { duration, repeat: Infinity, type: 'keyframes' }

  return (
    <div className={s.container}>
      {enableAnimation && (
        <>
          <motion.div
            animate={{
              opacity: [0, 0, 0, 0, 0.4, 0.4],
              scale: [0, 0, 0, 0, 1.5, 2.25],
              x: '-50%',
              y: '-50%',
            }}
            className={s.frame}
            initial={initial}
            transition={transition}
          ></motion.div>
          <motion.div
            animate={{
              opacity: [0, 0, 0, 0.4, 0.4, 0],
              scale: [0, 0, 0, 1.5, 2.25, 2.25],
              x: '-50%',
              y: '-50%',
            }}
            className={s.frame}
            initial={initial}
            transition={transition}
          ></motion.div>
        </>
      )}
      {renderIcon({
        backgroundColor: 'transparent',
        className: s.icon,
        color: 'var(--color-text-primary)',
        size: 16,
      })}
    </div>
  )
}
