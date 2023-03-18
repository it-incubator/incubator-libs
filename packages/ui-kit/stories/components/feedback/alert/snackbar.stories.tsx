import { toast, ToastContainer } from 'react-toastify'

import { Button } from '../../../../src'

export default {
  title: 'Components/Feedback/Alert',
}

export const Default = {
  render: args => {
    return (
      <div>
        <ToastContainer hideProgressBar autoClose={false} />
        <Button onClick={() => toast('Default')}>Show notification</Button>
      </div>
    )
  },
}
