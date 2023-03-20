import { Meta } from '@storybook/react'

import { Alert, HelpOutline } from '../../../../src'

export default {
  title: 'Components/Feedback/Alert',
  component: Alert,
} as Meta<typeof Alert>

export const Warning = {
  args: {
    children: 'Для того чтобы продолжить, пройдите все шаги указанные в инструкции',
    variant: 'warning',
  },
}

export const Error = {
  args: {
    children: 'Для того чтобы продолжить, пройдите все шаги указанные в инструкции',
    variant: 'error',
  },
}

export const WithCustomIcon = {
  args: {
    children: 'Для того чтобы продолжить, пройдите все шаги указанные в инструкции',
    icon: <HelpOutline />,
    variant: 'warning',
  },
}
