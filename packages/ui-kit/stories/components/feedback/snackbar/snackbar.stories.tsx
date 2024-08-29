import { toast } from 'react-toastify'

import { Button, Snackbar } from '../../../../src'

export default {
  title: 'Components/Feedback/Snackbar',
}

export const Default = {
  render: () => {
    return (
      <div>
        <Snackbar />
        <Button onClick={() => toast('Default')}>Show notification</Button>
      </div>
    )
  },
}
export const Success = {
  render: () => {
    return (
      <div>
        <Snackbar />
        <Button onClick={() => toast.success('Success')}>Show notification</Button>
      </div>
    )
  },
}
export const Warning = {
  render: () => {
    return (
      <div>
        <Snackbar />
        <Button onClick={() => toast.warn('Warning')}>Show notification</Button>
      </div>
    )
  },
}
export const Error = {
  render: () => {
    return (
      <div>
        <Snackbar />
        <Button onClick={() => toast.error('Error')}>Show notification</Button>
      </div>
    )
  },
}

export const WithContentOverflow = {
  render: () => {
    return (
      <div>
        <Snackbar autoClose={100000} />
        <Button
          onClick={() =>
            toast.error('Такого плейлиста не существует или ты просмотрел все видео в нём')
          }
        >
          Show notification
        </Button>
      </div>
    )
  },
}
