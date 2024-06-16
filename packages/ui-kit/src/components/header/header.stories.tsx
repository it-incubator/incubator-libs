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
  Header,
  Logout,
  Profile,
  Select,
  Toggle,
} from '../..'
import { VerticalContainer } from '../../../storybook-utils/components/containers/vertical'
import { Meta, StoryObj } from '@storybook/react'

// @ts-expect-error
import s from '../dropdown/stories/dropdown-menu.stories.module.scss'

const options = [
  {
    label: 'Frontend',
    value: 'frontend',
  },
  {
    label: 'Backend',
    value: 'backend',
  },
]
const photoSrc =
  'https://s3-alpha-sig.figma.com/img/d90f/757a/1b9aaa91b8f6abbce6ec119ed3e3deb0?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=orhn~7U5uZStJU-k~RXS6OnoDS1LCH8Jj9HVDcc~SbnqjSXlAzMC8i4G7znNcv-YxVQew~e9JHJoQ2v60nv5FKUV0Ui1b25mVBKwMLH6Ui9FSy0A0v-1IsZ1~itrsynfC62nGFsdsudAC4UW0yUTAyalHI8JE9xwKFZKSMUHXAHZ6ipA~uNWrvbbVW55duNkt9auW2fHTQND5fuPYTGKHjwDVuPjlPqzAJ6zKZ2Zfw~M8EEyRAoeJdBG8rj2zYDR5B9syIvF-Oker1eWqO~UxUcAwO~CFFCeRqBiEtTCfa7Dffy2bXf3xGhIkU4tKpFbuGKh~UFUPZlT7498-AlOzw__'

const meta = {
  component: Header,
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => {
    const [value, setValue] = useState('frontend')
    const [isDarkMode, setIsDarkMode] = useState(false)
    // https://github.com/radix-ui/primitives/issues/760#issuecomment-952102287
    const [container, setContainer] = useState(null)

    return (
      <VerticalContainer>
        <Header {...args}>
          <div ref={setContainer} />
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              gap: '24px',
              marginLeft: 'auto',
              paddingInline: '24px',
            }}
          >
            <Select onChange={setValue} options={options} value={value} width={210} />
            <DropdownMenu>
              <DropdownMenuTrigger className={'rounded-full'} style={{ marginLeft: '60px' }}>
                <Avatar>
                  <AvatarImage alt={'Аватар'} src={photoSrc} />
                  <AvatarFallback>АБ</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent container={container} style={{ minWidth: '217px' }}>
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
          </div>
        </Header>
      </VerticalContainer>
    )
  },
}

export const LoaderActive = {
  ...Default,
  args: {
    isLoading: true,
  },
}
