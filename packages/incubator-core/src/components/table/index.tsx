import { ComponentProps, FC, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './table.module.scss'

export type TableProps = {
  children: ReactNode
} & ComponentProps<'table'>

export const Table: FC<TableProps> = ({ className, children, ...rest }) => {
  return (
    <table className={clsx(className, s.table)} {...rest}>
      {children}
    </table>
  )
}

export type TableHeadProps = {
  children: ReactNode
} & ComponentProps<'thead'>

export const TableHead: FC<TableHeadProps> = ({ children, ...rest }) => {
  return <thead {...rest}>{children}</thead>
}

export type TableBodyProps = {
  children: ReactNode
} & ComponentProps<'tbody'>

export const TableBody: FC<TableBodyProps> = ({ children, ...rest }) => {
  return <tbody {...rest}>{children}</tbody>
}

export type TableRowProps = {
  children: ReactNode
} & ComponentProps<'tr'>

export const TableRow: FC<TableRowProps> = ({ children, ...rest }) => {
  return <tr {...rest}>{children}</tr>
}

export type TableHeadCellProps = {
  children?: ReactNode
} & ComponentProps<'th'>

export const TableHeadCell: FC<TableHeadCellProps> = ({
  align = 'left',
  className,
  children,
  ...rest
}) => {
  return (
    <th align={align} className={clsx(className, s.tableHeadCell)} {...rest}>
      {children}
    </th>
  )
}

export type TableCellProps = {
  children?: ReactNode
} & ComponentProps<'td'>

export const TableCell: FC<TableCellProps> = ({ className, children, ...rest }) => {
  return (
    <td className={clsx(className, s.tableCell)} {...rest}>
      {children}
    </td>
  )
}
