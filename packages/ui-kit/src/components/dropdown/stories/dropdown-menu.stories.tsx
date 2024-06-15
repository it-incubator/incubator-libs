import { useState } from 'react'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DarkMode,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Logout,
  Profile,
  Toggle,
} from '../../../'
import { useDarkMode } from '../../../../storybook-utils/hooks/use-dark-mode'
// @ts-expect-error
import DocumentationTemplate from './dropdown-menu.mdx'
import { Meta, StoryObj } from '@storybook/react'

// @ts-expect-error
import s from './dropdown-menu.stories.module.scss'

const photoSrc =
  'https://s3-alpha-sig.figma.com/img/d90f/757a/1b9aaa91b8f6abbce6ec119ed3e3deb0?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=orhn~7U5uZStJU-k~RXS6OnoDS1LCH8Jj9HVDcc~SbnqjSXlAzMC8i4G7znNcv-YxVQew~e9JHJoQ2v60nv5FKUV0Ui1b25mVBKwMLH6Ui9FSy0A0v-1IsZ1~itrsynfC62nGFsdsudAC4UW0yUTAyalHI8JE9xwKFZKSMUHXAHZ6ipA~uNWrvbbVW55duNkt9auW2fHTQND5fuPYTGKHjwDVuPjlPqzAJ6zKZ2Zfw~M8EEyRAoeJdBG8rj2zYDR5B9syIvF-Oker1eWqO~UxUcAwO~CFFCeRqBiEtTCfa7Dffy2bXf3xGhIkU4tKpFbuGKh~UFUPZlT7498-AlOzw__'

const meta = {
  component: DropdownMenu,
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
  subcomponents: {
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  },
  title: 'Components/Dropdown Menu',
} satisfies Meta<typeof DropdownMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Dark: Story = {
  render: args => {
    useDarkMode()

    const [isDarkMode, setIsDarkMode] = useState(false)

    return (
      <DropdownMenu>
        <DropdownMenuTrigger className={'rounded-full'} style={{ marginLeft: '60px' }}>
          <Avatar>
            <AvatarImage alt={'Аватар'} src={photoSrc} />
            <AvatarFallback>АБ</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent style={{ minWidth: '217px' }}>
          <DropdownMenuLabel className={s.userDropDownLabel}>
            <Avatar>
              <AvatarImage alt={'Аватар'} src={photoSrc} />
              <AvatarFallback>АБ</AvatarFallback>
            </Avatar>
            Артем Базунц
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <a href={'https://google.com'} rel={'noopener noreferrer'} target={'_blank'}>
              <Profile size={16} />
              Мой профиль
            </a>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className={s.userDropdownThemeToggleItem}
            onSelect={e => {
              e.preventDefault()
              setIsDarkMode(!isDarkMode)
            }}
          >
            <div>
              <DarkMode size={16} />
              Темная тема
            </div>
            <Toggle checked={isDarkMode} onCheckedChange={setIsDarkMode} />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Logout size={16} />
            Выйти из аккаунта
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const Light: Story = {
  render: args => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    return (
      <DropdownMenu>
        <DropdownMenuTrigger className={'rounded-full'}>
          <Avatar>
            <AvatarImage alt={'Аватар'} src={photoSrc} />
            <AvatarFallback>АБ</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent style={{ minWidth: '217px' }}>
          <DropdownMenuLabel className={s.userDropDownLabel}>
            <Avatar>
              <AvatarImage alt={'Аватар'} src={photoSrc} />
              <AvatarFallback>АБ</AvatarFallback>
            </Avatar>
            Артем Базунц
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <a href={'https://google.com'} rel={'noopener noreferrer'} target={'_blank'}>
              <Profile size={16} />
              Мой профиль
            </a>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className={s.userDropdownThemeToggleItem}
            onSelect={e => {
              e.preventDefault()
              setIsDarkMode(!isDarkMode)
            }}
          >
            <div>
              <DarkMode size={16} />
              Темная тема
            </div>
            <Toggle checked={isDarkMode} onCheckedChange={setIsDarkMode} />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Logout size={16} />
            Выйти из аккаунта
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const WithDisabledItem: Story = {
  render: args => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    return (
      <DropdownMenu>
        <DropdownMenuTrigger className={'rounded-full'}>
          <Avatar>
            <AvatarImage alt={'Аватар'} src={photoSrc} />
            <AvatarFallback>АБ</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent style={{ minWidth: '217px' }}>
          <DropdownMenuLabel className={s.userDropDownLabel}>
            <Avatar>
              <AvatarImage alt={'Аватар'} src={photoSrc} />
              <AvatarFallback>АБ</AvatarFallback>
            </Avatar>
            Артем Базунц
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <a href={'https://google.com'} rel={'noopener noreferrer'} target={'_blank'}>
              <Profile size={16} />
              Мой профиль
            </a>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className={s.userDropdownThemeToggleItem}
            onSelect={e => {
              e.preventDefault()
              setIsDarkMode(!isDarkMode)
            }}
          >
            <div>
              <DarkMode size={16} />
              Темная тема
            </div>
            <Toggle checked={isDarkMode} onCheckedChange={setIsDarkMode} />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem disabled>
            <Logout size={16} />
            Выйти из аккаунта
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}
