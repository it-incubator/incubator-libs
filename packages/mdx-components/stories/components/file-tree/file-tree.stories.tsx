import { Meta, StoryObj } from '@storybook/react'

import { FileTree } from '../../../src'

const meta = {
  title: 'Components/FileTree',
  component: FileTree,
} satisfies Meta<typeof FileTree>

type Story = StoryObj<typeof meta>

export default meta

export const Primary: Story = {
  args: {
    children: (
      <FileTree.Folder name="pages" defaultOpen>
        <FileTree.File name="_meta.json"/>
        <FileTree.File name="contact.md"/>
        <FileTree.File name="index.mdx"/>
        <FileTree.Folder name="about">
          <FileTree.File name="_meta.json"/>
          <FileTree.File name="a-file-with-a-very-very-very-long-name.json"/>
          <FileTree.File name="index.mdx"/>
        </FileTree.Folder>
      </FileTree.Folder>
    ),
  },
}

export const WithActiveFile: Story = {
  args: {
    children: (
      <FileTree.Folder name="pages" defaultOpen>
        <FileTree.File name="_meta.json" />
        <FileTree.File name="contact.md" />
        <FileTree.File name="index.mdx" />
        <FileTree.Folder name="about" defaultOpen>
          <FileTree.File name="_meta.json" />
          <FileTree.File name="legal.md" active />
          <FileTree.File name="index.mdx" />
        </FileTree.Folder>
      </FileTree.Folder>
    ),
  },
}

export const WithCustomFileLabel: Story = {
  args: {
    children: (
      <FileTree.Folder name="pages" defaultOpen>
        <FileTree.File name="_meta.json" />
        <FileTree.File name="contact.md" />
        <FileTree.File
          name="google"
          label={
            <a href="https://google.com" target="_blank" rel="noreferrer">
              google.com
            </a>
          }
        />
        <FileTree.Folder name="about" defaultOpen>
          <FileTree.File name="_meta.json" />
          <FileTree.File name="legal.md" active />
          <FileTree.File name="index.mdx" />
        </FileTree.Folder>
      </FileTree.Folder>
    ),
  },
}
