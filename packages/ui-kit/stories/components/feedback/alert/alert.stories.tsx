import { Alert, CheckBox } from '../../../../src'
import { Meta } from '@storybook/react'

export default {
  component: Alert,
  title: 'Components/Feedback/Alert',
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
    icon: <CheckBox />,
    variant: 'warning',
  },
}
