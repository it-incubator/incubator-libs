import { useState } from 'react'

import { Meta } from '@storybook/react'

import { Button, Collapsible } from '../../../../src'
import InfoIcon from '../../../../src/assets/icons/components/Info'
import { VerticalContainer } from '../../../../storybook-utils/components/containers/vertical'

export default {
  title: 'Components/Disclosure/Collapsible',
  component: Collapsible,
} as Meta<typeof Collapsible>

export const DefaultUncontrolled = {
  args: {
    title: 'Collapsible',
    children:
      'Эффективно обучаем frontend и backend-разработке до трудоустройства, а также проводим учебную стажировку для QA, PM (project manager), front-end (React) и back-end (NestJS) специалистов.\n',
    iconComponent: <InfoIcon size={16} />,
    disabled: false,
    description: 'Some description',
  },
}

export const DefaultControlled = {
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <VerticalContainer>
        <span>
          <Button onClick={() => setOpen(!open)}>Toggle</Button>
        </span>
        <Collapsible open={open} onOpenChange={setOpen} title="Collapsible">
          Эффективно обучаем frontend и backend-разработке до трудоустройства, а также проводим
          учебную стажировку для QA, PM (project manager), front-end (React) и back-end (NestJS)
          специалистов.
        </Collapsible>
      </VerticalContainer>
    )
  },
}

export const DefaultWithDescription = {
  args: {
    title: 'Collapsible',
    children:
      'Эффективно обучаем frontend и backend-разработке до трудоустройства, а также проводим учебную стажировку для QA, PM (project manager), front-end (React) и back-end (NestJS) специалистов.\n',
    disabled: false,
    description: 'Some description',
  },
}

export const DefaultWithIcon = {
  args: {
    title: 'Collapsible',
    children:
      'Эффективно обучаем frontend и backend-разработке до трудоустройства, а также проводим учебную стажировку для QA, PM (project manager), front-end (React) и back-end (NestJS) специалистов.\n',
    iconComponent: <InfoIcon size={16} />,
    disabled: false,
  },
}

export const DefaultWithDescriptionAndIcon = {
  args: {
    title: 'Collapsible',
    children:
      'Эффективно обучаем frontend и backend-разработке до трудоустройства, а также проводим учебную стажировку для QA, PM (project manager), front-end (React) и back-end (NestJS) специалистов.\nnt',
    iconComponent: <InfoIcon size={16} />,
    disabled: false,
    description: 'Some description',
  },
}

export const DefaultDisabled = {
  args: {
    title: 'Collapsible',
    children:
      'Эффективно обучаем frontend и backend-разработке до трудоустройства, а также проводим учебную стажировку для QA, PM (project manager), front-end (React) и back-end (NestJS) специалистов.\n',
    iconComponent: <InfoIcon size={16} />,
    disabled: true,
    description: 'Some description',
  },
}
