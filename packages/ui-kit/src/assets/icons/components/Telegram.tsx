import { IconWrapper } from '../IconWrapper'
import { IconProps } from '../types'

const Telegram = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <rect width={24} height={24} rx={12} fill="#419FD9" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.668 17.942c.838.367 1.153-.402 1.153-.402L18.04 6.392c-.017-.752-1.03-.297-1.03-.297L4.584 10.97s-.594.21-.542.576c.053.368.525.542.525.542l3.127 1.049s.944 3.093 1.136 3.687c.175.576.332.594.332.594.175.07.332-.053.332-.053l2.027-1.834 3.146 2.411zm.541-9.576s.437-.262.42 0c0 0 .07.035-.158.28-.21.21-5.155 4.648-5.819 5.242a.184.184 0 00-.087.157l-.192 1.643c-.035.175-.262.192-.315.035l-.82-2.691a.257.257 0 01.104-.297l6.867-4.369z"
            fill="#FEFEFE"
          />
        </svg>
      }
      {...restProps}
    />
  )
}

export default Telegram
