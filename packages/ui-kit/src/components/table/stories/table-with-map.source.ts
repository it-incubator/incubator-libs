export const tableWithMapSource = `

import { Table } from '@it-incubator/ui-kit'

const data = [
  {
    category: 'Основной',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    id: '01',
    link: 'Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то',
    title: 'Web Basic',
    type: 'Читать',
  },
  {
    category: 'Основной',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    id: '02',
    link: 'Какая-то ссылка куда-то',
    title: 'Web Basic',
    type: 'Читать',
  },
  {
    category: 'Основной',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    id: '03',
    link: 'Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то. Какая-то ссылка кудато на какой-то источник с информациейо ссылка куда-то на какой-то',
    title: 'Web Basic',
    type: 'Читать',
  },
]

export function TableWithMap() {
  return (
    <Table.Root>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>Название</Table.HeadCell>
          <Table.HeadCell align={'center'}>Описание</Table.HeadCell>
          <Table.HeadCell>Ссылка</Table.HeadCell>
          <Table.HeadCell>Тип</Table.HeadCell>
          <Table.HeadCell>Вид</Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {data.map(item => (
          <Table.Row key={item.id}>
            <Table.Cell>{item.title}</Table.Cell>
            <Table.Cell>{item.description}</Table.Cell>
            <Table.Cell>{item.link}</Table.Cell>
            <Table.Cell>{item.category}</Table.Cell>
            <Table.Cell>{item.type}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
`
