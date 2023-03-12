import { FC, RefAttributes } from 'react'

import { Search as SearchIcon } from '../../../assets/icons'
import { TextField, TextFieldProps } from '../text-field'

export type SearchProps = {} & TextFieldProps & RefAttributes<HTMLInputElement>

export const Search: FC<SearchProps> = ({ placeholder = 'Поиск...', className, ...rest }) => {
  return (

    <TextField
      placeholder={placeholder}
      iconStart={<SearchIcon size={20} color={'var(--color-text-secondary)'} />}
      {...rest}
    />
  )
}
