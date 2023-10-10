import { FC } from 'react'
import SkeletonBase, { SkeletonProps as SkeletonPropsBase } from 'react-loading-skeleton'

export type SkeletonProps = Omit<
  SkeletonPropsBase,
  'baseColor' | 'borderRadius' | 'containerClassName' | 'highlightColor'
> & {
  containerFlex?: boolean
}

export const Skeleton: FC<SkeletonProps> = ({ containerFlex = true, ...props }) => {
  return (
    <SkeletonBase
      borderRadius={'10px'}
      containerClassName={containerFlex ? 'flex-1' : undefined}
      {...props}
    />
  )
}
