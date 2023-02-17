import { ChangeEvent, useState } from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Pagination } from '../../../src'

export default {
  title: 'Components/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = args => <Pagination {...args} />

export const Default = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const TOTAL_PAGE_COUNT = 10

  return (
    <Pagination
      onPageChange={setPageNumber}
      totalPageCount={TOTAL_PAGE_COUNT}
      currentPage={pageNumber}
    />
  )
}

export const DefaultWithTwoPages = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const TOTAL_PAGE_COUNT = 2

  return (
    <Pagination
      onPageChange={setPageNumber}
      totalPageCount={TOTAL_PAGE_COUNT}
      currentPage={pageNumber}
    />
  )
}
