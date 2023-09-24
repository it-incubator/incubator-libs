import { FC } from 'react'

import SkeletonBase, { SkeletonProps as SkeletonPropsBase } from 'react-loading-skeleton'

export type SkeletonProps = Omit<
  SkeletonPropsBase,
  'baseColor' | 'highlightColor' | 'borderRadius' | 'containerClassName'
>

export const Skeleton: FC<SkeletonProps> = props => {
  return <SkeletonBase containerClassName={'flex-1'} borderRadius={'10px'} {...props} />
}
