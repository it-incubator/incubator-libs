import { FC } from 'react'

import SkeletonBase, { SkeletonProps as SkeletonPropsBase } from 'react-loading-skeleton'

export type SkeletonProps = Omit<
  SkeletonPropsBase,
  'baseColor' | 'highlightColor' | 'borderRadius' | 'containerClassName'
> & {
  containerFlex?: boolean
}

export const Skeleton: FC<SkeletonProps> = ({ containerFlex = true, ...props }) => {
  return (
    <SkeletonBase
      containerClassName={containerFlex ? 'flex-1' : undefined}
      borderRadius={'10px'}
      {...props}
    />
  )
}
