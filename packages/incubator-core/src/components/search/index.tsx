import { FC, RefAttributes } from 'react'

import { clsx } from 'clsx'

import { TextInput, TextInputProps } from '../text-input'
import './styles.scss'

export type SearchProps = {} & TextInputProps & RefAttributes<HTMLInputElement>

export const Search: FC<SearchProps> = ({ placeholder = 'Поиск...', className, ...rest }) => {
  return (
    <TextInput
      placeholder={placeholder}
      className={clsx(className, 'search-incubator-libs')}
      {...rest}
    />
  )
}
