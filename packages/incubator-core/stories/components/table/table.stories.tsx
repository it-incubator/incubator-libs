import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Tooltip,
} from '../../../src'

export default {
  title: 'Components/Table',
  component: Table,
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = args => <Table {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: (
    <>
      <TableHead>
        <TableRow>
          <TableHeadCell>Название</TableHeadCell>
          <TableHeadCell align="center">Описание</TableHeadCell>
          <TableHeadCell>Ссылка</TableHeadCell>
          <TableHeadCell>Тип</TableHeadCell>
          <TableHeadCell>Вид</TableHeadCell>
          <TableHeadCell></TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Web Basic</TableCell>
          <TableCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut sed do eiusmod tempoei usmodr sit amet, consectetur adipiscing elit, sed
            do...
          </TableCell>
          <TableCell>
            Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то
            источник
          </TableCell>
          <TableCell>Основной</TableCell>
          <TableCell>Читать</TableCell>
          <TableCell>🦎</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Web Basic</TableCell>
          <TableCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut sed do eiusmod tempoei usmodr sit amet, consectetur adipiscing elit, sed
            do...
          </TableCell>
          <TableCell>
            Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то
            источник
          </TableCell>
          <TableCell>Основной</TableCell>
          <TableCell>Читать</TableCell>
          <TableCell>✨</TableCell>
        </TableRow>
      </TableBody>
    </>
  ),
}
