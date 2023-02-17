import { FC } from 'react'

import { clsx } from 'clsx'

import { ChevronRight } from '../../assets/icons/chebron-right'
import { ChevronLeft } from '../../assets/icons/chevron-left'

import s from './pagination.module.scss'
import { usePagination } from './usePagination'

type PaginationProps = {
  onPageChange: Function
  totalPageCount: number
  currentPage: number
}

export const Pagination: FC<PaginationProps> = ({ onPageChange, totalPageCount, currentPage }) => {
  const paginationRange = usePagination({
    currentPage,
    totalPageCount,
  })

  if (paginationRange.length < 2) {
    return null
  }

  const lastPage = paginationRange.at(-1)

  const classNames = {
    container: s.container,
    item: s.item,
    icon: s.icon,
  }

  return (
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
  )
}
