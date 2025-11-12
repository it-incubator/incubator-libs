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

import { File as FileIcon, FolderClosed, FolderOpen } from '../../assets/icons'
import { clsx } from 'clsx'

import s from './file-tree.module.scss'

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
    folderIcon: s.fileIcon,
    folderItem: s.folderItem,
    folderLabel: s.fileLabel,
  }

  const toggle = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const folderIcon = isOpen ? (
    <FolderOpen className={classNames.folderIcon} height={14} size={14} />
  ) : (
    <FolderClosed className={classNames.folderIcon} height={14} size={14} />
  )

  return (
    <li className={classNames.folderItem}>
      <button className={classNames.folderButton} onClick={toggle} title={name} type={'button'}>
        <Indent />
        {folderIcon}
        <span className={classNames.folderLabel}>{label ?? name}</span>
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
  onClick?: (fileName: string) => void
}

const File = memo<FileProps>(({ active, label, name, onClick }) => {
  const classNames = {
    fileContent: clsx(s.fileContent, onClick && s.clickable),
    fileIcon: clsx(s.fileIcon),
    fileItem: clsx(s.fileItem, active && s.active),
    fileLabel: clsx(s.fileLabel),
  }
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick(name)
    }
  }, [name, onClick])

  const Component = onClick ? 'button' : 'span'

  return (
    <li className={classNames.fileItem}>
      <Component
        className={classNames.fileContent}
        onClick={handleClick}
        {...(onClick ? { type: 'button' } : {})}
      >
        <Indent />
        <FileIcon className={classNames.fileIcon} height={14} size={14} />
        <span className={classNames.fileLabel}>{label ?? name}</span>
      </Component>
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
