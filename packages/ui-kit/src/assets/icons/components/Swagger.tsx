import { IconProps, IconWrapper } from '../IconWrapper'

const Swagger = (allProps: IconProps) => {
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
              'M11.934 21C7.138 20.967 2.968 16.986 3 11.93 3.031 7.064 7.075 2.967 12.078 3c4.863.033 8.965 4.069 8.922 9.014.04 4.9-4.083 9.02-9.066 8.986zm0 0C7.138 20.967 2.968 16.986 3 11.93 3.031 7.064 7.075 2.967 12.078 3c4.863.033 8.965 4.069 8.922 9.014.04 4.9-4.083 9.02-9.066 8.986z'
            }
            fill={'#49A32B'}
          />
          <path
            d={
              'M15.128 12.01c-.021.401-.375.735-.723.677h-.006c-.386 0-.699-.31-.7-.693a.707.707 0 01.722-.68c.386 0 .728.325.707.695zm-6.206 3.893c.146.004.291 0 .46 0v1.048c-1.044.175-1.903-.119-2.114-.994a5.77 5.77 0 01-.133-.979c-.022-.349.017-.701-.01-1.05-.074-.957-.2-1.284-1.125-1.33v-1.192c.066-.015.134-.027.201-.034.508-.025.722-.18.835-.676.052-.279.083-.561.092-.845.04-.548.026-1.105.118-1.644.133-.78.62-1.159 1.426-1.201.229-.012.459-.002.718-.002v1.07c-.106.008-.204.023-.302.02-.656-.02-.69.202-.738.742-.03.338.011.682-.012 1.022a8.08 8.08 0 01-.136 1.005c-.095.482-.393.84-.806 1.144.802.518.893 1.323.945 2.14.028.44.016.882.06 1.32.035.339.168.425.521.436zm.676-4.59h.013a.692.692 0 01.681.738.678.678 0 01-.717.635H9.53a.689.689 0 01-.657-.72.69.69 0 01.725-.653zm2.39 0c.42-.003.698.267.7.678.002.423-.262.693-.679.695-.423.002-.702-.264-.705-.673a.661.661 0 01.683-.7zm5.003-.521c.111.413.328.559.767.579.072.003.143.015.242.026v1.192a1.04 1.04 0 01-.163.039c-.588.036-.856.275-.916.86-.038.374-.034.752-.06 1.127-.011.411-.05.822-.113 1.228-.15.737-.614 1.105-1.38 1.15-.246.014-.494.002-.76.002V15.93c.143-.009.27-.02.396-.024.457-.01.62-.157.642-.608.024-.496.035-.992.057-1.488.033-.716.23-1.356.903-1.803-.385-.273-.694-.602-.774-1.047-.097-.54-.128-1.09-.18-1.637-.026-.273-.024-.548-.051-.821-.03-.295-.233-.397-.503-.404-.155-.004-.31 0-.509 0v-1.04c1.263-.209 2.136.208 2.217 1.408.034.504.029 1.01.061 1.514.015.274.056.546.124.812z'
            }
            fill={'var(--color-bg-icon)'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}

export default Swagger