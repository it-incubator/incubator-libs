import { IconProps, IconWrapper } from '../IconWrapper'

const Viber = (allProps: IconProps) => {
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
          <rect fill={'#675DA9'} height={18} rx={9} width={18} x={3} y={3} />
          <path
            d={
              'M16.408 7.57c-.298-.275-1.503-1.15-4.19-1.163 0 0-3.167-.192-4.71 1.225-.86.86-1.162 2.115-1.194 3.675-.03 1.559-.072 4.48 2.745 5.273h.002l-.002 1.207s-.017.49.305.589c.389.12.619-.253.991-.654.204-.22.485-.542.699-.79 1.925.162 3.407-.208 3.575-.263.389-.128 2.59-.409 2.948-3.33.37-3.006-.18-4.91-1.17-5.77zm.326 5.557c-.302 2.44-2.086 2.593-2.415 2.699-.14.045-1.44.37-3.078.261 0 0-1.22 1.472-1.599 1.854-.06.06-.13.084-.175.072-.065-.017-.084-.094-.082-.207l.01-2.009c-.003 0-.003 0 0 0-2.384-.66-2.245-3.148-2.219-4.449.027-1.301.272-2.37 1-3.087 1.303-1.182 3.994-1.006 3.994-1.006 2.271.01 3.359.694 3.611.922.838.72 1.265 2.437.953 4.95z'
            }
            fill={'var(--color-bg-icon)'}
          />
          <path
            d={
              'M13.325 11.394a.152.152 0 01-.152-.144c-.026-.516-.268-.768-.763-.795a.153.153 0 01.017-.305c.653.036 1.018.41 1.051 1.083a.15.15 0 01-.144.158c-.005.003-.007.003-.01.003z'
            }
            fill={'var(--color-bg-icon)'}
          />
          <path
            d={
              'M14.103 11.653H14.1a.153.153 0 01-.15-.156c.013-.518-.136-.938-.453-1.284-.315-.346-.75-.533-1.323-.574a.151.151 0 01-.14-.163.151.151 0 01.164-.14c.648.049 1.16.274 1.524.673.368.4.545.902.534 1.495a.154.154 0 01-.154.15z'
            }
            fill={'var(--color-bg-icon)'}
          />
          <path
            d={
              'M14.9 11.965a.15.15 0 01-.15-.151c-.008-.93-.274-1.637-.817-2.168-.535-.523-1.215-.79-2.014-.797a.153.153 0 010-.305c.881.007 1.63.302 2.223.883.596.582.9 1.383.91 2.382a.15.15 0 01-.151.156c.002 0 .002 0 0 0zM12.447 13.274s.214.019.329-.123l.223-.28c.108-.14.37-.229.624-.087.142.079.399.237.557.355.17.125.517.413.519.415.166.14.204.344.091.562v.005a2.34 2.34 0 01-.465.574c-.003 0-.003.002-.005.002-.161.135-.32.212-.473.228-.02.005-.041.005-.07.005a.654.654 0 01-.202-.031l-.004-.007c-.24-.067-.639-.236-1.302-.603a7.73 7.73 0 01-1.095-.723 5.622 5.622 0 01-.492-.437l-.017-.016a2.685 2.685 0 01-.016-.017l-.017-.017-.017-.017a6.028 6.028 0 01-.437-.492 7.594 7.594 0 01-.723-1.095c-.367-.665-.535-1.063-.602-1.301l-.007-.005a.654.654 0 01-.032-.201c0-.03 0-.05.005-.07.02-.156.096-.312.228-.473 0-.002.003-.002.003-.005.177-.197.37-.35.574-.466h.004c.216-.113.42-.074.562.092 0 0 .29.348.415.518.118.161.277.416.356.557.141.255.053.516-.087.624l-.28.224c-.142.115-.123.329-.123.329s.415 1.58 1.976 1.976z'
            }
            fill={'var(--color-bg-icon)'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}

export default Viber
