import * as Stories from '../header/header.stories'
import { Loader } from './loader'
import { Meta } from '@storybook/react'

export default {
  component: Loader,
  title: 'Components/Loader',
} satisfies Meta<typeof Loader>

export const Default = Stories.LoaderActive
