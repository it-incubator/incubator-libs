import { useState } from 'react'

import { VerticalContainer } from '../../../storybook-utils/components/containers/vertical'
import InfoIcon from '../../assets/icons/components/InfoFill'
import { Button, Collapsible } from '../../index'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Collapsible,
  title: 'Components/Collapsible',
} satisfies Meta<typeof Collapsible>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultUncontrolled: Story = {
  args: {
    children:
      'Эффективно обучаем frontend и backend-разработке до трудоустройства, а также проводим учебную стажировку для QA, PM (project manager), front-end (React) и back-end (NestJS) специалистов.\n',
    description: 'Some description',
    disabled: false,
    iconComponent: <InfoIcon size={16} />,
    title: 'Collapsible',
  },
}
export const DefaultUncontrolledOpenByDefault: Story = {
  args: {
    children:
      'Эффективно обучаем frontend и backend-разработке до трудоустройства, а также проводим учебную стажировку для QA, PM (project manager), front-end (React) и back-end (NestJS) специалистов.\n',
    description: 'Some description',
    disabled: false,
    iconComponent: <InfoIcon size={16} />,
    title: 'Collapsible',
  },
}
export const UncontrolledOpenByDefault: Story = {
  args: {
    children: 'Your children text',
    description: 'Some description',
    disabled: false,
    iconComponent: <InfoIcon size={16} />,
    open: true, // Control the open state here
    title: 'Collapsible',
  },
}
export const DefaultControlled: Story = {
  args: {
    children: `Эффективно обучаем frontend и backend-разработке до трудоустройства, а также проводим
          учебную стажировку для QA, PM (project manager), front-end (React) и back-end (NestJS)
          специалистов.`,
    title: 'Collapsible',
  },
  render: args => {
    const [open, setOpen] = useState(true)

    return (
      <VerticalContainer>
        <span>
          <Button onClick={() => setOpen(!open)}>Toggle</Button>
        </span>
        <Collapsible onOpenChange={setOpen} open={open} {...args} />
      </VerticalContainer>
    )
  },
}

export const DefaultWithDescription: Story = {
  args: {
    children:
      'Эффективно обучаем frontend и backend-разработке до трудоустройства, а также проводим учебную стажировку для QA, PM (project manager), front-end (React) и back-end (NestJS) специалистов.\n',
    description: 'Some description',
    disabled: false,
    title: 'Collapsible',
  },
}

export const DefaultWithIcon: Story = {
  args: {
    children:
      'Эффективно обучаем frontend и backend-разработке до трудоустройства, а также проводим учебную стажировку для QA, PM (project manager), front-end (React) и back-end (NestJS) специалистов.\n',
    disabled: false,
    iconComponent: <InfoIcon size={16} />,
    title: 'Collapsible',
  },
}

export const DefaultWithDescriptionAndIcon: Story = {
  args: {
    children:
      'Эффективно обучаем frontend и backend-разработке до трудоустройства, а также проводим учебную стажировку для QA, PM (project manager), front-end (React) и back-end (NestJS) специалистов.\nnt',
    description: 'Some description',
    disabled: false,
    iconComponent: <InfoIcon size={16} />,
    title: 'Collapsible',
  },
}

export const DefaultDisabled: Story = {
  args: {
    children:
      'Эффективно обучаем frontend и backend-разработке до трудоустройства, а также проводим учебную стажировку для QA, PM (project manager), front-end (React) и back-end (NestJS) специалистов.\n',
    description: 'Some description',
    disabled: true,
    iconComponent: <InfoIcon size={16} />,
    title: 'Collapsible',
  },
}
