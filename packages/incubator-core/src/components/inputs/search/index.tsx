import { FC, RefAttributes } from 'react'

import { clsx } from 'clsx'

import { TextField, TextInputProps } from '../text-field'

import s from './search.module.scss'

export type SearchProps = {} & TextInputProps & RefAttributes<HTMLInputElement>

export const Search: FC<SearchProps> = ({ placeholder = 'Поиск...', className, ...rest }) => {
  return <TextField placeholder={placeholder} className={clsx(s.search, className)} {...rest} />
}
