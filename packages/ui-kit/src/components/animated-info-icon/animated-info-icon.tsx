import { ComponentPropsWithoutRef } from 'react'

import { InfoOutline } from '../../assets/icons'
import { motion } from 'framer-motion'

import s from './animated-info-icon.module.scss'

export type AnimatedInfoIconProps = { enableAnimation: boolean } & ComponentPropsWithoutRef<
  typeof InfoOutline
>
export const AnimatedInfoIcon = ({ enableAnimation, ...iconProps }: AnimatedInfoIconProps) => {
  const duration = 1.4
  const initial = { x: '-50%', y: '-50%' }
  const transition = { duration, repeat: Infinity, type: 'keyframes' }

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
      <InfoOutline
        backgroundColor={'transparent'}
        className={s.icon}
        color={'var(--color-text-primary)'}
        size={16}
        {...iconProps}
      />
    </div>
  )
}
