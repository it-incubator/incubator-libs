import { Meta } from '@storybook/react'

import { ReadMore, Table, Typography } from '../../../../src'

export default {
  title: 'Components/Data Display/Table',
  component: Table.Root,
} as Meta<typeof Table.Root>

export const Default = {
  render: args => <Table.Root {...args} />,

  args: {
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Название</Table.HeadCell>
            <Table.HeadCell align="center">Описание</Table.HeadCell>
            <Table.HeadCell>Ссылка</Table.HeadCell>
            <Table.HeadCell>Тип</Table.HeadCell>
            <Table.HeadCell>Вид</Table.HeadCell>
            <Table.HeadCell />
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Web Basic</Table.Cell>
            <Table.Cell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut sed do eiusmod tempoei usmodr sit amet, consectetur adipiscing elit, sed
              do...
            </Table.Cell>
            <Table.Cell>
              <Typography.Link href="https://it-incubator.io/" target="_blank">
                Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то
                источник
              </Typography.Link>
            </Table.Cell>
            <Table.Cell>Основной</Table.Cell>
            <Table.Cell>Читать</Table.Cell>
            <Table.Cell>🦎</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Web Basic</Table.Cell>
            <Table.Cell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut sed do eiusmod tempoei usmodr sit amet, consectetur adipiscing elit, sed
              do...
            </Table.Cell>
            <Table.Cell>
              <Typography.Link href="https://it-incubator.io/" target="_blank">
                Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то
                источник
              </Typography.Link>
            </Table.Cell>
            <Table.Cell>Основной</Table.Cell>
            <Table.Cell>Читать</Table.Cell>
            <Table.Cell>✨</Table.Cell>
          </Table.Row>
        </Table.Body>
      </>
    ),
  },
}

const data = [
  {
    id: '01',
    title: 'Web Basic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    link: 'Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то',
    category: 'Основной',
    type: 'Читать',
  },
  {
    id: '02',
    title: 'Web Basic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    link: 'Какая-то ссылка куда-то',
    category: 'Основной',
    type: 'Читать',
  },
  {
    id: '03',
    title: 'Web Basic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    link: 'Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то. Какая-то ссылка кудато на какой-то источник с информациейо ссылка куда-то на какой-то',
    category: 'Основной',
    type: 'Читать',
  },
]

export const WithMapMethod = {
  render: args => <Table.Root {...args} />,

  args: {
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Название</Table.HeadCell>
            <Table.HeadCell align="center">Описание</Table.HeadCell>
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
      </>
    ),
  },
}

export const WithReadMore = {
  render: args => <Table.Root {...args} />,

  args: {
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Название</Table.HeadCell>
            <Table.HeadCell align="center">Описание</Table.HeadCell>
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
              <Table.Cell width={300}>
                <ReadMore text={item.link} maxLength={60} />
              </Table.Cell>
              <Table.Cell>{item.category}</Table.Cell>
              <Table.Cell>{item.type}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </>
    ),
  },
}
