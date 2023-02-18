import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TabContent, Tabs } from '../../../../src'

export default {
  title: 'disclosure/Tabs',
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
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = args => <Tabs {...args} />

export const Default = Template.bind({})

export const WithStretchedTabs = Template.bind({})
WithStretchedTabs.args = {
  isTabStretched: true,
}
