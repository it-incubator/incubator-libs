import { useState } from 'react'

import { Button, Collapsible } from '../../../../src'
import InfoIcon from '../../../../src/assets/icons/components/Info'
import { VerticalContainer } from '../../../../storybook-utils/components/containers/vertical'
import { Meta } from '@storybook/react'

export default {
  component: Collapsible,
  title: 'Components/Disclosure/Collapsible',
} as Meta<typeof Collapsible>

export const DefaultUncontrolled = {
  args: {
    children:
      'Эффективно обучаем frontend и backend-разработке до трудоустройства, а также проводим учебную стажировку для QA, PM (project manager), front-end (React) и back-end (NestJS) специалистов.\n',
    description: 'Some description',
    disabled: false,
    iconComponent: <InfoIcon size={16} />,
    title: 'Collapsible',
  },
}
export const DefaultUncontrolledOpenByDefault = {
  args: {
    children:
      'Эффективно обучаем frontend и backend-разработке до трудоустройства, а также проводим учебную стажировку для QA, PM (project manager), front-end (React) и back-end (NestJS) специалистов.\n',
    description: 'Some description',
    disabled: false,
    iconComponent: <InfoIcon size={16} />,
    title: 'Collapsible',
  },
}
export const UncontrolledOpenByDefault = {
  args: {
    children: 'Your children text',
    description: 'Some description',
    disabled: false,
    iconComponent: <InfoIcon size={16} />,
    open: true, // Control the open state here
    title: 'Collapsible',
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
        <Collapsible onOpenChange={setOpen} open={open} title={'Collapsible'}>
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
    children:
      'Эффективно обучаем frontend и backend-разработке до трудоустройства, а также проводим учебную стажировку для QA, PM (project manager), front-end (React) и back-end (NestJS) специалистов.\n',
    description: 'Some description',
    disabled: false,
    title: 'Collapsible',
  },
}

export const DefaultWithIcon = {
  args: {
    children:
      'Эффективно обучаем frontend и backend-разработке до трудоустройства, а также проводим учебную стажировку для QA, PM (project manager), front-end (React) и back-end (NestJS) специалистов.\n',
    disabled: false,
    iconComponent: <InfoIcon size={16} />,
    title: 'Collapsible',
  },
}

export const DefaultWithDescriptionAndIcon = {
  args: {
    children:
      'Эффективно обучаем frontend и backend-разработке до трудоустройства, а также проводим учебную стажировку для QA, PM (project manager), front-end (React) и back-end (NestJS) специалистов.\nnt',
    description: 'Some description',
    disabled: false,
    iconComponent: <InfoIcon size={16} />,
    title: 'Collapsible',
  },
}

export const DefaultDisabled = {
  args: {
    children:
      'Эффективно обучаем frontend и backend-разработке до трудоустройства, а также проводим учебную стажировку для QA, PM (project manager), front-end (React) и back-end (NestJS) специалистов.\n',
    description: 'Some description',
    disabled: true,
    iconComponent: <InfoIcon size={16} />,
    title: 'Collapsible',
  },
}
