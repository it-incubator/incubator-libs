import { createContext, memo, useCallback, useContext, useState } from 'react'
import type { ReactElement, ReactNode } from 'react'

import { clsx } from 'clsx'

import { FileIcon, FolderIcon, FolderOpen } from '../../assets/icons'

import s from './file-tree.module.scss'

export type FileTreeProps = {
  children: ReactNode
}

export const FileTree = ({ children }: FileTreeProps) => {
  const classNames = {
    tree: s.tree,
    container: s.container,
  }

  return (
    <div className={clsx(classNames.tree)}>
      <div className={classNames.container}>{children}</div>
    </div>
  )
}

export type FolderProps = {
  name: string
  label?: ReactElement
  defaultOpen?: boolean
  children: ReactNode
}

const Folder = memo<FolderProps>(({ label, name, children, defaultOpen = false }) => {
  const indent = useIndent()
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const classNames = {
    folderItem: s.folderItem,
    folderButton: s.folderButton,
  }

  const toggle = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  return (
    <li className={classNames.folderItem}>
      <button onClick={toggle} title={name} className={classNames.folderButton}>
        <Ident />
        {isOpen ? <FolderOpen size={14} height={17} /> : <FolderIcon size={14} height={17} />}
        <span>{label ?? name}</span>
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
  name: string
  label?: ReactElement
  active?: boolean
}

const File = memo<FileProps>(({ label, name, active }) => {
  const classNames = {
    fileItem: clsx(s.fileItem, active && s.active),
    fileContent: clsx(s.fileContent),
    fileLabel: clsx(s.fileLabel),
  }

  return (
    <li className={classNames.fileItem}>
      <span className={classNames.fileContent}>
        <Ident />
        <FileIcon size={14} height={17} />
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
const Ident = (): ReactElement => {
  const length = useIndent()
  const classNames = {
    ident: clsx(s.ident),
  }

  return (
    <>
      {Array.from({ length }, (_, i) => (
        <span className={classNames.ident} key={i} />
      ))}
    </>
  )
}

FileTree.Folder = Folder
FileTree.File = File
