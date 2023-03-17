import { useState } from 'react'

import { Meta } from '@storybook/react'

import { Sidebar } from '../../../../src'

export default {
  title: 'Components/Layout/Sidebar',
  component: Sidebar,
} as Meta<typeof Sidebar>

export const Default = {
  render: args => {
    const [open, setOpen] = useState(true)

    return (
      <div>
        <Sidebar open={open} onOpenChange={setOpen}>
          <ul
            style={{
              padding: '10px',
              width: '100%',
              listStyle: 'none',
            }}
          >
            <li>Инфопанель</li>
            <li>Видеоконтент</li>
            <li>Библиотека решений</li>
            <li>Календарь</li>
            <li>Домашнее задание</li>
          </ul>
        </Sidebar>
        <div style={{ paddingLeft: open ? '264px' : '24px' }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, eligendi est et
            eum fugit harum ipsum iste, itaque magni nesciunt omnis porro quas quibusdam quidem
            quisquam quo recusandae soluta ut!
          </p>{' '}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, eligendi est et
            eum fugit harum ipsum iste, itaque magni nesciunt omnis porro quas quibusdam quidem
            quisquam quo recusandae soluta ut!
          </p>{' '}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, eligendi est et
            eum fugit harum ipsum iste, itaque magni nesciunt omnis porro quas quibusdam quidem
            quisquam quo recusandae soluta ut!
          </p>{' '}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, eligendi est et
            eum fugit harum ipsum iste, itaque magni nesciunt omnis porro quas quibusdam quidem
            quisquam quo recusandae soluta ut!
          </p>{' '}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, eligendi est et
            eum fugit harum ipsum iste, itaque magni nesciunt omnis porro quas quibusdam quidem
            quisquam quo recusandae soluta ut!
          </p>{' '}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, eligendi est et
            eum fugit harum ipsum iste, itaque magni nesciunt omnis porro quas quibusdam quidem
            quisquam quo recusandae soluta ut!
          </p>{' '}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, eligendi est et
            eum fugit harum ipsum iste, itaque magni nesciunt omnis porro quas quibusdam quidem
            quisquam quo recusandae soluta ut!
          </p>{' '}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, eligendi est et
            eum fugit harum ipsum iste, itaque magni nesciunt omnis porro quas quibusdam quidem
            quisquam quo recusandae soluta ut!
          </p>{' '}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, eligendi est et
            eum fugit harum ipsum iste, itaque magni nesciunt omnis porro quas quibusdam quidem
            quisquam quo recusandae soluta ut!
          </p>{' '}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, eligendi est et
            eum fugit harum ipsum iste, itaque magni nesciunt omnis porro quas quibusdam quidem
            quisquam quo recusandae soluta ut!
          </p>
        </div>
      </div>
    )
  },
}
