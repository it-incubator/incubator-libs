import { ComponentProps, FC, ReactNode } from 'react'

export type CollapsibleProps = {
  defaultOpen: boolean
  open: boolean
  onOpenChange: (open: boolean) => void
  disabled: boolean
  children: ReactNode
  collapsible?: boolean
  title: string
} & ComponentProps<'div'>

export const Collapsible: FC<CollapsibleProps> = ({
  children,
  collapsible,
  title,
  className,
  ...rest
}) => {
  // const rootClassName = clsx(s.root, className)

  return null
  // return (
  //   <CollapsibleRadix.Root
  //     {...{
  //       rest,
  //       className: rootClassName,
  //     }}
  //   >
  //     <div className={s.headerBox}>
  //       <p>{title}</p>
  //       <CollapsibleRadix.Trigger className={s.trigger}>{title}</CollapsibleRadix.Trigger>
  //     </div>
  //
  //     <CollapsibleRadix.Content className={s.content}>{children}</CollapsibleRadix.Content>
  //   </CollapsibleRadix.Root>
  // )
}
