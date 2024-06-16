import { useId, useState } from 'react'

import {
  Label,
  Modal,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Typography,
} from '../../'
import { VerticalContainer } from '../../../storybook-utils/components/containers/vertical'
import { Meta } from '@storybook/react'

const options = [
  {
    label: 'Apple',
    value: 'apple',
  },
  {
    label: 'Стажировка для QA manual',
    value: 'qa-internship',
  },
  {
    disabled: true,
    label: 'Banana',
    value: 'banana',
  },
  {
    label: 'Blueberry',
    value: 'blueberry',
  },
  {
    label: 'Grapes',
    value: 'grapes',
  },
  {
    label: 'Pineapple',
    value: 'pineapple',
  },
  {
    label: 'Cherry',
    value: 'cherry',
  },
  {
    label: 'Grapefruit',
    value: 'grapefruit',
  },
  {
    label: 'Lemon',
    value: 'lemon',
  },
  {
    label: 'Mango',
    value: 'mango',
  },
  {
    label: 'Apple',
    value: 'apple1',
  },
  {
    label: 'Banana',
    value: 'banana1',
  },
]

export default {
  component: Select,
  title: 'Components/Select',
} as Meta<typeof Select>

export const Simple = {
  args: {
    disabled: false,
    options,
    placeholder: 'Все курсы',
  },

  render: args => {
    return (
      <Select>
        <SelectTrigger>
          <SelectValue placeholder={'Theme'} />
        </SelectTrigger>
        <SelectContent>
          {options.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  },
}

export const SimpleWithLabel = {
  render: () => {
    const id = useId()

    return (
      <Select>
        <Label htmlFor={id} label={'Select a theme'} />
        <SelectTrigger id={id} placeholder={'Theme'} />
        <SelectContent>
          {options.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  },
}

export const Required = {
  render: () => {
    const id = useId()

    return (
      <Select>
        <Label htmlFor={id} label={'Select a theme'} required />
        <SelectTrigger id={id} placeholder={'Theme'} />
        <SelectContent>
          {options.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  },
}

//
// export const Multiple = {
//   args: {
//     disabled: false,
//     multiple: true,
//     options,
//     placeholder: 'Все курсы',
//   },
//
//   render: args => {
//     const [values, setValues] = useState([])
//
//     return (
//       <VerticalContainer>
//         <Select {...args} multiple onChange={setValues} value={values} />
//         <div>Selected values: {values.join(', ')}</div>
//       </VerticalContainer>
//     )
//   },
// }
//
export const Error = {
  render: () => {
    const id = useId()

    return (
      <Select>
        <Label htmlFor={id} label={'Select a theme'} required />
        <SelectTrigger id={id} placeholder={'Theme'} />
        <SelectContent>
          {options.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
        <Typography.Error>Something went wrong</Typography.Error>
      </Select>
    )
  },
}

export const Secondary = {
  render: () => {
    const id = useId()

    return (
      <Select>
        <Label htmlFor={id} label={'Select a theme'} required />
        <SelectTrigger id={id} placeholder={'Theme'} variant={'secondary'} />
        <SelectContent variant={'secondary'}>
          {options.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  },
}

export const SmallWithLongItemNames = {
  render: () => {
    const id = useId()

    return (
      <Select>
        <Label htmlFor={id} label={'Select a theme'} required />
        <SelectTrigger id={id} placeholder={'Theme'} style={{ width: '240px' }} />
        <SelectContent>
          {options.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
          <SelectItem value={'long'}>
            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
          </SelectItem>
        </SelectContent>
      </Select>
    )
  },
}

export const onModal = () => {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <button onClick={() => setOpen(!open)} type={'button'}>
        Open modal
      </button>
      <Modal onClose={handleClose} open={open} title={'Select'}>
        <VerticalContainer>
          <Select>
            <SelectTrigger placeholder={'Theme'} />
            <SelectContent>
              {options.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </VerticalContainer>
      </Modal>
    </div>
  )
}
