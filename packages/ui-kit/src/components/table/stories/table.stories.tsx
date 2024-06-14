import { ReadMore, Table, Typography } from '../../../'
// @ts-ignore
import DocumentationTemplate from './table.mdx'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Table.Root,
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },

  title: 'Components/Table',
} satisfies Meta<typeof Table.Root>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Название</Table.HeadCell>
            <Table.HeadCell align={'center'}>Описание</Table.HeadCell>
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
              <Typography.Link href={'https://it-incubator.io/'} target={'_blank'}>
                Какая-то ссылка куда-то на какой-то источник с информацией ссылка куда-то на
                какой-то источник
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
              <Typography.Link href={'https://it-incubator.io/'} target={'_blank'}>
                Какая-то ссылка куда-то на какой-то источник с информацией ссылка куда-то на
                какой-то источник
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

  render: args => <Table.Root {...args} />,
}

const data = [
  {
    category: 'Основной',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    id: '01',
    link: 'Какая-то ссылка куда-то на какой-то источник с информацией ссылка куда-то на какой-то',
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
    link: 'Какая-то ссылка куда-то на какой-то источник с информацией ссылка куда-то на какой-то. Какая-то ссылка куда-то на какой-то источник с информацией ссылка куда-то на какой-то',
    title: 'Web Basic',
    type: 'Читать',
  },
]

export const WithReadMore: Story = {
  args: {
    children: (
      <>
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
              <Table.Cell width={300}>
                <ReadMore maxLength={60} text={item.link} />
              </Table.Cell>
              <Table.Cell>{item.category}</Table.Cell>
              <Table.Cell>{item.type}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </>
    ),
  },

  render: args => <Table.Root {...args} />,
}

export const Empty: Story = {
  render: () => <Table.Empty />,
}
