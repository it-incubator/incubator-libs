import type { Meta, StoryObj } from '@storybook/react'

import { useEffect, useRef } from 'react'

import { VerticalContainer } from '../../../../storybook-utils/components/containers/vertical'
import { NavigationButton } from '../index'

// @ts-ignore
import s from './navigation-button.module.scss'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['backward', 'forward'],
    },
  },
  component: NavigationButton,
  title: 'Components/NavigationButton',
} satisfies Meta<typeof NavigationButton>

export default meta
type Story = StoryObj<typeof meta>

export const Backward: Story = {
  args: {
    children: 'NavigationButton',
    variant: 'backward',
  },
}

export const Forward: Story = {
  args: {
    children: 'NavigationButton',
  },
}

export const WithRef: Story = {
  render: () => {
    const ref = useRef<HTMLButtonElement>(null)
    const aref = useRef<HTMLAnchorElement>(null)

    useEffect(() => {
      console.log(ref.current)
      console.log(aref.current)
    }, [])

    return (
      <VerticalContainer>
        <NavigationButton as={'a'} ref={aref}>
          Some title
        </NavigationButton>
        <NavigationButton ref={ref}>Some title</NavigationButton>
        See console logs
      </VerticalContainer>
    )
  },
}

export const Groupped: Story = {
  render: () => {
    const ref = useRef<HTMLButtonElement>(null)
    const aref = useRef<HTMLAnchorElement>(null)

    useEffect(() => {
      console.log(ref.current)
      console.log(aref.current)
    }, [])

    return (
      <div className={s.navigationButtonsContainer}>
        <NavigationButton ref={ref} variant={'backward'}>
          Headless компоненты, универсальный доступ, Radix UI
        </NavigationButton>
        <NavigationButton as={'a'} ref={aref}>
          Storybook и CSS переменные
        </NavigationButton>
      </div>
    )
  },
}
