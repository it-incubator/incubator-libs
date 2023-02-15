import { FC, RefAttributes } from 'react'

import { clsx } from 'clsx'

import icon from '../../assets/icons/search-icon.svg'
import { TextInput, TextInputProps } from '../text-input'

import s from './styles.modules.scss'

export type SearchProps = {} & TextInputProps & RefAttributes<HTMLInputElement>

export const Search: FC<SearchProps> = ({ placeholder = 'Поиск...', className, ...rest }) => {
  return (
    <>
      <TextInput placeholder={placeholder} className={clsx(className, s.search)} {...rest} />
      <img src={icon} />
    </>
  )
}
