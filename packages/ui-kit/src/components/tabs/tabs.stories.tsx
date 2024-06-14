import { TabContent, Tabs } from './tabs'
import { Meta } from '@storybook/react'

export default {
  args: {
    children: (
      <>
        <TabContent value={'sprints'}>Контент спринтов</TabContent>
        <TabContent value={'weeks'}>Контент недель</TabContent>
        <TabContent value={'subjects'}>Контент тем</TabContent>
      </>
    ),
    defaultValue: 'sprints',
    tabs: [
      { title: 'Спринты', value: 'sprints' },
      { title: 'Недели', value: 'weeks' },
      { title: 'Темы', value: 'subjects' },
    ],
  },
  component: Tabs,
  title: 'Components/Tabs',
} as Meta<typeof Tabs>

export const Primary = {}

export const PrimaryWithDisabled = {
  args: {
    tabs: [
      { title: 'Спринты', value: 'sprints' },
      { title: 'Недели', value: 'weeks' },
      { disabled: true, title: 'Темы', value: 'subjects' },
    ],
  },
}

export const FullWidth = {
  args: {
    fullWidth: true,
  },
}

export const Secondary = {
  args: {
    variant: 'secondary',
  },
}

export const SecondaryWithDisabled = {
  args: {
    ...Secondary.args,
    tabs: [
      { title: 'Спринты', value: 'sprints' },
      { title: 'Недели', value: 'weeks' },
      { disabled: true, title: 'Темы', value: 'subjects' },
    ],
  },
}
