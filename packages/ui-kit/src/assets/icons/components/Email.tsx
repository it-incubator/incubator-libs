import { IconProps, IconWrapper } from '../IconWrapper'

const Email = (allProps: IconProps) => {
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
          <path d={'M12 21.6a9.6 9.6 0 100-19.2 9.6 9.6 0 000 19.2z'} fill={'#77B3D4'} />
          <path
            d={
              'M12 6c-3.63 0-6.6 2.97-6.6 6.6 0 3.63 2.97 6.6 6.6 6.6 1.05 0 2.1-.24 3.03-.72.3-.15.42-.51.27-.81a.601.601 0 00-.81-.27c-.78.39-1.59.6-2.46.6-2.97 0-5.4-2.43-5.4-5.4s2.43-5.4 5.4-5.4 5.4 2.43 5.4 5.4c0 .9-.24 1.8-.66 2.58-.54-.42-1.32-1.26-1.32-2.55V9.99c0-.33-.27-.6-.6-.6-.33 0-.6.27-.6.6v.03c-.6-.51-1.38-.84-2.22-.84-1.89 0-3.42 1.53-3.42 3.42s1.5 3.42 3.39 3.42c1.11 0 2.1-.54 2.73-1.38.69 1.26 1.86 1.89 1.92 1.92.27.15.6.06.78-.18.78-1.11 1.17-2.4 1.17-3.78C18.6 8.97 15.63 6 12 6zm0 8.82c-1.23 0-2.22-.99-2.22-2.22 0-1.23.99-2.22 2.22-2.22 1.23 0 2.22.99 2.22 2.22 0 1.23-.99 2.22-2.22 2.22z'
            }
            fill={'#231F20'}
            opacity={0.2}
          />
          <path
            d={
              'M12 18.6c-3.63 0-6.6-2.97-6.6-6.6 0-3.63 2.97-6.6 6.6-6.6 3.63 0 6.6 2.97 6.6 6.6 0 1.35-.42 2.67-1.17 3.78-.18.24-.51.33-.78.18-.09-.06-2.43-1.26-2.43-3.93V9.39c0-.33.27-.6.6-.6.33 0 .6.27.6.6v2.64c0 1.29.78 2.13 1.32 2.55.42-.78.66-1.68.66-2.58 0-2.97-2.43-5.4-5.4-5.4S6.6 9.03 6.6 12s2.43 5.4 5.4 5.4c.87 0 1.71-.21 2.46-.6.3-.15.66-.03.81.27.15.3.03.66-.27.81-.9.48-1.95.72-3 .72z'
            }
            fill={'var(--color-bg-icon)'}
          />
          <path
            d={
              'M12 9.78c1.23 0 2.22.99 2.22 2.22 0 1.23-.99 2.22-2.22 2.22-1.23 0-2.22-.99-2.22-2.22 0-1.23.99-2.22 2.22-2.22zm0-1.2c-1.89 0-3.42 1.53-3.42 3.42s1.53 3.42 3.42 3.42 3.42-1.53 3.42-3.42S13.89 8.58 12 8.58z'
            }
            fill={'var(--color-bg-icon)'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}

export default Email
