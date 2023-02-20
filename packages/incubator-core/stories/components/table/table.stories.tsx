import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Table } from '../../../src'

export default {
  title: 'Components/Table',
  component: Table.Root,
} as ComponentMeta<typeof Table.Root>

const Template: ComponentStory<typeof Table.Root> = args => <Table.Root {...args} />

export const Default = Template.bind({})
Default.args = {
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
            Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то
            источник
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
            Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то
            источник
          </Table.Cell>
          <Table.Cell>Основной</Table.Cell>
          <Table.Cell>Читать</Table.Cell>
          <Table.Cell>✨</Table.Cell>
        </Table.Row>
      </Table.Body>
    </>
  ),
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
    link: 'Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то',
    category: 'Основной',
    type: 'Читать',
  },
  {
    id: '03',
    title: 'Web Basic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    link: 'Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то',
    category: 'Основной',
    type: 'Читать',
  },
]

export const DefaultWithMap = Template.bind({})
DefaultWithMap.args = {
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
}
