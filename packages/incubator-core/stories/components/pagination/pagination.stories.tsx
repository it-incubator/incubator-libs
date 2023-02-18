import { useState } from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Pagination } from '../../../src'

export default {
  title: 'Components/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = args => <Pagination {...args} />

export const Default = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [itemPerPage, setItemPerPage] = useState(8)
  const TOTAL_PAGE_COUNT = 10

  return (
    <Pagination
      onPageChange={setPageNumber}
      totalPagesCount={TOTAL_PAGE_COUNT}
      currentPage={pageNumber}
      itemsPerPage={itemPerPage}
      itemsPerPageOptions={[5, 8, 12]}
      onItemPerPageChange={setItemPerPage}
    />
  )
}

export const DefaultWithTwoPages = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const TOTAL_PAGE_COUNT = 2

  return (
    <Pagination
      onPageChange={setPageNumber}
      totalPagesCount={TOTAL_PAGE_COUNT}
      currentPage={pageNumber}
    />
  )
}
