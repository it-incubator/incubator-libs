import { Meta } from '@storybook/react-vite'

import { TabContent, Tabs } from '../../../../src'

export default {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
  args: {
    tabs: [
      { value: 'sprints', title: 'Спринты' },
      { value: 'weeks', title: 'Недели' },
      { value: 'subjects', title: 'Темы' },
    ],
    defaultValue: 'sprints',
    children: (
      <>
        <TabContent value="sprints">Контент спринтов</TabContent>
        <TabContent value="weeks">Контент недель</TabContent>
        <TabContent value="subjects">Контент тем</TabContent>
      </>
    ),
  },
} as Meta<typeof Tabs>

export const Primary = {}

export const PrimaryWithDisabled = {
  args: {
    tabs: [
      { value: 'sprints', title: 'Спринты' },
      { value: 'weeks', title: 'Недели' },
      { value: 'subjects', title: 'Темы', disabled: true },
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
      { value: 'sprints', title: 'Спринты' },
      { value: 'weeks', title: 'Недели' },
      { value: 'subjects', title: 'Темы', disabled: true },
    ],
  },
}
