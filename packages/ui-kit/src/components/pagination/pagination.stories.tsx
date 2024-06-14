import { useState } from 'react'

import { Pagination } from '../..'
import { VerticalContainer } from '../../../storybook-utils/components/containers/vertical'
import { ValuePreview } from '../../../storybook-utils/components/previews/value-preview'
import { Meta } from '@storybook/react'

export default {
  component: Pagination,
  title: 'Components/Pagination',
} as Meta<typeof Pagination>

export const Default = () => {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(8)
  const TOTAL_PAGES_COUNT = 10

  return (
    <VerticalContainer>
      <Pagination
        count={TOTAL_PAGES_COUNT}
        onChange={setPage}
        onPerPageChange={setPerPage}
        page={page}
        perPage={perPage}
        perPageOptions={[5, 8, 12, 100]}
      />
      <ValuePreview>Current page: {page}</ValuePreview>
      <ValuePreview>Per page: {perPage}</ValuePreview>
    </VerticalContainer>
  )
}

export const DefaultWithTwoPages = () => {
  const [page, setPage] = useState(1)
  const TOTAL_PAGE_COUNT = 2

  return (
    <VerticalContainer>
      <Pagination count={TOTAL_PAGE_COUNT} onChange={setPage} page={page} />
      <ValuePreview>Current page: {page}</ValuePreview>
    </VerticalContainer>
  )
}

export const DefaultWithOnePages = () => {
  const [page, setPage] = useState(1)
  const TOTAL_PAGE_COUNT = 1

  return (
    <VerticalContainer>
      <Pagination count={TOTAL_PAGE_COUNT} onChange={setPage} page={page} />
      <ValuePreview>Current page: {page}</ValuePreview>
    </VerticalContainer>
  )
}
