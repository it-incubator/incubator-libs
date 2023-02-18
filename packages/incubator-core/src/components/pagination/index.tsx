import { FC } from 'react'

import { clsx } from 'clsx'

import { ChevronRight } from '../../assets/icons/chebron-right'
import { ChevronLeft } from '../../assets/icons/chevron-left'
import { Select, SelectItem } from '../inputs/select'

import s from './pagination.module.scss'
import { usePagination } from './usePagination'

type PaginationProps = {
  totalPagesCount: number
  currentPage: number
  onPageChange: Function
  itemsPerPage?: number
  maxItemsPerPage?: number
  onItemPerPageChange?: (itemPerPage: number) => void
}

export const Pagination: FC<PaginationProps> = ({
  onPageChange,
  totalPagesCount,
  currentPage,
  itemsPerPage,
  maxItemsPerPage,
  onItemPerPageChange,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalPagesCount,
  })

  if (paginationRange.length < 2) {
    return null
  }

  const lastPage = paginationRange.at(-1)

  const classNames = {
    box: s.box,
    container: s.container,
    item: s.item,
    icon: s.icon,
  }

  return (
    <div className={classNames.box}>
      <div className={classNames.container}>
        <button
          className={s.item}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className={classNames.icon} />
        </button>

        {paginationRange.map((pageNumber: number | string, index) => {
          if (typeof pageNumber !== 'number') {
            return (
              <span key={index} className={s.item}>
                &#8230;
              </span>
            )
          }

          return (
            <button
              key={index}
              onClick={() => onPageChange(pageNumber)}
              disabled={pageNumber === currentPage}
              className={clsx(classNames.item, {
                [s.selected]: pageNumber === currentPage,
              })}
            >
              {pageNumber}
            </button>
          )
        })}

        <button
          className={s.item}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === lastPage}
        >
          <ChevronRight className={classNames.icon} />
        </button>
      </div>
      {itemsPerPage && (
        <PaginationItemsPerPageSelect
          itemPerPage={itemsPerPage}
          maxItemsPerPage={maxItemsPerPage!}
          onItemPerPageChange={onItemPerPageChange!}
        />
      )}
    </div>
  )
}

export type PaginationItemsPerPageSelectProps = {
  itemPerPage: number
  maxItemsPerPage: number
  onItemPerPageChange: (itemPerPage: number) => void
}

export const PaginationItemsPerPageSelect: FC<PaginationItemsPerPageSelectProps> = ({
  itemPerPage,
  maxItemsPerPage,
  onItemPerPageChange,
}) => {
  const classNames = {
    selectBox: s.selectBox,
  }

  const handleValueChanged = (itemPerPage: string) => {
    onItemPerPageChange(Number(itemPerPage))
  }

  const values = Array.from({ length: maxItemsPerPage }, (value, index) => String(index + 1))

  return (
    <div className={classNames.selectBox}>
      Показать
      <Select
        className={s.select}
        value={String(itemPerPage)}
        onValueChange={handleValueChanged}
        variant="pagination"
      >
        {values.map(value => (
          <SelectItem key={value} value={value}>
            {value}
          </SelectItem>
        ))}
      </Select>
      на странице
    </div>
  )
}
