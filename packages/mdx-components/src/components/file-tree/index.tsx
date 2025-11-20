'use client'
import {
  ReactElement,
  ReactNode,
  createContext,
  memo,
  useCallback,
  useContext,
  useState,
} from 'react'

import { clsx } from 'clsx'

import s from './file-tree.module.scss'

import { FileIcon, FolderIcon, FolderOpen } from '../../assets/icons'

export type FileTreeProps = {
  children: ReactNode
}

export const FileTree = ({ children }: FileTreeProps) => {
  const classNames = {
    container: s.container,
    tree: s.tree,
  }

  return (
    <div className={classNames.tree}>
      <div className={classNames.container}>{children}</div>
    </div>
  )
}

export type FolderProps = {
  children: ReactNode
  defaultOpen?: boolean
  label?: ReactElement
  name: string
}

const Folder = memo<FolderProps>(({ children, defaultOpen = false, label, name }) => {
  const indent = useIndent()
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const classNames = {
    folderButton: s.folderButton,
    folderItem: s.folderItem,
  }

  const toggle = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const folderIcon = isOpen ? (
    <FolderOpen height={14} size={14} />
  ) : (
    <FolderIcon height={14} size={14} />
  )

  return (
    <li className={classNames.folderItem}>
      <button className={classNames.folderButton} onClick={toggle} title={name} type={'button'}>
        <Indent />
        {folderIcon}
        <span className={s.fileLabel}>{label ?? name}</span>
      </button>
      {isOpen && (
        <ul>
          <IndentContext.Provider value={indent + 1}>{children}</IndentContext.Provider>
        </ul>
      )}
    </li>
  )
})

export type FileProps = {
  active?: boolean
  label?: ReactElement
  name: string
}

const File = memo<FileProps>(({ active, label, name }) => {
  const classNames = {
    fileContent: clsx(s.fileContent),
    fileItem: clsx(s.fileItem, active && s.active),
    fileLabel: clsx(s.fileLabel),
  }

  return (
    <li className={classNames.fileItem}>
      <span className={classNames.fileContent}>
        <Indent />
        <FileIcon height={14} size={14} />
        <span className={classNames.fileLabel}>{label ?? name}</span>
      </span>
    </li>
  )
})

const IndentContext = createContext(0)
/**
 * Custom hook to retrieve the current indentation level from the context.
 * @return {number} The current indentation level.
 */
const useIndent = () => {
  return useContext(IndentContext)
}

/**
 * Generates indents based on the current folder/file level.
 */
const Indent = (): ReactElement => {
  const length = useIndent()
  const classNames = {
    indent: clsx(s.indent),
  }

  return (
    <>
      {Array.from({ length }, (_, i) => (
        <span className={classNames.indent} key={i} />
      ))}
    </>
  )
}

FileTree.Folder = Folder
FileTree.File = File
