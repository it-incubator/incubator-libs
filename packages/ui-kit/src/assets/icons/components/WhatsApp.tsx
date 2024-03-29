import { IconProps, IconWrapper } from '../IconWrapper'

const WhatsApp = (allProps: IconProps) => {
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
          <rect fill={'#0DC143'} height={18} rx={9} width={18} x={3} y={3} />
          <path
            d={
              'M16.032 7.954a5.109 5.109 0 00-3.66-1.532c-2.896 0-5.223 2.355-5.194 5.221 0 .909.255 1.788.68 2.583l-.737 2.696 2.753-.71a5.067 5.067 0 002.469.625c2.866 0 5.193-2.356 5.193-5.222a5.15 5.15 0 00-1.504-3.66zm-3.66 8.003a4.216 4.216 0 01-2.186-.596l-.17-.085-1.646.426.425-1.618-.113-.17c-1.249-2.015-.653-4.683 1.39-5.931 2.044-1.249 4.683-.653 5.931 1.39 1.25 2.043.653 4.683-1.39 5.931a4.137 4.137 0 01-2.242.653zm2.496-3.15l-.312-.142s-.454-.198-.738-.34c-.028 0-.056-.029-.085-.029-.085 0-.142.029-.198.057 0 0-.029.028-.426.482a.156.156 0 01-.142.085h-.028a.216.216 0 01-.114-.056l-.142-.057a2.759 2.759 0 01-.823-.54c-.056-.056-.142-.113-.198-.17a3.173 3.173 0 01-.54-.68l-.028-.057c-.028-.029-.028-.057-.057-.114 0-.057 0-.113.029-.142 0 0 .113-.142.198-.227.057-.057.086-.142.142-.198.057-.085.085-.199.057-.284-.028-.142-.369-.908-.454-1.079a.328.328 0 00-.199-.141h-.312c-.057 0-.113.028-.17.028l-.028.028c-.057.029-.114.085-.17.114-.058.057-.086.113-.143.17a1.447 1.447 0 00-.312.88c0 .227.057.454.142.653l.028.085c.256.539.596 1.021 1.05 1.447l.114.114c.085.085.17.141.227.226A5.07 5.07 0 0013.279 14c.085.028.199.028.284.057h.284c.142 0 .312-.057.425-.114.086-.057.142-.057.2-.113l.056-.057c.057-.057.113-.085.17-.142.057-.057.114-.114.142-.17.057-.114.085-.256.114-.398v-.198s-.029-.029-.086-.057z'
            }
            fill={'var(--color-bg-icon)'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}

export default WhatsApp
