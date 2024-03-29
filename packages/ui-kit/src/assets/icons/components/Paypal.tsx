import { IconProps, IconWrapper } from '../IconWrapper'

const Paypal = (allProps: IconProps) => {
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
              'M19.456 6.14c.73 1.34.49 2.921.202 3.856-1.559 5.09-8.59 4.812-9.606 4.812s-1.253.948-1.253.948l-.76 3.314c-.206 1.163-1.261 1.105-1.261 1.105H4.489c-.057 0-.11-.004-.16-.011-.012.213.019.835.78.835h2.288s1.055.06 1.263-1.104l.758-3.313s.238-.948 1.254-.948c1.015 0 8.047.277 9.606-4.813.348-1.137.63-3.228-.822-4.682z'
            }
            fill={'#385C8E'}
          />
          <path
            d={
              'M7.332 18.347l.76-3.314s.236-.945 1.253-.945c1.015 0 8.047.275 9.605-4.814.57-1.86.966-6.274-6.133-6.274H7.688S6.622 2.95 6.36 4.084L3.01 18.546s-.145.906.772.906h2.29s1.054.06 1.261-1.105zm1.933-8.412l.681-2.939s.217-.799.918-.917c.7-.119 1.893.02 2.2.079 1.99.374 1.567 2.258 1.567 2.258-.394 2.909-4.922 2.505-4.922 2.505-.71-.256-.444-.986-.444-.986z'
            }
            fill={'#385C8E'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}

export default Paypal
