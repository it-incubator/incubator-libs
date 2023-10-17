import { FileTree } from '../../../src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: FileTree,
  title: 'Components/FileTree',
} satisfies Meta<typeof FileTree>

type Story = StoryObj<typeof meta>

export default meta

export const Primary: Story = {
  args: {
    children: (
      <FileTree.Folder defaultOpen name={'pages'}>
        <FileTree.File name={'_meta.json'} />
        <FileTree.File name={'contact.md'} />
        <FileTree.File name={'index.mdx'} />
        <FileTree.Folder name={'about'}>
          <FileTree.File name={'_meta.json'} />
          <FileTree.File name={'a-file-with-a-very-very-very-long-name.json'} />
          <FileTree.File name={'index.mdx'} />
        </FileTree.Folder>
      </FileTree.Folder>
    ),
  },
}

export const WithActiveFile: Story = {
  args: {
    children: (
      <FileTree.Folder defaultOpen name={'pages'}>
        <FileTree.File name={'_meta.json'} />
        <FileTree.File name={'contact.md'} />
        <FileTree.File name={'index.mdx'} />
        <FileTree.Folder defaultOpen name={'about'}>
          <FileTree.File name={'_meta.json'} />
          <FileTree.File active name={'legal.md'} />
          <FileTree.File name={'index.mdx'} />
        </FileTree.Folder>
      </FileTree.Folder>
    ),
  },
}

export const WithCustomFileLabel: Story = {
  args: {
    children: (
      <FileTree.Folder defaultOpen name={'pages'}>
        <FileTree.File name={'_meta.json'} />
        <FileTree.File name={'contact.md'} />
        <FileTree.File
          label={
            <a href={'https://google.com'} rel={'noreferrer'} target={'_blank'}>
              google.com
            </a>
          }
          name={'google'}
        />
        <FileTree.Folder defaultOpen name={'about'}>
          <FileTree.File name={'_meta.json'} />
          <FileTree.File active name={'legal.md'} />
          <FileTree.File name={'index.mdx'} />
        </FileTree.Folder>
      </FileTree.Folder>
    ),
  },
}
export const WithLongFileName: Story = {
  args: {
    children: (
      <FileTree.Folder defaultOpen name={'pages'}>
        <FileTree.File name={'_meta.json'} />
        <FileTree.File
          name={
            'looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong'
          }
        />
        <FileTree.File
          label={
            <a href={'https://google.com'} rel={'noreferrer'} target={'_blank'}>
              google.com
            </a>
          }
          name={'google'}
        />
        <FileTree.Folder defaultOpen name={'about'}>
          <FileTree.File name={'_meta.json'} />
          <FileTree.File active name={'legal.md'} />
          <FileTree.File name={'index.mdx'} />
        </FileTree.Folder>
      </FileTree.Folder>
    ),
  },
}
export const WithLongFolderName: Story = {
  args: {
    children: (
      <FileTree.Folder defaultOpen name={'about'}>
        <FileTree.File name={'_meta.json'} />
        <FileTree.File
          label={
            <a href={'https://google.com'} rel={'noreferrer'} target={'_blank'}>
              google.com
            </a>
          }
          name={'google'}
        />
        <FileTree.Folder
          defaultOpen
          name={
            'looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong'
          }
        >
          <FileTree.File name={'_meta.json'} />
          <FileTree.File active name={'legal.md'} />
          <FileTree.File name={'index.mdx'} />
        </FileTree.Folder>
      </FileTree.Folder>
    ),
  },
}
