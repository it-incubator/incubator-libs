import { IconProps, IconWrapper } from '../IconWrapper'

const StudyRules = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'none'}
          height={'100%'}
          viewBox={'0 0 24 24'}
          width={'100%'}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <path
            d={
              'M12 17c.283 0 .52-.096.713-.288A.968.968 0 0013 16a.968.968 0 00-.287-.713A.968.968 0 0012 15a.968.968 0 00-.713.287A.968.968 0 0011 16c0 .283.096.52.287.712.192.192.43.288.713.288zm-1-4h2V7h-2v6zm-6 8c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 013 19V5c0-.55.196-1.02.587-1.413A1.926 1.926 0 015 3h4.2c.217-.6.58-1.083 1.088-1.45A2.857 2.857 0 0112 1c.633 0 1.204.183 1.713.55.508.367.87.85 1.087 1.45H19c.55 0 1.02.196 1.413.587C20.803 3.98 21 4.45 21 5v14c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0119 21H5zm0-2h14V5H5v14zm7-14.75a.728.728 0 00.75-.75.728.728 0 00-.75-.75.728.728 0 00-.75.75.728.728 0 00.75.75z'
            }
            fill={'currentColor'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}

export default StudyRules
